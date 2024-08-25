using FluentValidation;
using FluentValidation.AspNetCore;
using TechKids.API.Filters;
using TechKids.Application.Validators;

namespace TechKids.API.Extensions
{
    public static class ValidationExtensions
    {
        public static IServiceCollection AddValidations(this IServiceCollection services)
        {
            services
                .AddControllers(o => o.Filters.Add(typeof(ValidationFilter)))
                .ConfigureApiBehaviorOptions(o => o.SuppressModelStateInvalidFilter = true);

            services.AddFluentValidationAutoValidation();

            services.AddFluentValidationClientsideAdapters();

            return services;
        }
    }
}
