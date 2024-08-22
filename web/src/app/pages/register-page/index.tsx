import {
  Title,
  Character,
  ContainedInput,
  DoubleSelection,
  Button,
  SecondaryButton,
} from "../../shared/components";
import {
  UserCircle,
  Envelope,
  IdentificationBadge,
  CalendarDots,
  Lock,
} from "@phosphor-icons/react";
import styles from './style.module.css';
import { useState } from "react";

export function RegisterPage() {
  const [selectedGender, setSelectedGender] = useState<"male" | "female">("female");

  const handleGenderSelection = (gender: "male" | "female") => {
    setSelectedGender(gender);
  };

  function handleCharacterClick() {
    console.log("Character clicked!");
  }
  
  return (
    <div className={styles['register-container']}>
      <header className={styles['register-header']}>
        <Title value="TECH KIDs"></Title>
        <p>Descubra uma nova forma de aprender computação.</p>
      </header>

      <div className={styles['characters-container']}>
        <p>Selecione o seu personagem</p>
        <div className={styles['characters']}>
          <Character.FullComponent size="medium" number={1} onClick={handleCharacterClick} />
          <Character.FullComponent size="medium" number={2} onClick={handleCharacterClick} />
          <Character.FullComponent size="medium" number={3} onClick={handleCharacterClick} />
          <Character.FullComponent size="medium" number={4} onClick={handleCharacterClick} />
          <Character.FullComponent size="medium" number={5} onClick={handleCharacterClick} />
          <Character.FullComponent size="medium" number={6} onClick={handleCharacterClick} />
          <Character.FullComponent size="medium" number={7} onClick={handleCharacterClick} />
          <Character.FullComponent size="medium" number={8} onClick={handleCharacterClick} />
          <Character.FullComponent size="medium" number={9} onClick={handleCharacterClick} />
          <Character.FullComponent size="medium" number={10} onClick={handleCharacterClick} />
          <Character.FullComponent size="medium" number={11} onClick={handleCharacterClick} />
          <Character.FullComponent size="medium" number={12} onClick={handleCharacterClick} />
        </div>
      </div>

      <form className={styles["register-form"]}>
        <ContainedInput.FullComponent
          label="Nome"
          Icon={UserCircle}
          placeholder="Digite seu nome aqui..."
        />
        <ContainedInput.FullComponent
          label="E-mail"
          Icon={Envelope}
          placeholder="exemplo@email.com..."
        />
        <ContainedInput.FullComponent
          label="Usuário"
          Icon={IdentificationBadge}
          placeholder="Nome de usuário, sem espaços..."
        />
        <ContainedInput.FullComponent
          label="Senha"
          Icon={Lock}
          placeholder="Mínimo de 8 caracteres..."
        />
        <ContainedInput.FullComponent
          label="Data de nascimento"
          Icon={CalendarDots}
          placeholder="Informe sua data de nascimento..."
        />

        <div className={styles["gender-buttons"]}>
        <DoubleSelection.FullComponent
            variant="gender"
            selected={selectedGender}
            onClick={(e) => {
              const value = (e.target as HTMLButtonElement).textContent;
              handleGenderSelection(value === "Masculino" ? "male" : "female");
            }}
          />
        </div>

        <Button color="green" text="Registrar" />
      </form>

      <footer className={styles["register-footer"]}>
        <SecondaryButton title="Já tenho uma conta" />
      </footer>
    </div>
  );
}
