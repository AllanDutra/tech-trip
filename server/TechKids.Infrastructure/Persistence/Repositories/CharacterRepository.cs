using Microsoft.EntityFrameworkCore;
using TechKids.Core.Interfaces.Repositories;

namespace TechKids.Infrastructure.Persistence.Repositories
{
    public class CharacterRepository : ICharacterRepository
    {
        private readonly TechKidsDbContext _dbContext;

        public CharacterRepository(TechKidsDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<bool> CharacterExistsAsync(short id)
        {
            return await _dbContext.Characters.AnyAsync(character => character.Id == id);
        }
    }
}
