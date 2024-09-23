import { ChallengeMessage } from "../../shared/components";
import { ChallengePageContainer } from "../../shared/components/ChallengePageContainer";
import { ImageArea, Message, StyledMain } from "./styles";

export const Challenge15Page = () => {
    return <ChallengePageContainer currentLevel={15} children={<>
        <StyledMain>
            <Message>
                <ChallengeMessage children={<>
                    Bruna vai fazer uma festa e precisa enviar convites para todos os amigos. 
                    {" "}<strong>Qual tecnologia seria melhor para enviar convites rapidamente?</strong>
                    </>}/>
            </Message>
            <ImageArea>
                
            </ImageArea>
        </StyledMain>
    </>}/>
};