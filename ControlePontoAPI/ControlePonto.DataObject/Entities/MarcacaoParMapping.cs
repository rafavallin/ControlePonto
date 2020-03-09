using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ControlePonto.DataObject.DTO;

namespace ControlePonto.DataObject.Entities
{
    [Table("tb_marcacaoPar")]
    public class MarcacaoParMapping
    {
        [Key]
        public int marcacaoParId { get; set; }
        public int filaProcessoId { get; set; }
        public DateTime entrada { get; set; }
        public DateTime saida { get; set; }
        public long IDFuncionario { get; set; }
        public int IDEmpresa { get; set; }
        public bool original { get; set; }

        public static implicit operator MarcacaoParMapping(MarcacaoPar obj)
        {
            return obj == null ? null : new MarcacaoParMapping()
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
