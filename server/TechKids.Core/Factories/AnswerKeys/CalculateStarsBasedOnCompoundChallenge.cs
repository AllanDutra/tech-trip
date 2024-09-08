using System.Net;
using TechKids.Core.Interfaces.Factories;
using TechKids.Core.Interfaces.Notifications;
using TechKids.Core.Models.InputModels;
using TechKids.Core.Models.ViewModels;

namespace TechKids.Core.Factories.AnswerKeys
{
    public class CalculateStarsBasedOnCompoundChallenge : IProcessAttemptDomainService
    {
        private readonly INotifier _notifier;

        public CalculateStarsBasedOnCompoundChallenge(INotifier notifier)
        {
            _notifier = notifier;
        }

        public ProcessedAttemptProductViewModel? Process(ProcessAttemptInputModel inputModel)
        {
            if (!inputModel.MaxCompoundChallengeStages.HasValue)
            {
                _notifier.Handle(
                    $"Máximo número de estágios não definido para o desafio composto.",
                    HttpStatusCode.InternalServerError
                );

                return null;
            }

            short maxStage = (short)inputModel.MaxCompoundChallengeStages;

            short challengeStage = inputModel.Steps;

            if (challengeStage < 1)
            {
                _notifier.Handle(
                    "Estágio inválido para o desafio composto. O estágio se inicia do 1.",
                    HttpStatusCode.BadRequest
                );

                return null;
            }

            if (challengeStage > maxStage)
            {
                _notifier.Handle(
                    $"Estágio inválido para o desafio composto. O estágio máximo para o desafio em questão é {maxStage}.",
                    HttpStatusCode.BadRequest
                );

                return null;
            }

            int currentStage;

            if (inputModel.LastCompoundChallengeAttempt is null)
            {
                currentStage = 1;
            }
            else
            {
                currentStage = inputModel.LastCompoundChallengeAttempt.Steps + 1;
            }

            if (challengeStage < currentStage)
            {
                _notifier.Handle(
                    $"Você já resolver o estágio {challengeStage} anteriormente.",
                    HttpStatusCode.Conflict
                );

                return null;
            }

            if (challengeStage != currentStage)
            {
                _notifier.Handle(
                    $"Para resolver o estágio {challengeStage}, primeiro você precisa resolver o estágio {currentStage}.",
                    HttpStatusCode.BadRequest
                );

                return null;
            }

            string answerKey = GetAnswerKeyForCurrentStage(
                inputModel.AnswerKey_Response,
                currentStage
            );

            bool correctAttempt = inputModel.StudentResponse == answerKey;

            if (currentStage < maxStage)
                return new(correctAttempt, null, false);

            short? totalStarsEarned = null;

            if (correctAttempt)
            {
                short marginOfError = inputModel.MarginOfError ?? 1;

                int totalAttempts = inputModel.TotalStudentAttemptsForChallenge + 1;

                if (totalAttempts <= (maxStage + marginOfError))
                {
                    totalStarsEarned = 3;
                }
                else if (totalAttempts <= (maxStage + (marginOfError * 2)))
                {
                    totalStarsEarned = 2;
                }
                else
                {
                    totalStarsEarned = 1;
                }
            }

            return new(correctAttempt, totalStarsEarned, true);
        }

        private static string GetAnswerKeyForCurrentStage(
            string AnswerKey_Response,
            int currentStage
        )
        {
            string[] stagesAnswerKeys = AnswerKey_Response.Split('-');

            int stageAnswerKeyIndex = currentStage - 1;

            return stagesAnswerKeys[stageAnswerKeyIndex];
        }
    }
}
