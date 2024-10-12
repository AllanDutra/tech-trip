using System.Reflection;
using Microsoft.EntityFrameworkCore;
using TechTrip.Core.Entities;

namespace TechTrip.Infrastructure.Persistence
{
    public class TechTripDbContext : DbContext
    {
        public TechTripDbContext(DbContextOptions options)
            : base(options) { }

        public virtual DbSet<AnswerKey> AnswerKeys { get; set; }
        public virtual DbSet<Attempt> Attempts { get; set; }
        public virtual DbSet<BNCCSkill> BNCCSkills { get; set; }
        public virtual DbSet<Challenge> Challenges { get; set; }
        public virtual DbSet<Character> Characters { get; set; }
        public virtual DbSet<Preference> Preferences { get; set; }
        public virtual DbSet<Score> Scores { get; set; }
        public virtual DbSet<Student> Students { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}
