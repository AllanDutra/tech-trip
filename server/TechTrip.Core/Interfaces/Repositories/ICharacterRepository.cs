namespace TechTrip.Core.Interfaces.Repositories
{
    public interface ICharacterRepository
    {
        Task<bool> CharacterExistsAsync(short id);
    }
}