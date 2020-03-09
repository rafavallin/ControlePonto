using ControlePonto.DataObject.Entities;
using Microsoft.EntityFrameworkCore;

namespace ControlePonto.Repository.Base
{
    public class ContextOrigin : DbContext
    {
        public ContextOrigin(DbContextOptions<ContextOrigin> options)
            : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }

        public virtual DbSet<ApontamentoSujoMapping> ApontamentoSujo { get; set; }


    }
}
