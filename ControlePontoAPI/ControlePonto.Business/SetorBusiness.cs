using System;
using System.Linq;
using ControlePonto.DataObject.DTO;
using ControlePonto.DataObject.Entities;
using ControlePonto.Repository.Base;

namespace ControlePonto.Business
{
    public class SetorBusiness
    {

        IRepository<SetorMapping> _repository;

        public SetorBusiness(IRepository<SetorMapping> repository)
        {
            _repository = repository;

        }

        public Setor GetSetor(int id)
        {
            try
            {
                return _repository.Get(id);
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao Pesquisar Setor");
            }
        }

        public IQueryable<Setor> ListSetores(int[] empresas)
        {
            try
            {
                return _repository.ListAll()
                                  .Where(x => empresas.Contains(x.IDEmpresa))
                                  .Select(x => (Setor)x);
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao Pesquisar Setor");
            }
        }

        public void Insert(Setor obj)
        {
            try
            {

                _repository.InsertCommit(obj);
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao Inserir Setor");
            }
        }

        public void Update(Setor obj)
        {
            try
            {
                _repository.UpdateCommit(obj);
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao Atualizar Setor");
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
                throw new Exception("Erro ao Deletar Setor");
            }
        }

    }
}
