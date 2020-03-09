using System;
using System.Collections.Generic;
using System.Linq;
using ControlePonto.DataObject.DTO;
using ControlePonto.DataObject.Entities;
using ControlePonto.Repository.Base;

namespace ControlePonto.Business
{
    public class ProcessamentoBusiness
    {
        IRepository<ApontamentoSujoMapping> _repSujo;
        IRepository<ApontamentoSemiLimpoMapping> _repSemiLimpo;
        IRepository<FilaProcessoMapping> _repFila;
        IRepository<MarcacaoParMapping> _repMarcacaoPar;



        public ProcessamentoBusiness(IRepository<ApontamentoSujoMapping> repSujo,
                                     IRepository<ApontamentoSemiLimpoMapping> repSemiLimpo,
                                     IRepository<FilaProcessoMapping> repFila,
                                     IRepository<MarcacaoParMapping> repMarcacaoPar)
        {
            _repSujo = repSujo;
            _repSemiLimpo = repSemiLimpo;
            _repFila = repFila;
            _repMarcacaoPar = repMarcacaoPar;

        }

        public string Processar(string tipoProcesso, DateTime De, DateTime Ate, Empresa empresa, List<Funcionario> funcionarios)
        {
            var fila = InsereProcessoFila(new FilaProcesso { filaProcessoId = 0, dataInicio = DateTime.Now, usuarioId = 1 });

            List<Apontamento> _listaMarcacoes;

            LimpaTabelas(tipoProcesso, De, Ate, empresa, funcionarios);

            _listaMarcacoes = _repSujo.ListAll().Where(x => x.data > De && x.data < Ate && funcionarios.Any(y => y.Pis == x.pis)).Select(x => (Apontamento)x).ToList();
            
            foreach (var item in _listaMarcacoes)
            {
                if (!ExisteMarcacao(item.chaveUniqueMarc))
                {
                    item.IDFuncionario = funcionarios.Where(x => x.Pis == item.pis).Select(y => y.IDFuncionario).FirstOrDefault();
                    item.IDEmpresa = funcionarios.Where(x => x.Pis == item.pis).Select(y => y.IDEmpresa).FirstOrDefault();
                    _repSemiLimpo.InsertCommit(item);
                }
            }

            //TODO REGRA DE NEGOCIO COMPLEXA DE PAREAMENTO DOS REGISTROS

            // Foreach temporario para criar marcacoes
            foreach (var item in _listaMarcacoes)
            {
                var marcacaoLimpa = new MarcacaoPar()
                {
                    filaProcessoId = fila.filaProcessoId,
                    IDEmpresa = item.IDEmpresa,
                    IDFuncionario = item.IDFuncionario,
                    original = true,
                    entrada = item.data.AddHours(Convert.ToDouble(item.hora.Substring(0, 2))).AddMinutes(Convert.ToDouble(item.hora.Substring(3, 2)))
                };

                _repMarcacaoPar.InsertCommit(marcacaoLimpa);
            }

            fila.dataFim = DateTime.Now;
            fila.qtdLinhas = _listaMarcacoes.Count;
            fila.linhasProcessadas = _listaMarcacoes.Count;
            fila.linhasErro = 0;

            AtualizaProcessoFila(fila);

            return "";
        }

        private FilaProcesso InsereProcessoFila(FilaProcesso fila)
        {
            _repFila.InsertCommit(fila);
            return fila;
        }

        private void AtualizaProcessoFila(FilaProcesso fila)
        {
            _repFila.UpdateCommit(fila);
        }

        private void LimpaTabelas(string tipoProcesso, DateTime De, DateTime Ate, Empresa empresa, List<Funcionario> funcionarios)
        {
            switch (tipoProcesso)
            {
                case "Recalcular":
                    //_mcDestiono.[TABELA LIMPA NAO CRIADA].RemoveRange(); -- tabela limpa
                    //_mcDestiono.SaveChanges();
                    break;

                case "Reanalisar":
                    //var listaSemiLimpaRemover = _apontBusiness.ListApontamentoSemiLimpos().Where(x => x.data > De && x.data < Ate && funcionarios.Any(y => y.IDFuncionario == x.IDFuncionario && y.IDEmpresa == x.IDEmpresa)).ToList();
                    //_apontBusiness.DeleteRange(listaSemiLimpaRemover);

                    //_mcDestiono.[TABELA LIMPA NAO CRIADA].RemoveRange(); -- tabela limpa
                    //_mcDestiono.SaveChanges();
                    break;

                default:
                    break;
            }

        }

        public List<FilaProcesso> ListFila()
        {
            return _repFila.ListAll().Select(x => (FilaProcesso)x).ToList();
        }
        
        private bool ExisteMarcacao(string chaveUnica)
        {
            var marcacao = _repSemiLimpo.ListAll()
                                  .Any(x => x.chaveUniqueMarc == chaveUnica);

            if (marcacao)
                return true;
            else
                return false;
        }
    }
}
