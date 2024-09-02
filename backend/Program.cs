using Microsoft.EntityFrameworkCore;
using TaxPayerApi.Models;

namespace TaxPayerApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(
                    "AllowSpecificOrigin",
                    policy =>
                    {
                        policy
                            .WithOrigins("http://localhost:4200") // Removed the trailing slash
                            .AllowAnyMethod()
                            .AllowAnyHeader();
                    }
                );
            });

            builder.Services.AddDbContext<TaxPayerDbContext>(options =>
            {
                /*options.UseSqlServer(
                    builder.Configuration.GetConnectionString("DefaultConnection")
                );*/
                options.UseMySql(Configuration.GetConnectionString("DefaultConnection")));
                options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
            });
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseCors("AllowSpecificOrigin");

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
