using Microsoft.EntityFrameworkCore;
using TechKids.Core.Entities;
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

        public async Task<List<StudentRankingViewModel>> GetStudentsRankingAsync()
        {
            List<StudentRankingViewModel> studentsRanking = await (
                from student in _dbContext.Students
                join score in _dbContext.Scores
                    on student.Id equals score.StudentId
                    into studentScores
                let totalStars = studentScores.Sum(s => s.Stars)
                let totalDiamonds = studentScores.Sum(s => s.Diamonds)
                select new StudentRankingViewModel(
                    student.Id,
                    student.Name,
                    student.CharacterId,
                    totalStars,
                    totalDiamonds,
                    totalStars + totalDiamonds
                )
            ).ToListAsync();

            return studentsRanking
                .OrderByDescending(s => s.TotalScore)
                .ThenByDescending(s => s.TotalDiamonds)
                .ThenByDescending(s => s.TotalStars)
                .ThenBy(s => s.Name)
                .Select(
                    (s, index) =>
                        new StudentRankingViewModel(
                            s.Id,
                            s.Name,
                            s.Character_Id,
                            s.TotalStars,
                            s.TotalDiamonds,
                            s.TotalScore,
                            index + 1
                        )
                )
                .ToList();
        }

        public async Task<Score?> GetLastStudentScoreAsync(int Student_Id)
        {
            return await _dbContext.Scores
                .OrderBy(score => score.ChallengeId)
                .LastOrDefaultAsync(score => score.StudentId == Student_Id);
        }

        public async Task<bool> StudentAlreadyScoredInTheChallengeAsync(
            int Student_Id,
            int Challenge_Id
        )
        {
            return await _dbContext.Scores.AnyAsync(
                score => score.StudentId == Student_Id && score.ChallengeId == Challenge_Id
            );
        }

        public async Task<short> RegisterScoreAsync(Score score)
        {
            await _dbContext.Scores.AddAsync(score);

            await _dbContext.SaveChangesAsync();

            return score.Id;
        }
    }
}
