using TechKids.Core.Interfaces.Repositories;

namespace TechKids.Core.Interfaces
{
    public interface IUnitOfWork
    {
        IPreferenceRepository Preferences { get; }
        IStudentRepository Students { get; }
        ICharacterRepository Characters { get; }
        IChallengeRepository Challenges { get; }
        IScoreRepository Scores { get; }
        IAttemptRepository Attempts { get; }
        IAnswerKeyRepository AnswerKeys { get; }
        Task BeginTransactionAsync();
        Task CommitAsync();
    }
}
