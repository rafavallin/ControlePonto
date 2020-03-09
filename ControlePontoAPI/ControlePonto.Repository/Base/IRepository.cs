using Microsoft.EntityFrameworkCore.Storage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace ControlePonto.Repository.Base
{
    public interface IRepository<T> where T : class
    {
        IQueryable<T> ListAll();
        T Get(int id);
        void Insert(T entity);
        T InsertCommit(T entity);
        void Update(T entity);
        void UpdateCommit(T entity);
        void UpdateRange(ICollection<T> entityList);
        void Delete(int id);
        void DeleteCommit(int id);
        void DeleteRange(ICollection<T> entityList);
        IDbContextTransaction BeginTransaction();
        void Commit();
        void UpdateCommitOnlyField<TProperty>(T entity, Expression<Func<T, TProperty>> property);
    }
}
