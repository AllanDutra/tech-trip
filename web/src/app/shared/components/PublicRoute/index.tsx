import { ElementType, useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import { Navigate } from "react-router-dom";
import { routeConfigs } from "../../configs";

interface IPublicRouteProps {
  PageComponent: ElementType;
}

export const PublicRoute = ({ PageComponent }: IPublicRouteProps) => {
  const { isAuthenticated } = useAuthentication();

  const [isVerifyingAuthentication, setIsVerifyingAuthentication] =
    useState(true);

  const [isAuthenticatedConfirmed, setIsAuthenticatedConfirmed] =
    useState(false);

  useEffect(() => {
    (async () => {
      try {
        if (await isAuthenticated()) {
          setIsAuthenticatedConfirmed(true);
        } else {
          setIsAuthenticatedConfirmed(false);
        }
      } finally {
        setIsVerifyingAuthentication(false);
      }
    })();
  }, []);

  if (isVerifyingAuthentication) return <></>;

  if (!isAuthenticatedConfirmed) return <PageComponent />;

  return <Navigate to={routeConfigs.Map} />;
};
