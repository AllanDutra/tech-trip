using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TechKids.Core.Entities;

namespace TechKids.Infrastructure.Persistence.Configurations
{
    public class StudentConfigurations : IEntityTypeConfiguration<Student>
    {
        public void Configure(EntityTypeBuilder<Student> entity)
        {
            entity.HasKey(e => e.Id).HasName("Students_pkey");

            entity.HasIndex(e => e.Email, "Students_Email_key").IsUnique();

            entity.HasIndex(e => e.User, "Students_User_key").IsUnique();

            entity.Property(e => e.CharacterId).HasColumnName("Character_Id");
            entity.Property(e => e.Email).HasMaxLength(150);
            entity.Property(e => e.Gender).HasMaxLength(6);
            entity.Property(e => e.Name).HasMaxLength(100);
            entity.Property(e => e.Password).HasMaxLength(64);
            entity.Property(e => e.Salt).HasMaxLength(32);
            entity.Property(e => e.User).HasMaxLength(50);

            entity
                .HasOne(d => d.Character)
                .WithMany(p => p.Students)
                .HasForeignKey(d => d.CharacterId)
                .HasConstraintName("Students_Character_Id_fkey");
        }
    }
}
