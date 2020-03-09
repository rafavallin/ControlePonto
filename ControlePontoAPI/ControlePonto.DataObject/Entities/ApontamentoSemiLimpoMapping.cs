using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ControlePonto.DataObject.DTO;

namespace ControlePonto.DataObject.Entities
{
    [Table("tb_apontamentos")]
    public class ApontamentoSemiLimpoMapping
    {
        [Key]
        public string chaveUniqueMarc { get; set; }
        public string nfr { get; set; }
        public string hora { get; set; }
        public DateTime data { get; set; }
        public Int64 IDFuncionario { get; set; }
        public int IDEmpresa { get; set; }
        public int nsr { get; set; }
        public int status { get; set; }

        public static implicit operator ApontamentoSemiLimpoMapping(Apontamento obj)
        {
            return obj == null ? null : new ApontamentoSemiLimpoMapping()
            {
                chaveUniqueMarc = obj.chaveUniqueMarc,
                nfr = obj.nfr,
                hora = obj.hora,
                data = obj.data,
                IDFuncionario = obj.IDFuncionario,
                IDEmpresa = obj.IDEmpresa,
                nsr = obj.nsr,
                status = obj.status
            };
        }
    }
}
