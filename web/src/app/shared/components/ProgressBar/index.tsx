import { ProgressBarContainer, Progress } from "./styles";
interface IProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<IProgressBarProps> = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <Progress progress={progress}>{progress}%</Progress>
    </ProgressBarContainer>
  );
};
