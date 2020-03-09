using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ControlePonto.Business;
using ControlePonto.DataObject.DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ControlePonto.Api.Controllers
{
    [Route("api/[controller]/[action]")]
    [EnableCors("AllowAnyOrigin")]
    [ApiController]
    public class ProcessoController : Controller
    {
        FuncionarioBusiness _funcBusiness;
        EmpresaBusiness _empBusiness;
        ProcessamentoBusiness _procBusiness;

        List<Empresa> listaGlobalEmpresas;

        public ProcessoController(FuncionarioBusiness funcBusiness, EmpresaBusiness empBusiness, ProcessamentoBusiness procBusiness)
        {
            _funcBusiness = funcBusiness;
            _empBusiness = empBusiness;
            _procBusiness = procBusiness;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Funcionario>> Get(string tipoProcesso, DateTime De, DateTime Ate, string empresa, string[] funcionarios)
        {
            listaGlobalEmpresas = _empBusiness.ListEmpresas().ToList();
            var funcList = _funcBusiness.ListFuncionarios().Where(x => funcionarios.Contains(x.Nome) && listaGlobalEmpresas.Any(e => e.Nome == empresa)).ToList();

            return _funcBusiness.ListFuncionarios().Where(x => x.Pis == "teste").ToList(); //--teste
        }

        [HttpGet]
        public ActionResult<object> IniciaProcessamento()
        {
            try
            {
                _procBusiness.Processar("Normal", DateTime.Now.AddDays(-1000), DateTime.Now, _empBusiness.GetEmpresa(1), _funcBusiness.ListFuncionarios().ToList());
                return new { success = true };
            }
            catch (Exception ex)
            {
                return new { success = false, msg = ex.Message };
            }
        }

        [HttpGet]
        public ActionResult<IEnumerable<FilaProcesso>> ListaProcesso()
        {
            return _procBusiness.ListFila();
        }

    }
}
