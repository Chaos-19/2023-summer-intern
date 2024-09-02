using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
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
                            .WithOrigins("https://super-duper-space-giggle-gj6q9vqq66gfw4pj-4200.app.github.dev") // Removed the trailing slash
                            .AllowAnyMethod()
                            .AllowAnyHeader();
                    }
                );
            });

            builder.Services.AddDbContext<TaxPayerDbContext>(options =>
            {
                 options.UseMySql(builder.Configuration.GetConnectionString("DBConn"), new MySqlServerVersion(new Version(8, 0, 30)));

                //options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking);
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
