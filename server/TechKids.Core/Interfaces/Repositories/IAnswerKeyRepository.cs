using TechKids.Core.Entities;

namespace TechKids.Core.Interfaces.Repositories
{
    public interface IAnswerKeyRepository
    {
        Task<AnswerKey?> GetChallengeAnswerKeyAsync(int Challenge_Id);
    }
}
