using System;
using ControlePonto.DataObject.Entities;

namespace ControlePonto.DataObject.DTO
{
    public class FilaProcesso
    {
        public int filaProcessoId { get; set; }
        public int usuarioId { get; set; }
        public int qtdLinhas { get; set; }
        public int linhasProcessadas { get; set; }
        public int linhasErro { get; set; }
        public bool finalizado { get; set; }
        public DateTime dataInicio { get; set; }
        public DateTime? dataFim { get; set; }

        public static implicit operator FilaProcesso(FilaProcessoMapping obj)
        {
            return obj == null ? null : new FilaProcesso()
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
