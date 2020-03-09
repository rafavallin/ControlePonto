using System;
using System.ComponentModel.DataAnnotations;
using ControlePonto.DataObject.Entities;

namespace ControlePonto.DataObject.DTO
{
    public class Apontamento
    {
        public Apontamento()
        {

        }

        [Key]
        public string chaveUniqueMarc { get; set; }
        public string nfr { get; set; }
        public string hora { get; set; }
        public DateTime data { get; set; }
        public Int64 IDFuncionario { get; set; }
        public int IDEmpresa { get; set; }
        public string pis { get; set; }
        public int nsr { get; set; }
        public int status { get; set; }
        


        public static implicit operator Apontamento(ApontamentoSemiLimpoMapping obj)
        {
            return obj == null ? null : new Apontamento()
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

        public static implicit operator Apontamento(ApontamentoSujoMapping obj)
        {
            return obj == null ? null : new Apontamento()
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
