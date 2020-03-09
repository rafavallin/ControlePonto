using ControlePonto.Business;
using ControlePonto.DataObject.Entities;
using ControlePonto.Repository.Base;
using ControlePonto.Repositorys;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ControlePonto.Api
{
    public class Startup
    {
        private static DbContextOptionsBuilder<Context> option;
        private static DbContextOptionsBuilder<ContextOrigin> optionOrigin;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            if (option == null)
            {
                option = new DbContextOptionsBuilder<Context>();
            }

            if (optionOrigin == null)
            {
                optionOrigin = new DbContextOptionsBuilder<ContextOrigin>();
            }

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAnyOrigin",
                builder => builder.AllowAnyOrigin());
            });

            // Context
            services.AddScoped(x => new Context(option.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")).Options));
            services.AddScoped(x => new ContextOrigin(optionOrigin.UseSqlServer(Configuration.GetConnectionString("DefaultOriginConnection")).Options));


            //israel teste aqui mano!


            // Repositories
            services.AddScoped<IRepository<EmpresaMapping>, Repository<EmpresaMapping>>();
            services.AddScoped<IRepository<SetorMapping>, Repository<SetorMapping>>();
            services.AddScoped<IRepository<FuncionarioMapping>, Repository<FuncionarioMapping>>();
            services.AddScoped<IRepository<DepartamentoMapping>, Repository<DepartamentoMapping>>();
            services.AddScoped<IRepository<FilaProcessoMapping>, Repository<FilaProcessoMapping>>();
            services.AddScoped<IRepository<ApontamentoSemiLimpoMapping>, Repository<ApontamentoSemiLimpoMapping>>();
            services.AddScoped<IRepository<ApontamentoSujoMapping>, RepositoryOrigin<ApontamentoSujoMapping>>();
            services.AddScoped<IRepository<MarcacaoParMapping>, Repository<MarcacaoParMapping>>();

            // Business
            services.AddScoped<EmpresaBusiness>();
            services.AddScoped<SetorBusiness>();
            services.AddScoped<FuncionarioBusiness>();
            services.AddScoped<DepartamentoBusiness>();
            services.AddScoped<ProcessamentoBusiness>();

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseCors("AllowAnyOrigin");
            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
