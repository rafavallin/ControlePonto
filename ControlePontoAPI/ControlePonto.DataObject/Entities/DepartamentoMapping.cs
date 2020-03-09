using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ControlePonto.DataObject.DTO;

namespace ControlePonto.DataObject.Entities
{
    [Table("departamentos")]
    public class DepartamentoMapping
    {
        [Key]
        public long IDDepartamento { get; set; }
        public int IDEmpresa { get; set; }
        public string Nome { get; set; }

        public static implicit operator DepartamentoMapping(Departamento obj)
        {
            return obj == null ? null : new DepartamentoMapping()
            {
                IDDepartamento = obj.IDDepartamento,
                IDEmpresa = obj.IDEmpresa,
                Nome = obj.Nome
            };
        }
    }
}
