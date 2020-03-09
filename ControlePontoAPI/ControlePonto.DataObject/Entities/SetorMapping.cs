using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ControlePonto.DataObject.DTO;

namespace ControlePonto.DataObject.Entities
{
    [Table("setores")]
    public class SetorMapping
    {
        [Key]
        public long IDSetor { get; set; }
        public int IDEmpresa { get; set; }
        public string Nome { get; set; }

        public static implicit operator SetorMapping(Setor obj)
        {
            return obj == null ? null : new SetorMapping()
            {
                IDSetor = obj.IDSetor,
                IDEmpresa = obj.IDEmpresa,
                Nome = obj.Nome
            };
        }
    }
}
