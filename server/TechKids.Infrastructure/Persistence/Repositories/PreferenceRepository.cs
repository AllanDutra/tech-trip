using TechKids.Core.Entities;
using TechKids.Core.Interfaces.Repositories;

namespace TechKids.Infrastructure.Persistence.Repositories
{
    public class PreferenceRepository : IPreferenceRepository
    {
        private readonly TechKidsDbContext _dbContext;

        public PreferenceRepository(TechKidsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<short> RegisterStudentPreferenceAsync(Preference preference)
        {
            await _dbContext.Preferences.AddAsync(preference);

            await _dbContext.SaveChangesAsync();

            return preference.Id;
        }
    }
}
