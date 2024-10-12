using TechTrip.API.Extensions;
using TechTrip.API.Middlewares;
using TechTrip.Application;
using TechTrip.Core;
using TechTrip.Infrastructure;
using TechTrip.Shared.Utils;

var builder = WebApplication.CreateBuilder(args);

builder.WebHost.ConfigureKestrel(p => p.ListenAnyIP(5999));

// Add services to the container.

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerExtensions();
builder.Services.AddJwtAuthentication();

builder.Services.AddInfrastructure(builder.Configuration);

builder.Services.AddDomain();

builder.Services.AddApplication();

builder.Services.AddNotifications();

builder.Services.AddValidations();

builder.Services.AddMiddlewares();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", $"{Settings.ApplicationName} API");
        c.RoutePrefix = string.Empty;
    });
}

app.UseCors(p => p.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());

app.UseMiddleware<StudentAuthenticationMiddleware>();

app.UseMiddleware<GlobalExceptionMiddleware>();

app.UseAuthentication();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
