using TechTrip.Core.Entities;
using TechTrip.Core.Models.ViewModels;

namespace TechTrip.Core.Interfaces.Repositories
{
    public interface IScoreRepository
    {
        Task<StudentTotalScoreViewModel> GetStudentTotalScoreAsync(int Student_Id);
        Task<List<StudentRankingViewModel>> GetStudentsRankingAsync();
        Task<Score?> GetLastStudentScoreAsync(int Student_Id);
        Task<bool> StudentAlreadyScoredInTheChallengeAsync(int Student_Id, int Challenge_Id);
        Task<short> RegisterScoreAsync(Score score);
    }
}
