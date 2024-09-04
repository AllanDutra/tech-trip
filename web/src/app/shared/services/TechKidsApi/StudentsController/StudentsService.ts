import { Api } from "../axios-config";

export interface IStudents {
  id: number;
  name: string;
  email: string;
  user: string;
  password: string;
  birth: string;
  gender: string;
  character_id: number;
  sound: boolean;
  vibration: boolean;
}

const authenticate = async (
  user: string,
  password: string
): Promise<IStudents | Error> => {
  try {
    const filter = `?user=${user}&password=${password}`;
    const { data } = await Api.get(filter);

    if (data && data.token) {
      sessionStorage.setItem("authToken", data.token);
      return data;
    }
    return new Error("Erro ao autenticar. Login ou senha inválidas");
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao autenticar. Login ou senha inválidas"
    );
  }
};

const register = async (
  info: Omit<IStudents, "id">
): Promise<number | Error> => {
  try {
    const { data } = await Api.post<IStudents>("student/", info);

    if (data) {
      return data.id;
    }

    return new Error("Erro ao criar registro");
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || "Erro ao criar registro"
    );
  }
};

const updateStudent = async (
  token: string,
  info: IStudents
): Promise<void | Error> => {
  try {
    await Api.put(`student/${token}`, info);
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || "Erro ao atualizar registro"
    );
  }
};

const getSettings = async (token: string): Promise<IStudents | Error> => {
  try {
    const filter = `students/claims?token=${token}`;
    const { data } = await Api.get(filter);

    if (data) {
      return data.claims;
    }

    return new Error("Erro ao buscar por informações do estudante");
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message ||
        "Erro ao buscar por informações do estudante"
    );
  }
};

export const StudentsService = {
  authenticate,
  register,
  updateStudent,
  getSettings,
};
