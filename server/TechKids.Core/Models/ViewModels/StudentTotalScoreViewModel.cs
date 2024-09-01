namespace TechKids.Core.Models.ViewModels
{
    public class StudentTotalScoreViewModel
    {
        public StudentTotalScoreViewModel(int stars, int diamonds)
        {
            Stars = stars;
            Diamonds = diamonds;
        }

        public int Stars { get; }
        public int Diamonds { get; }
    }
}
