using Microsoft.EntityFrameworkCore;
using TaxPayerApi.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaxPayerApi.Models
{
    public partial class TaxPayerDbContext : DbContext
    {
        public TaxPayerDbContext(DbContextOptions<TaxPayerDbContext> options)
            : base(options) { }

        public virtual DbSet<TaxPayer> TaxPayer { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TaxPayer>(entity =>
            {
                entity.HasKey(k => k.TaxPayerId);
            });
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
