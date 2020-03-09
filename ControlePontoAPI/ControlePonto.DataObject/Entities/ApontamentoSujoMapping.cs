using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ControlePonto.DataObject.DTO;

namespace ControlePonto.DataObject.Entities
{
    [Table("tb_apontamentos")]
    public class ApontamentoSujoMapping
    {
        [Key]
        public string chaveUniqueMarc { get; set; }
        public string nfr { get; set; }
        public string hora { get; set; }
        public DateTime data { get; set; }
        public string pis { get; set; }
        public int IDEmpresa { get; set; }
        public int nsr { get; set; }
        public int status { get; set; }

        public static implicit operator ApontamentoSujoMapping(Apontamento obj)
        {
            return obj == null ? null : new ApontamentoSujoMapping()
            {
                chaveUniqueMarc = obj.chaveUniqueMarc,
                nfr = obj.nfr,
                hora = obj.hora,
                data = obj.data,
                pis = obj.pis,
                nsr = obj.nsr,
                status = obj.status
            };
        }
    }
}
