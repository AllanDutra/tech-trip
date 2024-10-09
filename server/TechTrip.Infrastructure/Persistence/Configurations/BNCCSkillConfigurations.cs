using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TechTrip.Core.Entities;

namespace TechTrip.Infrastructure.Persistence.Configurations
{
    public class BNCCSkillConfigurations : IEntityTypeConfiguration<BNCCSkill>
    {
        public void Configure(EntityTypeBuilder<BNCCSkill> entity)
        {
            entity.HasKey(e => e.Id).HasName("BNCCSkills_pkey");

            entity.ToTable("BNCCSkills");

            entity.HasIndex(e => e.SkillName, "BNCCSkills_SkillName_key").IsUnique();

            entity.Property(e => e.ChallengeId).HasColumnName("Challenge_Id");
            entity.Property(e => e.Description).HasMaxLength(300);
            entity.Property(e => e.SkillName).HasMaxLength(15);

            entity
                .HasOne(d => d.Challenge)
                .WithMany(p => p.BNCCSkills)
                .HasForeignKey(d => d.ChallengeId)
                .HasConstraintName("BNCCSkills_Challenge_Id_fkey");
        }
    }
}
