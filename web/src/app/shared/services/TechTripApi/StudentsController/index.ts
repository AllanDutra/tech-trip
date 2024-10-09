import { TechTripApi } from "../axios-config";

interface IAuthenticateRequest {
  user: string;
  password: string;
}

export interface IStudentClaims {
  id: number;
  name: string;
  email: string;
  user: string;
  birth: string;
  gender: string;
  character_Id: number;
  preference_Sound: boolean;
  preference_Vibration: boolean;
}

interface IAuthenticateResponse {
  token: string;
  claims: IStudentClaims;
}

interface IRegisterRequest {
  name: string;
  email: string;
  user: string;
  birth: string;
  gender: string;
  character_Id: number;
  password: string;
}

interface IUpdatePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

// * allow anonymous
const authenticate = async (
  request: IAuthenticateRequest
): Promise<IAuthenticateResponse | null> => {
  try {
    const { data } = await TechTripApi.post<IAuthenticateResponse>(
      "/students/authenticate",
      request
    );

    return data;
  } catch {
    return null;
  }
};

// * allow anonymous
const register = async (request: IRegisterRequest): Promise<number> => {
  try {
    const { data } = await TechTripApi.post<number>(
      "/students/register",
      request
    );

    return data;
  } catch {
    return 0;
  }
};

// * requires authentication
const getClaims = async (): Promise<IStudentClaims | null> => {
  try {
    const { data } = await TechTripApi.get<IStudentClaims>("/students/claims");

    return data;
  } catch {
    return null;
  }
};

// * requires authentication
const update = async (
  request: Omit<IStudentClaims, "id">
): Promise<boolean> => {
  try {
    await TechTripApi.put("/students/update", request);

    return true;
  } catch {
    return false;
  }
};

// * requires authentication
const updatePassword = async (
  request: IUpdatePasswordRequest
): Promise<boolean> => {
  try {
    await TechTripApi.put("/students/update-password", request);

    return true;
  } catch {
    return false;
  }
};

export const StudentsController = {
  authenticate,
  register,
  getClaims,
  update,
  updatePassword,
};
