import "./styles.css";
import { useLoading } from "../../hooks/useLoading";
import { StyledLoadingContainer } from "./styles";

export function Loading() {
  const { isGlobalLoadingActive } = useLoading();

  return (
    <StyledLoadingContainer
      className={isGlobalLoadingActive ? "" : "invisible"}
    >
      <div className="loadingio-spinner-ripple-nq4q5u6dq7r">
        <div className="ldio-x2uulkbinbj">
          <div></div>
          <div></div>
        </div>
      </div>
    </StyledLoadingContainer>
  );
}
