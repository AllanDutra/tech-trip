using TechTrip.Core.Entities;

namespace TechTrip.Core.Interfaces.Repositories
{
    public interface IAnswerKeyRepository
    {
        Task<AnswerKey?> GetChallengeAnswerKeyAsync(int Challenge_Id);
    }
}
