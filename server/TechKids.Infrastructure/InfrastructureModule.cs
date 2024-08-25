using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using TechKids.Core.Interfaces;
using TechKids.Core.Interfaces.Repositories;
using TechKids.Infrastructure.Persistence;
using TechKids.Infrastructure.Persistence.Repositories;

namespace TechKids.Infrastructure
{
    public static class InfrastructureModule
    {
        public static IServiceCollection AddInfrastructure(
            this IServiceCollection services,
            IConfiguration configuration
        )
        {
            services.AddDbContext<TechKidsDbContext>(
                p => p.UseNpgsql(configuration.GetConnectionString("TechKidsDb"))
            );

            services.AddRepositories();

            return services;
        }

        private static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            services.AddScoped<IStudentRepository, StudentRepository>();

            services.AddScoped<IPreferenceRepository, PreferenceRepository>();

            services.AddScoped<ICharacterRepository, CharacterRepository>();

            services.AddScoped<IUnitOfWork, UnitOfWork>();

            return services;
        }
    }
}
