import { ElementType, useEffect, useMemo, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import { Navigate, useLocation } from "react-router-dom";
import { routeConfigs } from "../../configs";
import { useProgress } from "../../hooks/useProgress";
import { TechTripApiService } from "../../services";

interface IPrivateRouteProps {
  PageComponent: ElementType;
  challengeNumber?: number;
}

export const PrivateRoute = ({
  PageComponent,
  challengeNumber,
}: IPrivateRouteProps) => {
  const { isAuthenticated } = useAuthentication();
  const { progress, setProgress } = useProgress();
  const location = useLocation();

  const [isVerifyingAuthentication, setIsVerifyingAuthentication] =
    useState(true);

  const [isAuthenticatedConfirmed, setIsAuthenticatedConfirmed] =
    useState(false);

  const isChallengeRoute = useMemo(
    (): boolean => location.pathname.includes("/desafio-"),
    [location]
  );

  const currentChallengeNumber = useMemo(
    () => progress.totalSolvedChallenges + 1,
    [progress]
  );

  useEffect(() => {
    (async () => {
      try {
        if (await isAuthenticated()) {
          setIsAuthenticatedConfirmed(true);

          const progressData =
            await TechTripApiService.ChallengesController.getChallengesProgress();

          setProgress(progressData);
        } else {
          setIsAuthenticatedConfirmed(false);
        }
      } finally {
        setIsVerifyingAuthentication(false);
      }
    })();
  }, []);

  if (isVerifyingAuthentication) return <></>;

  if (isAuthenticatedConfirmed) {
    if (isChallengeRoute && challengeNumber !== currentChallengeNumber)
      return <Navigate to={routeConfigs.Map} />;

    return <PageComponent />;
  }

  return <Navigate to={routeConfigs.Login} />;
};
