using Microsoft.EntityFrameworkCore.Storage;
using TechKids.Core.Interfaces;
using TechKids.Core.Interfaces.Repositories;

namespace TechKids.Infrastructure.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private IDbContextTransaction? _transaction;
        private readonly TechKidsDbContext _dbContext;

        public UnitOfWork(
            TechKidsDbContext dbContext,
            IPreferenceRepository preferences,
            IStudentRepository students,
            ICharacterRepository characters,
            IChallengeRepository challenges
        )
        {
            _dbContext = dbContext;
            Preferences = preferences;
            Students = students;
            Characters = characters;
            Challenges = challenges;
        }

        public IPreferenceRepository Preferences { get; }

        public IStudentRepository Students { get; }

        public ICharacterRepository Characters { get; }

        public IChallengeRepository Challenges { get; }

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
