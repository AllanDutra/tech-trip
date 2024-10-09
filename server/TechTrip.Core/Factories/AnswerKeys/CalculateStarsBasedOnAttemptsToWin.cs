using System.Net;
using TechTrip.Core.Interfaces.Factories;
using TechTrip.Core.Interfaces.Notifications;
using TechTrip.Core.Models.InputModels;
using TechTrip.Core.Models.ViewModels;

namespace TechTrip.Core.Factories.AnswerKeys
{
    public class CalculateStarsBasedOnAttemptsToWin : IProcessAttemptDomainService
    {
        private readonly List<string> _acceptedResponses = new() { "WON", "LOST" };
        private readonly INotifier _notifier;

        public CalculateStarsBasedOnAttemptsToWin(INotifier notifier)
        {
            _notifier = notifier;
        }

        public ProcessedAttemptProductViewModel? Process(ProcessAttemptInputModel inputModel)
        {
            #region Checking input
            string responseAsUppercase = inputModel.StudentResponse.ToUpper();

            if (!_acceptedResponses.Contains(responseAsUppercase))
            {
                _notifier.Handle(
                    "Entrada inválida para 'StudentResponse'. As respostas aceitas são: 'WON' para vitória e 'LOST' para derrota.",
                    HttpStatusCode.BadRequest
                );

                return null;
            }
            #endregion

            if (responseAsUppercase == "LOST")
                return new(false, null);

            #region Converting better attempts number
            bool successToConvert = short.TryParse(
                inputModel.AnswerKey_Response,
                out short betterAttemptsNumber
            );

            if (!successToConvert)
            {
                _notifier.Handle(
                    "Tivemos um problema interno no servidor ao tentar converter o gabarito do desafio.",
                    HttpStatusCode.InternalServerError
                );

                return null!;
            }
            #endregion

            #region Calculating total stars earned
            short marginOfError = inputModel.MarginOfError ?? 1;

            int attemptNumber = inputModel.TotalStudentAttemptsForChallenge + 1;

            short totalStarsEarned;

            if (attemptNumber <= (betterAttemptsNumber + marginOfError))
            {
                totalStarsEarned = 3;
            }
            else if (attemptNumber <= (betterAttemptsNumber + (marginOfError * 2)))
            {
                totalStarsEarned = 2;
            }
            else
            {
                totalStarsEarned = 1;
            }

            return new(true, totalStarsEarned);
            #endregion
        }
    }
}
