using Microsoft.Extensions.DependencyInjection;
using TechKids.Core.Interfaces.Services;
using TechKids.Core.Services;

namespace TechKids.Core
{
    public static class DomainModule
    {
        public static IServiceCollection AddDomain(this IServiceCollection services)
        {
            services.AddScoped<ICryptoDomainService, CryptoDomainService>();

            return services;
        }
    }
}
