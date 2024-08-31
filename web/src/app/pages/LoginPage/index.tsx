import {
  LoginContainer,
  LoginForm,
  SubTitle,
  LoginHeader,
  LoginMain,
  LoginFooter,
} from "./styles";
import {
  Title,
  ContainedInput,
  Button,
  SecondaryButton,
} from "../../shared/components";
import { useState } from "react";
import { IdentificationBadge, Lock } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { routeConfigs } from "../../shared/configs";
import { StudentsService, IStudents } from "../../shared/services";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function LoginPage() {
  const navigate = useNavigate();

  const handleFirstAccess = () => {
    navigate(routeConfigs.Register);
  };

  const [student, setStudent] = useState<IStudents>({
    id: 0,
    name: "",
    email: "",
    user: "",
    password: "",
    birth: "",
    gender: "",
    character_id: 0,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(student);
    if (!student.user || !student.password) {
      toast.warning("Preencha todos os campos!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
      return;
    }
    try {
      const authenticatedStudent = await StudentsService.authenticate(
        student.user,
        student.password
      );

      if (authenticatedStudent instanceof Error) {
        toast.error(authenticatedStudent.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      } else {
        toast.success("Login realizado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        navigate(routeConfigs.Map);
      }
    } catch (error) {
      console.error("Erro durante autenticação", error);
      toast.error("Erro durante autenticação", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <LoginContainer>
      <ToastContainer />
      <LoginForm onSubmit={handleSubmit}>
        <LoginHeader>
          <Title value="Tech KIDs"></Title>
          <SubTitle>Descubra uma nova forma de aprender computação.</SubTitle>
        </LoginHeader>
        <LoginMain>
          <ContainedInput.FullComponent
            label="Usuário"
            Icon={IdentificationBadge}
            placeholder="Nome de usuário ou e-mail..."
            value={student.user}
            name="user"
            onChange={handleInputChange}
          />
          <ContainedInput.FullComponent
            label="Senha"
            Icon={Lock}
            placeholder="Digite sua senha aqui..."
            value={student.password}
            onChange={handleInputChange}
            name="password"
            type="password"
          />
        </LoginMain>

        <LoginFooter>
          <Button color="green" text="Entrar" type="submit" />
          <SecondaryButton
            title="Primeiro acesso"
            type="button"
            onClick={handleFirstAccess}
          />
        </LoginFooter>
      </LoginForm>
    </LoginContainer>
  );
}
