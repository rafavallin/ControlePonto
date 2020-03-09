using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ControlePonto.DataObject.DTO;

namespace ControlePonto.DataObject.Entities
{
    [Table("tb_filaProcesso")]
    public class FilaProcessoMapping
    {
        [Key]
        public int filaProcessoId { get; set; }
        public int usuarioId { get; set; }
        public int qtdLinhas { get; set; }
        public int linhasProcessadas { get; set; }
        public int linhasErro { get; set; }
        public bool finalizado { get; set; }
        public DateTime dataInicio { get; set; }
        public DateTime? dataFim { get; set; }


        public static implicit operator FilaProcessoMapping(FilaProcesso obj)
        {
            return obj == null ? null : new FilaProcessoMapping()
            {
                filaProcessoId = obj.filaProcessoId,
                 usuarioId = obj.usuarioId,
                 qtdLinhas = obj.qtdLinhas,
                 linhasProcessadas = obj.linhasProcessadas,
                 linhasErro = obj.linhasErro,
                 finalizado = obj.finalizado,
                 dataInicio = obj.dataInicio,
                 dataFim = obj.dataFim
            };
        }
    }
}
