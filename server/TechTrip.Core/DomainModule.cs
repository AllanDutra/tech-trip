using Microsoft.Extensions.DependencyInjection;
using TechTrip.Core.Factories;
using TechTrip.Core.Factories.AnswerKeys;
using TechTrip.Core.Interfaces.Factories;
using TechTrip.Core.Interfaces.Services;
using TechTrip.Core.Services;

namespace TechTrip.Core
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
            services.AddTransient<CalculateStarsBasedOnAttemptsToWin>();
            services.AddTransient<CalculateStarsBasedOnCompoundChallenge>();

            return services;
        }
    }
}
