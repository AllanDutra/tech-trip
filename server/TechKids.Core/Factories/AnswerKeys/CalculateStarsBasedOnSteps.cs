using System.Net;
using TechKids.Core.Interfaces.Factories;
using TechKids.Core.Interfaces.Notifications;
using TechKids.Core.Models.InputModels;
using TechKids.Core.Models.ViewModels;

namespace TechKids.Core.Factories.AnswerKeys
{
    public class CalculateStarsBasedOnSteps : IProcessAttemptDomainService
    {
        private readonly INotifier _notifier;

        public CalculateStarsBasedOnSteps(INotifier notifier)
        {
            _notifier = notifier;
        }

        public ProcessedAttemptProductViewModel? Process(ProcessAttemptInputModel inputModel)
        {
            bool successToConvert = short.TryParse(
                inputModel.AnswerKey_Response,
                out short betterStepsNumberAsInt
            );

            if (!successToConvert)
            {
                _notifier.Handle(
                    "Tivemos um problema interno no servidor ao tentar converter o gabarito do desafio.",
                    HttpStatusCode.InternalServerError
                );

                return null!;
            }

            short marginOfError = 3;

            short totalStarsEarned;

            if (inputModel.Steps < betterStepsNumberAsInt)
            {
                _notifier.Handle(
                    $"Número de passos inválido. O menor número de passos possível é {betterStepsNumberAsInt}.",
                    HttpStatusCode.BadRequest
                );

                return null!;
            }

            if (inputModel.Steps <= (betterStepsNumberAsInt + marginOfError))
            {
                totalStarsEarned = 3;
            }
            else if (inputModel.Steps <= (betterStepsNumberAsInt + (marginOfError * 2)))
            {
                totalStarsEarned = 2;
            }
            else
            {
                totalStarsEarned = 1;
            }

            return new(true, totalStarsEarned);
        }
    }
}
