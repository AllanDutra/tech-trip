namespace TechTrip.Core.Models.ViewModels
{
    public class ProgressViewModel
    {
        public ProgressViewModel(
            int totalChallenges,
            int totalSolvedChallenges,
            int percentProgress
        )
        {
            TotalChallenges = totalChallenges;
            TotalSolvedChallenges = totalSolvedChallenges;
            PercentProgress = percentProgress;
        }

        public int TotalChallenges { get; }
        public int TotalSolvedChallenges { get; }
        public int PercentProgress { get; }
    }
}
