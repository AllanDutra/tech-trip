using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using TechTrip.Core.Models.ViewModels;

namespace TechTrip.API.Filters
{
    public class ValidationFilter : IActionFilter
    {
        public void OnActionExecuted(ActionExecutedContext context) { }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            if (!context.ModelState.IsValid)
            {
                var firstErrorMessage = context.ModelState
                    .SelectMany(ms => ms.Value.Errors)
                    .Select(e => e.ErrorMessage)
                    .First();

                context.Result = new BadRequestObjectResult(
                    new DefaultResponseViewModel(firstErrorMessage)
                );
            }
        }
    }
}
