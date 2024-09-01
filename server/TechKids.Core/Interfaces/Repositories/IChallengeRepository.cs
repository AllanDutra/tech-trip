using TechKids.Core.Models.ViewModels;

namespace TechKids.Core.Interfaces.Repositories
{
    public interface IChallengeRepository
    {
        Task<List<ChallengesMapViewModel>> GetChallengesMapAsync(int Student_Id);
    }
}
