using Microsoft.EntityFrameworkCore;
using TechTrip.Core.Entities;
using TechTrip.Core.Interfaces.Repositories;

namespace TechTrip.Infrastructure.Persistence.Repositories
{
    public class AttemptRepository : IAttemptRepository
    {
        private readonly TechTripDbContext _dbContext;

        public AttemptRepository(TechTripDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<int> GetStudentAttemptsForChallengeAsync(int Student_Id, int Challenge_Id)
        {
            return await _dbContext.Attempts.CountAsync(
                attempt => attempt.StudentId == Student_Id && attempt.ChallengeId == Challenge_Id
            );
        }

        public async Task<Attempt?> GetStudentLastCorrectAttemptForCompoundChallengeAsync(
            int Student_Id,
            int Challenge_Id
        )
        {
            return await _dbContext.Attempts
                .OrderBy(attempt => attempt.Id)
                .LastOrDefaultAsync(
                    attempt =>
                        attempt.StudentId == Student_Id
                        && attempt.ChallengeId == Challenge_Id
                        && attempt.Correct
                );
        }

        public async Task<short> RegisterAttemptAsync(Attempt attempt)
        {
            await _dbContext.Attempts.AddAsync(attempt);

            await _dbContext.SaveChangesAsync();

            return attempt.Id;
        }
    }
}
