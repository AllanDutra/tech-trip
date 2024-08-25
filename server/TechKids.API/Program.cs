using TechKids.API.Extensions;
using TechKids.API.Middlewares;
using TechKids.Application;
using TechKids.Core;
using TechKids.Infrastructure;
using TechKids.Shared.Utils;

var builder = WebApplication.CreateBuilder(args);

builder.WebHost.ConfigureKestrel(p => p.ListenAnyIP(5999));

// Add services to the container.

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddInfrastructure(builder.Configuration);

builder.Services.AddDomain();

builder.Services.AddNotifications();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
