using TechKids.Application.Notifications;
using TechKids.Core.Interfaces.Notifications;

namespace TechKids.API.Extensions
{
    public static class NotificationExtensions
    {
        public static IServiceCollection AddNotifications(this IServiceCollection services)
        {
            services.AddScoped<INotifier, Notifier>();

            return services;
        }
    }
}
