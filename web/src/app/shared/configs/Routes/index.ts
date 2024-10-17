const Map = "/mapa-desafios";
const Resume = "/resumo";
const Ranking = "/ranking";
const Register = "/cadastrar";
const Login = "/entrar";
const Settings = "/editar-perfil";
const ChangePassword = "/trocar-senha";

const Challenge1 = "/desafio-um";
const Challenge2 = "/desafio-dois";
const Challenge3 = "/desafio-tres";
const Challenge4 = "/desafio-quatro";
const Challenge5 = "/desafio-cinco";
const Challenge6 = "/desafio-seis";
const Challenge7 = "/desafio-sete";
const Challenge8 = "/desafio-oito";
const Challenge9 = "/desafio-nove";
const Challenge10 = "/desafio-dez";
const Challenge11 = "/desafio-onze";
const Challenge12 = "/desafio-doze";
const Challenge13 = "/desafio-treze";
const Challenge14 = "/desafio-quatorze";
const Challenge15 = "/desafio-quinze";

const routes = {
  Map,
  Resume,
  Ranking,
  Register,
  Login,
  Settings,
  ChangePassword,
  Challenge1,
  Challenge2,
  Challenge3,
  Challenge4,
  Challenge5,
  Challenge6,
  Challenge7,
  Challenge8,
  Challenge9,
  Challenge10,
  Challenge11,
  Challenge12,
  Challenge13,
  Challenge14,
  Challenge15,
};

type TRoutes = typeof routes;

interface IRouteConfigs extends TRoutes {
  [key: string]: string;
}

export const routeConfigs: IRouteConfigs = { ...routes };
