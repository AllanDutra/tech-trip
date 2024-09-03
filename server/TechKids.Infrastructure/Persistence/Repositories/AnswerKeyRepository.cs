using Microsoft.EntityFrameworkCore;
using TechKids.Core.Entities;
using TechKids.Core.Interfaces.Repositories;

namespace TechKids.Infrastructure.Persistence.Repositories
{
    public class AnswerKeyRepository : IAnswerKeyRepository
    {
        private readonly TechKidsDbContext _dbContext;

        public AnswerKeyRepository(TechKidsDbContext dbContext)
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
