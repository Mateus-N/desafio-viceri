using HeroisApi.Data;
using HeroisApi.Services;
using Microsoft.EntityFrameworkCore;

namespace HeroisApi;

public class Startup(IConfiguration configuration)
{
    public IConfiguration Configuration { get; } = configuration;

    public void ConfigureServices(IServiceCollection services)
    {
        string connectionString = Configuration.GetConnectionString("ContextConnection")!;

        services.AddDbContext<AppDbContext>(opts => opts
            .UseMySql(connectionString, ServerVersion.AutoDetect(connectionString))
        );

        services.AddScoped<SuperPoderService, SuperPoderService>();

        services.AddCors();
        services.AddSwaggerGen();
        services.AddControllers();
        services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
        app.UseRouting();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
    }
}
