import { createContext, ReactNode, useCallback, useContext } from "react";
import { useAuthentication } from "../useAuthentication";
import levelCompletedAudio from "../../assets/audios/level-completed.mp3";
import attemptFailedAudio from "../../assets/audios/attempt-failed.mp3";
import { Functions } from "../../functions";

type TSoundOption = "level-completed" | "attempt-failed";

interface IFeedbackContextData {
  activeVibration: () => void;
  activeSound: (soundOption: TSoundOption, callback?: () => void) => void;
}

type FeedbackProviderProps = {
  children: ReactNode;
};

function getAudioUrl(soundOption: TSoundOption) {
  if (soundOption === "level-completed") return levelCompletedAudio;

  if (soundOption === "attempt-failed") return attemptFailedAudio;

  return "";
}

const FeedbackContext = createContext({} as IFeedbackContextData);

function FeedbackProvider({ children }: FeedbackProviderProps) {
  const { userCredentials } = useAuthentication();

  const activeVibration = useCallback(() => {
    if (!userCredentials) return;

    if (!userCredentials.preference_Vibration) return;

    if (!navigator.vibrate) return;

    navigator.vibrate(1000); // ? one second
  }, [userCredentials]);

  const activeSound = useCallback(
    (soundOption: TSoundOption, callback?: () => void) => {
      if (!userCredentials) return;

      if (!userCredentials.preference_Sound) return callback?.();

      const audioUrl = getAudioUrl(soundOption);

      const audio = new Audio(audioUrl);

      audio.play().then(async () => {
        await Functions.delay(0.5);

        callback?.();
      });
    },
    [userCredentials]
  );

  return (
    <FeedbackContext.Provider value={{ activeVibration, activeSound }}>
      {children}
    </FeedbackContext.Provider>
  );
}

function useFeedback() {
  const context = useContext(FeedbackContext);

  return context;
}

export { FeedbackProvider, useFeedback };
