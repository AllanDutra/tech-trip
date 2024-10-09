using TechTrip.Application.Notifications;
using TechTrip.Core.Interfaces.Notifications;

namespace TechTrip.API.Extensions
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
