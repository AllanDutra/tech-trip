using TechKids.Core.Models.ViewModels;

namespace TechKids.Core.Interfaces
{
    public interface INotifier
    {
        void ClearNotification();
        bool HasNotification();
        List<NotificationViewModel> GetNotifications();
        void Handle(NotificationViewModel notification);
    }
}
