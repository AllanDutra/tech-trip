namespace TechKids.Core.Models.ViewModels
{
    public class ProcessedAttemptProductViewModel
    {
        public ProcessedAttemptProductViewModel(bool correctAttempt, short? totalStars)
        {
            CorrectAttempt = correctAttempt;
            TotalStars = totalStars;
        }

        public bool CorrectAttempt { get; }
        public short? TotalStars { get; }
    }
}
