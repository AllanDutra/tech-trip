using TechTrip.Core.Entities;

namespace TechTrip.Core.Interfaces.Repositories
{
    public interface IPreferenceRepository
    {
        Task<Preference?> GetPreferenceByStudentIdAsync(int Student_Id);
        Task<short> RegisterStudentPreferenceAsync(Preference preference);
        Task UpdateStudentPreferenceAsync(Preference preference);
    }
}
