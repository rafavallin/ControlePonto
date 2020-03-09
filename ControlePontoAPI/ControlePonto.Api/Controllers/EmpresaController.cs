using System.Collections.Generic;
using System.Linq;
using ControlePonto.Business;
using ControlePonto.DataObject.DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace ControlePonto.Api.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("AllowAnyOrigin")]
    [ApiController]
    public class EmpresaController : Controller
    {
        EmpresaBusiness _business;

        public EmpresaController(EmpresaBusiness business)
        {
            _business = business;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Empresa>> Get()
        {
            return _business.ListEmpresas().ToList();
        }
    }
}
