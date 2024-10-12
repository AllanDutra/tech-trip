import {
  TrackContainer,
  Map,
  Challenge,
  LineContainer,
  MapContainer,
  MapPinContainer,
  ChallengeContainer,
  StarsContainer,
} from "./styles";
import {
  NavBar,
  Line1,
  Line1Unfilled,
  Line2,
  Line2Unfilled,
  Line3,
  Line3Unfilled,
} from "../../shared/components";
import { MapPin } from "@phosphor-icons/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Star } from "@phosphor-icons/react/dist/ssr";
import { IChallenge } from "../../shared/services/TechTripApi/ChallengesController";
import { CommonPageContainer } from "../../shared/components/CommonPageContainer";
import { useLoading } from "../../shared/hooks/useLoading";
import { TechTripApiService } from "../../shared/services";
import { useProgress } from "../../shared/hooks/useProgress";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Functions } from "../../shared/functions";

export function MapPage() {
  const navigate = useNavigate();

  const { setIsGlobalLoadingActive } = useLoading();
  const { currentChallengeNumber } = useProgress();

  const mapPinRef = useRef<SVGSVGElement>(null);

  const [challenges, setChallenges] = useState<IChallenge[]>([]);

  const handleGoToChallenge = useCallback(
    (challenge_Number: number) => {
      if (challenge_Number < currentChallengeNumber)
        return toast.info("Você já completou este desafio anteriormente!");

      if (challenge_Number > currentChallengeNumber)
        return toast.info(
          `Complete o desafio ${currentChallengeNumber} antes de resolver o desafio ${challenge_Number}`
        );

      navigate(Functions.getChallengeRouteByNumber(challenge_Number));
    },
    [currentChallengeNumber]
  );

  const generateBottomValues = (numChallenges: number) => {
    const baseValues = [20, -26, -46];
    const increment = -137;

    const bottomValues = [];

    for (let i = 0; i < numChallenges; i++) {
      const baseIndex = i % 3;
      const offset = Math.floor(i / 3) * increment;
      bottomValues.push(baseValues[baseIndex] + offset);
    }

    return bottomValues;
  };

  const renderChallenges = () => {
    const numChallenges = challenges.length;
    const bottomValues = generateBottomValues(numChallenges);
    const leftValues = [45, 76, -4];
    const lines = [Line1, Line2, Line3];
    const linesUnfilled = [Line1Unfilled, Line2Unfilled, Line3Unfilled];
    const lineOffsets = [
      { bottomOffset: -40, leftOffset: 14 },
      { bottomOffset: -13, leftOffset: -71 },
      { bottomOffset: -32, leftOffset: 9 },
    ];

    return challenges.map((challenge, index) => {
      const bottom = bottomValues[index % bottomValues.length];
      const left = leftValues[index % leftValues.length];

      const isCompleted = challenge.challenge_Id < currentChallengeNumber;

      const LineComponent = isCompleted
        ? lines[index % lines.length]
        : linesUnfilled[index % linesUnfilled.length];

      const offsets = lineOffsets[index % lineOffsets.length];

      return (
        <React.Fragment key={challenge.challenge_Id}>
          {renderChallenge(
            challenge,
            isCompleted,
            bottom,
            left,
            <LineComponent />,
            offsets,
            numChallenges
          )}
        </React.Fragment>
      );
    });
  };

  const renderChallenge = (
    challenge: IChallenge,
    isCompleted: boolean,
    bottom: number,
    left: number,
    lineComponent: JSX.Element | null,
    lineOffsets: { bottomOffset: number; leftOffset: number } | null = null,

    numChallenges: number
  ) => {
    const lineBottom = lineOffsets ? bottom + lineOffsets.bottomOffset : 0;
    const lineLeft = lineOffsets ? left + lineOffsets.leftOffset : 0;

    return (
      <>
        <ChallengeContainer
          onClick={() => handleGoToChallenge(challenge.number)}
          bottom={bottom}
          left={left}
        >
          {challenge.current && (
            <MapPinContainer>
              <MapPin
                size={36}
                color="#2BCB9A"
                weight="duotone"
                ref={mapPinRef}
              />
            </MapPinContainer>
          )}

          <Challenge completed={isCompleted}>
            <span>{challenge.challenge_Id}</span>
          </Challenge>
          {isCompleted && (
            <StarsContainer>
              {[...Array(3)].map((_, index) => (
                <Star
                  key={index}
                  size={index == 1 ? 28 : 22}
                  color={index < challenge.score_Stars ? "#FFA425" : "#99B9B7"}
                  weight="fill"
                />
              ))}
            </StarsContainer>
          )}
        </ChallengeContainer>
        {challenge.challenge_Id != numChallenges && lineComponent && (
          <LineContainer bottom={lineBottom} left={lineLeft}>
            {lineComponent}
          </LineContainer>
        )}
      </>
    );
  };

  useEffect(() => {
    (async () => {
      try {
        setIsGlobalLoadingActive(true);

        const challengesData =
          await TechTripApiService.ChallengesController.getChallengesMap();

        setChallenges([...challengesData]);
      } finally {
        setIsGlobalLoadingActive(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (mapPinRef.current) {
      mapPinRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [challenges]);

  return (
    <CommonPageContainer>
      <TrackContainer>
        <MapContainer>
          <Map>{renderChallenges()}</Map>
        </MapContainer>

        <NavBar.FullComponent />
      </TrackContainer>
    </CommonPageContainer>
  );
}
