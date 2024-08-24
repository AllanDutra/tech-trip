using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TechKids.Core.Entities;

namespace TechKids.Infrastructure.Persistence.Configurations
{
    public class AnswerKeyConfigurations : IEntityTypeConfiguration<AnswerKey>
    {
        public void Configure(EntityTypeBuilder<AnswerKey> entity)
        {
            entity.HasKey(e => e.Id).HasName("AnswerKeys_pkey");

            entity.Property(e => e.ChallengeId).HasColumnName("Challenge_Id");
            entity.Property(e => e.Help).HasMaxLength(600);
            entity.Property(e => e.Response).HasMaxLength(50);
            entity.Property(e => e.ResponsePattern).HasMaxLength(50);

            entity
                .HasOne(d => d.Challenge)
                .WithMany(p => p.AnswerKeys)
                .HasForeignKey(d => d.ChallengeId)
                .HasConstraintName("AnswerKeys_Challenge_Id_fkey");
        }
    }
}
