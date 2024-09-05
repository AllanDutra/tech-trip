using Microsoft.EntityFrameworkCore;
using TechKids.Core.Interfaces.Repositories;
using TechKids.Core.Models.ViewModels;

namespace TechKids.Infrastructure.Persistence.Repositories
{
    public class ChallengeRepository : IChallengeRepository
    {
        private readonly TechKidsDbContext _dbContext;

        public ChallengeRepository(TechKidsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<List<ChallengesMapViewModel>> GetChallengesMapAsync(int Student_Id)
        {
            var QUERY =
                from challenge in _dbContext.Challenges
                join score in _dbContext.Scores
                    on challenge.Id equals score.ChallengeId
                    into challengeScores
                from studentScore in challengeScores
                    .Where(s => s.StudentId == Student_Id)
                    .DefaultIfEmpty()
                select new ChallengesMapViewModel(
                    challenge.Id,
                    false,
                    studentScore != null ? studentScore.Stars : null,
                    studentScore != null ? studentScore.Diamonds : null
                );

            List<ChallengesMapViewModel> results = (await QUERY.ToListAsync())
                .OrderBy(cm => cm.Challenge_Id)
                .ToList();

            for (int i = 0; i < results.Count; i++)
                results[i].Number = i + 1;

            ChallengesMapViewModel? currentChallenge = results.FirstOrDefault(
                challenge => challenge.Score_Stars == null && challenge.Score_Diamonds == null
            );

            if (currentChallenge != null)
                currentChallenge.Current = true;

            return results;
        }

        public async Task<int> GetTotalChallengesAsync()
        {
            return await _dbContext.Challenges.CountAsync();
        }

        public async Task<int> GetTotalSolvedChallengesAsync(int Student_Id)
        {
            return await _dbContext.Scores
                .Where(score => score.StudentId == Student_Id)
                .Select(score => score.ChallengeId)
                .Distinct()
                .CountAsync();
        }

        public async Task<bool> ChallengeExistsAsync(int Challenge_Id)
        {
            return await _dbContext.Challenges.AnyAsync(challenge => challenge.Id == Challenge_Id);
        }
    }
}
