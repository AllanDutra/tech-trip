using Microsoft.EntityFrameworkCore;
using TechTrip.Core.Entities;
using TechTrip.Core.Interfaces.Repositories;

namespace TechTrip.Infrastructure.Persistence.Repositories
{
    public class AnswerKeyRepository : IAnswerKeyRepository
    {
        private readonly TechTripDbContext _dbContext;

        public AnswerKeyRepository(TechTripDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<AnswerKey?> GetChallengeAnswerKeyAsync(int Challenge_Id)
        {
            return await _dbContext.AnswerKeys.FirstOrDefaultAsync(answerKey =>
                answerKey.ChallengeId == Challenge_Id
            );
        }
    }
}
