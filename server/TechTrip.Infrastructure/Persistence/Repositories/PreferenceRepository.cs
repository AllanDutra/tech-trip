using Microsoft.EntityFrameworkCore;
using TechTrip.Core.Entities;
using TechTrip.Core.Interfaces.Repositories;

namespace TechTrip.Infrastructure.Persistence.Repositories
{
    public class PreferenceRepository : IPreferenceRepository
    {
        private readonly TechTripDbContext _dbContext;

        public PreferenceRepository(TechTripDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Preference?> GetPreferenceByStudentIdAsync(int Student_Id)
        {
            return await _dbContext.Preferences.FirstOrDefaultAsync(
                preference => preference.StudentId == Student_Id
            );
        }

        public async Task<short> RegisterStudentPreferenceAsync(Preference preference)
        {
            await _dbContext.Preferences.AddAsync(preference);

            await _dbContext.SaveChangesAsync();

            return preference.Id;
        }

        public async Task UpdateStudentPreferenceAsync(Preference preference)
        {
            _dbContext.Preferences.Update(preference);

            await _dbContext.SaveChangesAsync();
        }
    }
}
