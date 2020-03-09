using System;
using ControlePonto.DataObject.Entities;

namespace ControlePonto.DataObject.DTO
{
    public class MarcacaoPar
    {
        public int marcacaoParId { get; set; }
        public int filaProcessoId { get; set; }
        public DateTime entrada { get; set; }
        public DateTime saida { get; set; }
        public long IDFuncionario { get; set; }
        public int IDEmpresa { get; set; }
        public bool original { get; set; }

        public static implicit operator MarcacaoPar(MarcacaoParMapping obj)
        {
            return obj == null ? null : new MarcacaoPar()
            {
                marcacaoParId = obj.marcacaoParId,
                filaProcessoId = obj.filaProcessoId,
                entrada = obj.entrada,
                saida = obj.saida,
                IDFuncionario = obj.IDFuncionario,
                IDEmpresa = obj.IDEmpresa,
                original = obj.original
            };
        }
    }
}
