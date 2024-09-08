namespace TechKids.Core.Models.ViewModels
{
    public class ProcessedAttemptProductViewModel
    {
        public ProcessedAttemptProductViewModel(
            bool correctAttempt,
            short? totalStars,
            bool generateScore = true
        )
        {
            CorrectAttempt = correctAttempt;
            TotalStars = totalStars;
            GenerateScore = generateScore;
        }

        public bool CorrectAttempt { get; }
        public short? TotalStars { get; }
        public bool GenerateScore { get; }
    }
}
