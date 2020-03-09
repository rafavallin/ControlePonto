using System.Collections.Generic;
using System.Linq;
using ControlePonto.Business;
using ControlePonto.DataObject.DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ControlePonto.Api.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowAnyOrigin")]
    [ApiController]     
    public class FuncionarioController : Controller
    {
        FuncionarioBusiness _business;

        public FuncionarioController(FuncionarioBusiness business)
        {
            _business = business;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Funcionario>> Get(long[] setores, long[] departamentos)
        {
            return _business.ListFuncionarios(setores, departamentos).ToList();

            // Como chamar pelo navegador: 
        }
    }
}
