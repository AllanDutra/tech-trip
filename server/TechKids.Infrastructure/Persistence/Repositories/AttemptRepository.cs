using Microsoft.EntityFrameworkCore;
using TechKids.Core.Entities;
using TechKids.Core.Interfaces.Repositories;

namespace TechKids.Infrastructure.Persistence.Repositories
{
    public class AttemptRepository : IAttemptRepository
    {
        private readonly TechKidsDbContext _dbContext;

        public AttemptRepository(TechKidsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<int> GetStudentAttemptsForChallengeAsync(int Student_Id, int Challenge_Id)
        {
            return await _dbContext.Attempts.CountAsync(attempt =>
                attempt.StudentId == Student_Id && attempt.ChallengeId == Challenge_Id
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
