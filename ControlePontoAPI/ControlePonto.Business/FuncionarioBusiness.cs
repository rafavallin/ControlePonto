using System;
using System.Linq;
using ControlePonto.DataObject.DTO;
using ControlePonto.DataObject.Entities;
using ControlePonto.Repository.Base;

namespace ControlePonto.Business
{
    public class FuncionarioBusiness
    {
        IRepository<FuncionarioMapping> _repository;

        public FuncionarioBusiness(IRepository<FuncionarioMapping> repository)
        {
            _repository = repository;

        }

        public Funcionario GetFuncionario(int id)
        {
            try
            {
                return _repository.Get(id);
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao Pesquisar Funcionario");
            }
        }

        public IQueryable<Funcionario> ListFuncionarios(long[] setores, long[] departamentos)
        {
            try
            {
                return _repository.ListAll().Where(x => (setores.Contains(x.IDSetor))
                                            && (!x.IDDepartamento.HasValue
                                            || departamentos.Contains(x.IDDepartamento.Value)))
                                            .Select(x => (Funcionario)x);
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao Pesquisar Funcionario");
            }
        }

        public IQueryable<Funcionario> ListFuncionarios()
        {
            try
            {
                return _repository.ListAll().Select(x => (Funcionario)x);
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao Pesquisar Funcionario");
            }
        }


        public void Insert(Funcionario obj)
        {
            try
            {

                _repository.InsertCommit(obj);
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao Inserir Funcionario");
            }
        }

        public void Update(Funcionario obj)
        {
            try
            {
                _repository.UpdateCommit(obj);
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao Atualizar Funcionario");
            }
        }

        public void Delete(int id)
        {
            try
            {
                _repository.DeleteCommit(id);
            }
            catch (Exception ex)
            {
                throw new Exception("Erro ao Deletar Funcionario");
            }
        }
    }
}
