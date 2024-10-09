using TechTrip.Core.Interfaces.Factories;
using TechTrip.Core.Models.InputModels;
using TechTrip.Core.Models.ViewModels;

namespace TechTrip.Core.Factories.AnswerKeys
{
    public class CalculateStarsBasedOnAttempts : IProcessAttemptDomainService
    {
        public ProcessedAttemptProductViewModel? Process(ProcessAttemptInputModel inputModel)
        {
            bool correctAttempt = inputModel.StudentResponse == inputModel.AnswerKey_Response;

            short? totalStarsEarned = null;

            if (correctAttempt)
            {
                // ? Yes -> resolved in the first attempt
                if (inputModel.TotalStudentAttemptsForChallenge == 0)
                {
                    totalStarsEarned = 3;
                }
                // ? Yes -> resolved in the second attempt
                else if (inputModel.TotalStudentAttemptsForChallenge == 1)
                {
                    totalStarsEarned = 2;
                }
                // ? resolved in the third attempt or more
                else
                {
                    totalStarsEarned = 1;
                }
            }

            return new(correctAttempt, totalStarsEarned);
        }
    }
}
