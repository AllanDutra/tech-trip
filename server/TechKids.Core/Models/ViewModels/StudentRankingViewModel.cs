namespace TechKids.Core.Models.ViewModels
{
    public class StudentRankingViewModel
    {
        public StudentRankingViewModel(
            int id,
            string name,
            short? character_Id,
            int totalStars,
            int totalDiamonds,
            int totalScore
        )
        {
            Id = id;
            Name = name;
            Character_Id = character_Id;
            TotalStars = totalStars;
            TotalDiamonds = totalDiamonds;
            TotalScore = totalScore;
        }

        public StudentRankingViewModel(
            int id,
            string name,
            short? character_Id,
            int totalStars,
            int totalDiamonds,
            int totalScore,
            int? rank
        )
        {
            Id = id;
            Name = name;
            Character_Id = character_Id;
            TotalStars = totalStars;
            TotalDiamonds = totalDiamonds;
            TotalScore = totalScore;
            Rank = rank;
        }

        public int Id { get; }
        public string Name { get; }
        public short? Character_Id { get; }
        public int TotalStars { get; }
        public int TotalDiamonds { get; }
        public int TotalScore { get; }
        public int? Rank { get; set; }
    }
}
