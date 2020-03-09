using ControlePonto.DataObject.Entities;
using Microsoft.EntityFrameworkCore;

namespace ControlePonto.Repository.Base
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options)
            : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }

        public virtual DbSet<EmpresaMapping> Empresas { get; set; }
        public virtual DbSet<SetorMapping> Setores { get; set; }
        public virtual DbSet<FuncionarioMapping> Funcionarios { get; set; }
        public virtual DbSet<DepartamentoMapping> Departamentos { get; set; }
        public virtual DbSet<ApontamentoSemiLimpoMapping> Apontamentos { get; set; }
        public virtual DbSet<FilaProcessoMapping> FilaProcessos { get; set; }
        public virtual DbSet<MarcacaoParMapping> MarcacaoPares { get; set; }
    }
}
