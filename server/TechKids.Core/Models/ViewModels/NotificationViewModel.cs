using System.Net;

namespace TechKids.Core.Models.ViewModels
{
    public class NotificationViewModel
    {
        public NotificationViewModel(string message, HttpStatusCode statusCode)
        {
            Message = message;
            StatusCode = statusCode;
        }

        public string Message { get; }
        public HttpStatusCode StatusCode { get; }
    }
}
