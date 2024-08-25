using TechKids.Core.Interfaces.Repositories;

namespace TechKids.Core.Interfaces
{
    public interface IUnitOfWork
    {
        IPreferenceRepository Preferences { get; }
        IStudentRepository Students { get; }
        ICharacterRepository Characters { get; }
        Task BeginTransactionAsync();
        Task CommitAsync();
    }
}
