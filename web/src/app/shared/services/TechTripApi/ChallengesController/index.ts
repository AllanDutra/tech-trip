import { TechTripApi } from "../axios-config";

export interface IChallenge {
  challenge_Id: number;
  current: boolean;
  score_Stars: number;
  score_Diamonds: number;
  number: number;
}

interface IChallengesProgress {
  totalChallenges: number;
  totalSolvedChallenges: number;
  percentProgress: number;
}

export interface IProcessAttemptRequest {
  steps: number;
  studentResponse: string;
  challenge_Id: number;
}

interface IProcessAttemptResponse {
  correctAttempt: boolean;
  totalStars: number;
  totalDiamonds: number;
}

// * requires authentication
const getChallengesMap = async (): Promise<IChallenge[]> => {
  try {
    const { data } = await TechTripApi.get<IChallenge[]>("/challenges/map");

    return data;
  } catch {
    return [];
  }
};

// * requires authentication
const getChallengesProgress = async (): Promise<IChallengesProgress> => {
  try {
    const { data } = await TechTripApi.get<IChallengesProgress>(
      "/challenges/progress"
    );

    return data;
  } catch {
    return { totalChallenges: 0, totalSolvedChallenges: 0, percentProgress: 0 };
  }
};

// * requires authentication
const getCurrentStageOnCompoundChallenge = async (
  id: number
): Promise<number> => {
  try {
    const { data } = await TechTripApi.get<number>(
      `/challenges/compounds/current-stage/${id}`
    );

    return data;
  } catch {
    return 0;
  }
};

// * requires authentication
const processAttemptOnChallenge = async (
  body: IProcessAttemptRequest
): Promise<IProcessAttemptResponse> => {
  try {
    const { data } = await TechTripApi.post<IProcessAttemptResponse>(
      "/challenges/process-attempt",
      body
    );

    return data;
  } catch {
    return { correctAttempt: false, totalStars: 0, totalDiamonds: 0 };
  }
};

export const ChallengesController = {
  getChallengesMap,
  getChallengesProgress,
  getCurrentStageOnCompoundChallenge,
  processAttemptOnChallenge,
};
