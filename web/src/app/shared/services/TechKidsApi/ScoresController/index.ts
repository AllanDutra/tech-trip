import { TechKidsApi } from "../axios-config";

interface ITotalScore {
  stars: number;
  diamonds: number;
}

interface IRankingScore {
  id: number;
  name: string;
  character_Id: number;
  totalStars: number;
  totalDiamonds: number;
  totalScore: number;
  rank: number;
}

// * requires authentication
const getTotalScore = async (): Promise<ITotalScore> => {
  try {
    const { data } = await TechKidsApi.get<ITotalScore>("/scores/total");

    return data;
  } catch {
    return { stars: 0, diamonds: 0 };
  }
};

// * requires authentication
const getRanking = async (): Promise<IRankingScore[]> => {
  try {
    const { data } = await TechKidsApi.get<IRankingScore[]>("/scores/ranking");

    return data;
  } catch {
    return [];
  }
};

export const ScoresController = { getTotalScore, getRanking };
