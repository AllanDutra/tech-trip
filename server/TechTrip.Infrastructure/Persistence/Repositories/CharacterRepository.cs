using Microsoft.EntityFrameworkCore;
using TechTrip.Core.Interfaces.Repositories;

namespace TechTrip.Infrastructure.Persistence.Repositories
{
    public class CharacterRepository : ICharacterRepository
    {
        private readonly TechTripDbContext _dbContext;

        public CharacterRepository(TechTripDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<bool> CharacterExistsAsync(short id)
        {
            return await _dbContext.Characters.AnyAsync(character => character.Id == id);
        }
    }
}
