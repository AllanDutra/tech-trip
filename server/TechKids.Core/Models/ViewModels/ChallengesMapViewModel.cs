namespace TechKids.Core.Models.ViewModels
{
    public class ChallengesMapViewModel
    {
        public ChallengesMapViewModel(
            int challenge_Id,
            bool current,
            short? score_Stars,
            short? score_Diamonds
        )
        {
            Challenge_Id = challenge_Id;
            Current = current;
            Score_Stars = score_Stars;
            Score_Diamonds = score_Diamonds;
        }

        public int Challenge_Id { get; }
        public bool Current { get; set; }
        public short? Score_Stars { get; }
        public short? Score_Diamonds { get; }
        public int? Number { get; set; }
    }
}
