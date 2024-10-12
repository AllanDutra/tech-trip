using TechTrip.Core.Entities;

namespace TechTrip.Core.Interfaces.Repositories
{
    public interface IAttemptRepository
    {
        Task<short> RegisterAttemptAsync(Attempt attempt);
        Task<int> GetStudentAttemptsForChallengeAsync(int Student_Id, int Challenge_Id);
        Task<Attempt?> GetStudentLastCorrectAttemptForCompoundChallengeAsync(
            int Student_Id,
            int Challenge_Id
        );
    }
}
