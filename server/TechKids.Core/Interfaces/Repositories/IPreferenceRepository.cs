using TechKids.Core.Entities;

namespace TechKids.Core.Interfaces.Repositories
{
    public interface IPreferenceRepository
    {
        Task<short> RegisterStudentPreferenceAsync(Preference preference);
    }
}
