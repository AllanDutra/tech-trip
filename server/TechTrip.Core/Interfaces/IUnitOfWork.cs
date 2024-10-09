using TechTrip.Core.Interfaces.Repositories;

namespace TechTrip.Core.Interfaces
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
