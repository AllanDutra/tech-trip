namespace TechTrip.Core.Models.ViewModels
{
    public class ProcessedAttemptForChallengeProductViewModel
    {
        public ProcessedAttemptForChallengeProductViewModel(
            bool correctAttempt,
            short? totalStars,
            short? totalDiamonds
        )
        {
            CorrectAttempt = correctAttempt;
            TotalStars = totalStars;
            TotalDiamonds = totalDiamonds;
        }

        public bool CorrectAttempt { get; }
        public short? TotalStars { get; }
        public short? TotalDiamonds { get; }
    }
}
