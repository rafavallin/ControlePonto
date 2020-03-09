using System;
using System.Linq;
using ControlePonto.DataObject.DTO;
using ControlePonto.DataObject.Entities;
using ControlePonto.Repository.Base;

namespace ControlePonto.Business
{
    public class DepartamentoBusiness
    {
        IRepository<DepartamentoMapping> _repository;

        public DepartamentoBusiness(IRepository<DepartamentoMapping> repository)
        {
            _repository = repository;

        }

        public Departamento GetDepartamento(int id)
        {
            try
            {
                return _repository.Get(id);
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao Pesquisar Departamento");
            }
        }

        public IQueryable<Departamento> ListDepartamentos(int[] empresas)
        {
            try
            {
                return _repository.ListAll()
                                  .Where(x => empresas.Contains(x.IDEmpresa))
                                  .Select(x => (Departamento)x);
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao Pesquisar Departamento");
            }
        }

        public void Insert(Departamento obj)
        {
            try
            {

                _repository.InsertCommit(obj);
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao Inserir Departamento");
            }
        }

        public void Update(Departamento obj)
        {
            try
            {
                _repository.UpdateCommit(obj);
            }
            catch (Exception ex)
            {

                throw new Exception("Erro ao Atualizar Departamento");
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
                throw new Exception("Erro ao Deletar Departamento");
            }
        }


    }
}
