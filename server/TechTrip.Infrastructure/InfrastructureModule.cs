using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using TechTrip.Core.Interfaces;
using TechTrip.Core.Interfaces.Repositories;
using TechTrip.Infrastructure.Persistence;
using TechTrip.Infrastructure.Persistence.Repositories;

namespace TechTrip.Infrastructure
{
    public static class InfrastructureModule
    {
        public static IServiceCollection AddInfrastructure(
            this IServiceCollection services,
            IConfiguration configuration
        )
        {
            services.AddDbContext<TechTripDbContext>(p =>
                p.UseNpgsql(configuration.GetConnectionString("TechTripDb"))
            );

            services.AddRepositories();

            return services;
        }

        private static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            services.AddScoped<IStudentRepository, StudentRepository>();

            services.AddScoped<IPreferenceRepository, PreferenceRepository>();

            services.AddScoped<ICharacterRepository, CharacterRepository>();

            services.AddScoped<IChallengeRepository, ChallengeRepository>();

            services.AddScoped<IScoreRepository, ScoreRepository>();

            services.AddScoped<IAttemptRepository, AttemptRepository>();

            services.AddScoped<IAnswerKeyRepository, AnswerKeyRepository>();

            services.AddScoped<IUnitOfWork, UnitOfWork>();

            return services;
        }
    }
}
