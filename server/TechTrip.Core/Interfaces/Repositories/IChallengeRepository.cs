using TechTrip.Core.Models.ViewModels;

namespace TechTrip.Core.Interfaces.Repositories
{
    public interface IChallengeRepository
    {
        Task<List<ChallengesMapViewModel>> GetChallengesMapAsync(int Student_Id);
        Task<int> GetTotalChallengesAsync();
        Task<int> GetTotalSolvedChallengesAsync(int Student_Id);
        Task<bool> ChallengeExistsAsync(int Challenge_Id);
    }
}
