using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TechKids.Core.Entities;

namespace TechKids.Infrastructure.Persistence.Configurations
{
    public class CharacterConfigurations : IEntityTypeConfiguration<Character>
    {
        public void Configure(EntityTypeBuilder<Character> entity)
        {
            entity.HasKey(e => e.Id).HasName("Characters_pkey");

            entity.Property(e => e.Description).HasMaxLength(60);
        }
    }
}
