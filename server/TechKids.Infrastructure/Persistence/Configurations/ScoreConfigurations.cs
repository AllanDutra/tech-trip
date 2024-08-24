using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TechKids.Core.Entities;

namespace TechKids.Infrastructure.Persistence.Configurations
{
    public class ScoreConfigurations : IEntityTypeConfiguration<Score>
    {
        public void Configure(EntityTypeBuilder<Score> entity)
        {
            entity.HasKey(e => e.Id).HasName("Scores_pkey");

            entity.Property(e => e.ChallengeId).HasColumnName("Challenge_Id");
            entity
                .Property(e => e.Date)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("timestamp without time zone");
            entity.Property(e => e.StudentId).HasColumnName("Student_Id");

            entity
                .HasOne(d => d.Challenge)
                .WithMany(p => p.Scores)
                .HasForeignKey(d => d.ChallengeId)
                .HasConstraintName("Scores_Challenge_Id_fkey");

            entity
                .HasOne(d => d.Student)
                .WithMany(p => p.Scores)
                .HasForeignKey(d => d.StudentId)
                .HasConstraintName("Scores_Student_Id_fkey");
        }
    }
}
