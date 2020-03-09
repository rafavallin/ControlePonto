using System;
using ControlePonto.DataObject.Entities;

namespace ControlePonto.DataObject.DTO
{
    public class Setor
    {
        public long IDSetor { get; set; }
        public int IDEmpresa { get; set; }
        public string Nome { get; set; }

        public static implicit operator Setor(SetorMapping obj)
        {
            return obj == null ? null : new Setor()
            {
                IDSetor = obj.IDSetor,
                IDEmpresa = obj.IDEmpresa,
                Nome = obj.Nome
            };
        }
    }
}
