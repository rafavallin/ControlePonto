using System;
using ControlePonto.DataObject.Entities;

namespace ControlePonto.DataObject.DTO
{
    public class Funcionario
    {
        #region relacionamentos comentados

        //public Cargos Cargo { get; set; }
        //public IList<PermissoesdeFuncionarios> PermissoesdeFuncionarios { get; set; }
        //public Setores Setor { get; set; }
        //public Parametros Parametro { get; set; }
        //public Departamentos Departamento { get; set; }
        //public GrupodeFeriados GrupodeFeriados { get; set; }
        //public IList<MensagensFuncionarios> MensagensCartao { get; set; }
        //public IList<Afastamentos> Afastamentos { get; set; }
        //public IList<Folgas> Folgas { get; set; }
        //public IList<HorariosOcasionais> HorariosOcasionais { get; set; }
        //public IList<CartaoProximidade> CartoesProximidade { get; set; }
        //public Escalas Escala { get; set; }

        #endregion


        public Int64 IDFuncionario { get; set; }
        public int IDCargo { get; set; }
        public String Cpf { get; set; }
        public String Endereco { get; set; }
        public String Cidade { get; set; }
        public Int64? IDDepartamento { get; set; }
        public Int64 IDSetor { get; set; }
        public int IDParametro { get; set; }
        public int IDEmpresa { get; set; }
        public int? IDFeriado { get; set; }
        public String Nome { get; set; }
        public String Pis { get; set; }
        public DateTime Admissao { get; set; }
        public DateTime? Rescisao { get; set; }
        public Empresa Empresa { get; set; }
        public bool IntervaloFixo { get; set; }
        public int Feriado { get; set; }
        public int Intervalo { get; set; }
        public String IDFolha { get; set; }
        public int? CTPSNum { get; set; }
        public int? Serie { get; set; }
        public String Telefone { get; set; }
        public String RG { get; set; }
        public String Salario { get; set; }
        public String Observacoes { get; set; }
        public bool FotoPadrao { get; set; }
        public int IDEscala { get; set; }

        

        public static implicit operator Funcionario(FuncionarioMapping obj)
        {
            return obj == null ? null : new Funcionario()
            {
                IDFuncionario = obj.IDFuncionario,
                IDCargo = obj.IDCargo,
                Cpf = obj.Cpf,
                Endereco = obj.Endereco,
                Cidade = obj.Cidade,
                IDDepartamento = obj.IDDepartamento,
                IDSetor = obj.IDSetor,
                IDParametro = obj.IDParametro,
                IDEmpresa = obj.IDEmpresa,
                IDFeriado = obj.IDFeriado,
                Nome = obj.Nome,
                Pis = obj.Pis,
                Admissao = obj.Admissao,
                Rescisao = obj.Rescisao,
                Empresa = obj.Empresa,
                IntervaloFixo = obj.IntervaloFixo,
                Feriado = obj.Feriado,
                Intervalo = obj.Intervalo,
                IDFolha = obj.IDFolha,
                CTPSNum = obj.CTPSNum,
                Serie = obj.Serie,
                Telefone = obj.Telefone,
                RG = obj.RG,
                Salario = obj.Salario,
                Observacoes = obj.Observacoes,
                FotoPadrao = obj.FotoPadrao,
                IDEscala = obj.IDEscala
            };
        }
    }
}
