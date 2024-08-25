using System.Net;
using TechKids.Core.Models.ViewModels;

namespace TechKids.API.Middlewares
{
    public class GlobalExceptionMiddleware : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                await next(context);
            }
            catch (Exception exception)
            {
                await HandleExceptionAsync(context, exception);
            }
        }

        private static async Task HandleExceptionAsync(HttpContext httpContext, Exception exception)
        {
            httpContext.Response.ContentType = "application/json";

            // TODO: Implement a Logger here as a good practice

            if (httpContext != null)
            {
                httpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

                await httpContext.Response.WriteAsJsonAsync(
                    new DefaultResponseViewModel(
                        exception.InnerException?.Message
                            ?? exception.Message
                            ?? "Tivemos um problema interno no servidor, tente novamente mais tarde!"
                    )
                );
            }
        }
    }
}
