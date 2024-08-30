import { Environment } from "../../../../environment";
import { Api } from "..";

interface IStudents {
  id: number;
  name: string;
  email: string;
  user: string;
  password: string;
  birth: string;
  gender: string;
  character_id: number;
}

interface IStudentsTotal {
  data: IStudents;
  total: number;
}

const getAll = async (
  page = 1,
  filter = ""
): Promise<IStudentsTotal | Error> => {
  try {
    /**See more: https://www.npmjs.com/package/json-server */
    const relativeURL = `/students?_page=${page}&_limit=${Environment.LINES_LIMIT}&name_like=${filter}`;

    const { data, headers } = await Api.get(relativeURL);

    if (data) {
      return {
        data,
        total: Number(headers["x-total-count"]) || Environment.LINES_LIMIT,
      };
    }

    return new Error("Error on listing.");
  } catch (error) {
    console.error(error);
    return new Error(
      (error as { message: string }).message || "Error on listing."
    );
  }
};

const getById = async (id: number): Promise<IStudents | Error> => {
  try {
    const { data } = await Api.get(`student/${id}`);
    if (data) {
      return data;
    }
    return new Error("Error on searching student");
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || "Error on searching student"
    );
  }
};

const create = async (info: Omit<IStudents, "id">): Promise<number | Error> => {
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

const updateById = async (
  id: number,
  info: IStudents
): Promise<void | Error> => {
  try {
    await Api.put(`student/${id}`, info);
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || "Erro ao atualizar registro"
    );
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await Api.delete(`/pessoas/${id}`);
  } catch (error) {
    console.log(error);
    return new Error(
      (error as { message: string }).message || "Erro ao apagar registro"
    );
  }
};

export const StudentsService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};
