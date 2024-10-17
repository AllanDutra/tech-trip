import { StyledFooterCredits } from "./styles";

export function FooterCredits() {
  return (
    <StyledFooterCredits>
      <strong>© Créditos</strong>

      <div>
        <span>
          Imagens por <a href="https://br.freepik.com/">Freepik</a>
        </span>

        <span>
          Efeitos sonoros por{" "}
          <a href="https://pixabay.com/users/universfield-28281460/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=143039">
            UNIVERSFIELD
          </a>{" "}
          e{" "}
          <a href="https://pixabay.com/users/soundreality-31074404/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=158187">
            Jurij
          </a>
          , via{" "}
          <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=143039">
            Pixabay
          </a>
        </span>
      </div>
    </StyledFooterCredits>
  );
}
