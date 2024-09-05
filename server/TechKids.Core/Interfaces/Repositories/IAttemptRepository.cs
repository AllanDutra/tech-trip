using TechKids.Core.Entities;

namespace TechKids.Core.Interfaces.Repositories
{
    public interface IAttemptRepository
    {
        Task<short> RegisterAttemptAsync(Attempt attempt);
        Task<int> GetStudentAttemptsForChallengeAsync(int Student_Id, int Challenge_Id);
    }
}