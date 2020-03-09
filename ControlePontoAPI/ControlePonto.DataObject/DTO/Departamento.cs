using ControlePonto.DataObject.Entities;

namespace ControlePonto.DataObject.DTO
{
    public class Departamento
    {
        public long IDDepartamento { get; set; }
        public int IDEmpresa { get; set; }
        public string Nome { get; set; }

        public static implicit operator Departamento(DepartamentoMapping obj)
        {
            return obj == null ? null : new Departamento()
            {
                IDDepartamento = obj.IDDepartamento,
                IDEmpresa = obj.IDEmpresa,
                Nome = obj.Nome
            };
        }
    }
}
