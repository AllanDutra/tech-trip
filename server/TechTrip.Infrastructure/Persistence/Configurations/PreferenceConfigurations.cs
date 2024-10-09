using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TechTrip.Core.Entities;

namespace TechTrip.Infrastructure.Persistence.Configurations
{
    public class PreferenceConfigurations : IEntityTypeConfiguration<Preference>
    {
        public void Configure(EntityTypeBuilder<Preference> entity)
        {
            entity.HasKey(e => e.Id).HasName("Preferences_pkey");

            entity.Property(e => e.Sound).HasDefaultValueSql("true");
            entity.Property(e => e.StudentId).HasColumnName("Student_Id");
            entity.Property(e => e.Vibration).HasDefaultValueSql("true");

            entity
                .HasOne(d => d.Student)
                .WithMany(p => p.Preferences)
                .HasForeignKey(d => d.StudentId)
                .HasConstraintName("Preferences_Student_Id_fkey");
        }
    }
}
