import { Api } from "../axios-config";

export interface IChallengesStudent {
    challenge_id: number;
    current: boolean;
    score_Stars: number;
    score_Diamonds: number
}

const getChallengesByStudent = async (student_id: number): Promise<IChallengesStudent | Error> => {
    try {
      const filter = `/challenges/?student_id=${student_id}`;
      const { data } = await Api.get(filter);
  
      if (data) {
        return data;
      }

      return new Error("Erro ao buscar por desafios");
    } catch (error) {
      console.log(error);
      return new Error(
        (error as { message: string }).message || "Erro ao buscar pelos desafios"
      );
    }
  };

  export const ChallengesStudentService = {
    getChallengesByStudent
  };