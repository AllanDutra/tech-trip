using Microsoft.EntityFrameworkCore.Storage;
using TechTrip.Core.Interfaces;
using TechTrip.Core.Interfaces.Repositories;

namespace TechTrip.Infrastructure.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private IDbContextTransaction? _transaction;
        private readonly TechTripDbContext _dbContext;

        public UnitOfWork(
            TechTripDbContext dbContext,
            IPreferenceRepository preferences,
            IStudentRepository students,
            ICharacterRepository characters,
            IChallengeRepository challenges,
            IScoreRepository scores,
            IAttemptRepository attempts,
            IAnswerKeyRepository answerKeys
        )
        {
            _dbContext = dbContext;
            Preferences = preferences;
            Students = students;
            Characters = characters;
            Challenges = challenges;
            Scores = scores;
            Attempts = attempts;
            AnswerKeys = answerKeys;
        }

        public IPreferenceRepository Preferences { get; }

        public IStudentRepository Students { get; }

        public ICharacterRepository Characters { get; }

        public IChallengeRepository Challenges { get; }

        public IScoreRepository Scores { get; }

        public IAttemptRepository Attempts { get; }

        public IAnswerKeyRepository AnswerKeys { get; }

        public async Task BeginTransactionAsync()
        {
            _transaction = await _dbContext.Database.BeginTransactionAsync();
        }

        public async Task CommitAsync()
        {
            if (_transaction == null)
                throw new Exception("Nenhuma transação iniciada");

            try
            {
                await _transaction.CommitAsync();
            }
            catch (Exception)
            {
                await _transaction.RollbackAsync();

                throw;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
                _dbContext.Dispose();
        }
    }
}
