using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace ControlePonto.Repository.Base
{
    public class RepositoryOrigin<T> : IRepository<T> where T : class
    {
        ContextOrigin _context;
        DbSet<T> _dbSet;

        public RepositoryOrigin(ContextOrigin context)
        {
            _context = context;
            _dbSet = _context.Set<T>();
        }

        public T Get(int id)
        {
            return _dbSet.Find(id);
        }

        public void DeleteCommit(int id)
        {
            var entity = _dbSet.Find(id);
            _dbSet.Remove(entity);
            Commit();
        }

        public void Delete(int id)
        {
            var entity = _dbSet.Find(id);
            _dbSet.Remove(entity);
        }

        public void DeleteRange(ICollection<T> entityList)
        {
            _dbSet.RemoveRange(entityList);
            Commit();
        }

        public IQueryable<T> ListAll()
        {
            return _dbSet;
        }

        public void Insert(T entity)
        {
            try
            {
                _dbSet.Add(entity);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public T InsertCommit(T entity)
        {
            try
            {
                _dbSet.Add(entity);
                Commit();

                return entity;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Update(T entity)
        {
            try
            {
                _context.Entry(entity).State = EntityState.Modified;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void UpdateCommit(T entity)
        {
            try
            {
                _context.Entry(entity).State = EntityState.Modified;
                Commit();
                _context.Entry(entity).State = EntityState.Detached;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void UpdateCommitOnlyField<TProperty>(T entity, Expression<Func<T, TProperty>> property)
        {
            try
            {
                _dbSet.Attach(entity);

                _context.Entry(entity).Property(property).IsModified = true;

                Commit();

                _context.Entry(entity).State = EntityState.Detached;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void UpdateRange(ICollection<T> entityList)
        {
            _context.UpdateRange(entityList);
            Commit();
        }

        public IDbContextTransaction BeginTransaction()
        {
            return _context.Database.BeginTransaction();
        }

        public void Commit()
        {
            try
            {
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
