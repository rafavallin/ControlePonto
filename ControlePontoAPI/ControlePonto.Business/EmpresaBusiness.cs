using System;
using System.Linq;
using ControlePonto.DataObject.DTO;
using ControlePonto.DataObject.Entities;
using ControlePonto.Repository.Base;

namespace ControlePonto.Business
{
    public class EmpresaBusiness
    {
        IRepository<EmpresaMapping> _repository;

        public EmpresaBusiness(IRepository<EmpresaMapping> repository)
        {
            _repository = repository;

        }

        public Empresa GetEmpresa(int id)
        {
            try
            {
                return _repository.Get(id);
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao Pesquisar Empresa");
            }
        }

        public IQueryable<Empresa> ListEmpresas()
        {
            try
            {
                return _repository.ListAll().Select(x => (Empresa)x);
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao Pesquisar Empresa");
            }
        }

        public void Insert(Empresa obj)
        {
            try
            {

                _repository.InsertCommit(obj);
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao Inserir Empresa");
            }
        }

        public void Update(Empresa obj)
        {
            try
            {
                _repository.UpdateCommit(obj);
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao Atualizar Empresa");
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
                throw new Exception("Erro ao Deletar Empresa");
            }
        }
    }
}
