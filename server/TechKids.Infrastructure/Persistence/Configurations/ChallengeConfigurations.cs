using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TechKids.Core.Entities;

namespace TechKids.Infrastructure.Persistence.Configurations
{
    public class ChallengeConfigurations : IEntityTypeConfiguration<Challenge>
    {
        public void Configure(EntityTypeBuilder<Challenge> entity)
        {
            entity.HasKey(e => e.Id).HasName("Challenges_pkey");

            entity.Property(e => e.Message).HasMaxLength(300);
        }
    }
}
