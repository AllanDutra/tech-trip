using TechKids.API.Middlewares;

namespace TechKids.API.Extensions
{
    public static class MiddlewareExtensions
    {
        public static IServiceCollection AddMiddlewares(this IServiceCollection services)
        {
            services.AddTransient<GlobalExceptionMiddleware>();

            return services;
        }
    }
}