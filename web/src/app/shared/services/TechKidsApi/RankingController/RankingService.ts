import { Api } from "../axios-config";

export interface IRanking {
  id: number;
  name: string;
  character_id: number;
  totalStars: number;
  totalDiamonds: number;
  totalScore: number;
  rank: number;
}

const getRanking = async (): Promise<IRanking | Error> => {
  try {
    const { data } = await Api.get(`/scores/ranking`);

    if (data) {
      return data;
    }
    return new Error("Erro ao requisitar ranking");
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || "Erro ao requisitar ranking"
    );
  }
};

export const RankingService = {
  getRanking,
};
