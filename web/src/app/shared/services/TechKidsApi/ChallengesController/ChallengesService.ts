import { Api } from "../axios-config";

export interface IChallenges {
  id: number;
  message: string;
}

const getChallenge = async (id: number): Promise<IChallenges | Error> => {
  try {
    const { data } = await Api.get(`/challenges/${id}`);

    if (data) {
      return data;
    }

    return new Error("Erro ao buscar pelo desafio");
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || "Erro ao buscar pelo desafio"
    );
  }
};

export const ChallengesService = { getChallenge };
