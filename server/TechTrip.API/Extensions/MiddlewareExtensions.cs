using TechTrip.API.Middlewares;

namespace TechTrip.API.Extensions
{
    public static class MiddlewareExtensions
    {
        public static IServiceCollection AddMiddlewares(this IServiceCollection services)
        {
            services.AddTransient<StudentAuthenticationMiddleware>();

            services.AddTransient<GlobalExceptionMiddleware>();

            return services;
        }
    }
}
