using Microsoft.Extensions.DependencyInjection;
using TechKids.Core.Factories;
using TechKids.Core.Factories.AnswerKeys;
using TechKids.Core.Interfaces.Factories;
using TechKids.Core.Interfaces.Services;
using TechKids.Core.Services;

namespace TechKids.Core
{
    public static class DomainModule
    {
        public static IServiceCollection AddDomain(this IServiceCollection services)
        {
            services.AddScoped<ICryptoDomainService, CryptoDomainService>();

            services.AddScoped<ITokenDomainService, TokenDomainService>();

            services.AddScoped<
                IProcessAttemptDomainServiceAbstractFactory,
                ProcessAttemptDomainServiceAbstractFactory
            >();

            services.AddTransient<CalculateStarsBasedOnAttempts>();
            services.AddTransient<CalculateStarsBasedOnSteps>();

            return services;
        }
    }
}
