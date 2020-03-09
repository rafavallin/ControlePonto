using System;
using System.ComponentModel.DataAnnotations;
using ControlePonto.DataObject.Entities;
using System.ComponentModel.DataAnnotations;

namespace ControlePonto.DataObject.DTO
{
    public class Empresa
    {
        [Key]
        public int IDEmpresa { get; set; }
        public string Nome { get; set; }
        public Int64 IDFolha { get; set; }
        public string Cep { get; set; }
        public string Cidade { get; set; }
        public string Bairro { get; set; }
        public string UF { get; set; }
        public string Documento { get; set; }
        public string IE { get; set; }
        public string CEI { get; set; }

        public static implicit operator Empresa(EmpresaMapping obj)
        {
            return obj == null ? null : new Empresa()
            {
                IDEmpresa = obj.IDEmpresa,
                Nome = obj.Nome,
                IDFolha = obj.IDFolha,
                Cep = obj.Cep,
                Cidade = obj.Cidade,
                Bairro = obj.Bairro,
                UF = obj.UF,
                Documento = obj.Documento,
                IE = obj.IE,
                CEI = obj.CEI
            };
        }
    }
}
