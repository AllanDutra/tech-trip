using FluentValidation;
using FluentValidation.AspNetCore;
using TechTrip.API.Filters;
using TechTrip.Application.Validators;

namespace TechTrip.API.Extensions
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

            services.AddValidatorsFromAssemblyContaining<RegisterStudentCommandValidator>();

            return services;
        }
    }
}
