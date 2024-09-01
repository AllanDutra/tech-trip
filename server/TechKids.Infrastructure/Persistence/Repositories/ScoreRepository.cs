using Microsoft.EntityFrameworkCore;
using TechKids.Core.Interfaces.Repositories;
using TechKids.Core.Models.ViewModels;

namespace TechKids.Infrastructure.Persistence.Repositories
{
    public class ScoreRepository : IScoreRepository
    {
        private readonly TechKidsDbContext _dbContext;

        public ScoreRepository(TechKidsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<StudentTotalScoreViewModel> GetStudentTotalScoreAsync(int Student_Id)
        {
            StudentTotalScoreViewModel? studentTotalScore = await _dbContext.Scores
                .Where(score => score.StudentId == Student_Id)
                .GroupBy(score => score.StudentId)
                .Select(
                    group =>
                        new StudentTotalScoreViewModel(
                            group.Sum(score => score.Stars),
                            group.Sum(score => score.Diamonds)
                        )
                )
                .FirstOrDefaultAsync();

            return studentTotalScore ?? new StudentTotalScoreViewModel(0, 0);
        }
    }
}
