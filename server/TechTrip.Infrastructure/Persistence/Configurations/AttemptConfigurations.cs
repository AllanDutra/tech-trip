using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TechTrip.Core.Entities;

namespace TechTrip.Infrastructure.Persistence.Configurations
{
    public class AttemptConfigurations : IEntityTypeConfiguration<Attempt>
    {
        public void Configure(EntityTypeBuilder<Attempt> entity)
        {
            entity.HasKey(e => e.Id).HasName("Attempts_pkey");

            entity.Property(e => e.ChallengeId).HasColumnName("Challenge_Id");
            entity
                .Property(e => e.Date)
                .HasDefaultValueSql("CURRENT_TIMESTAMP")
                .HasColumnType("timestamp without time zone");
            entity.Property(e => e.StudentId).HasColumnName("Student_Id");
            entity.Property(e => e.StudentResponse).HasMaxLength(150);

            entity
                .HasOne(d => d.Challenge)
                .WithMany(p => p.Attempts)
                .HasForeignKey(d => d.ChallengeId)
                .HasConstraintName("Attempts_Challenge_Id_fkey");

            entity
                .HasOne(d => d.Student)
                .WithMany(p => p.Attempts)
                .HasForeignKey(d => d.StudentId)
                .HasConstraintName("Attempts_Student_Id_fkey");
        }
    }
}
