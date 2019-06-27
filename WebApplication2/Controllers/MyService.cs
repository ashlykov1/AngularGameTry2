using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataService.Controllers
{
    public class MyService : IMyService
    {
        private MyDbContext context;

        public MyService(MyDbContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<MyClass>> GetClasses()
        {
            var list = await this.context.MyClasses.ToListAsync();
            return list;
        }

        public async Task<IEnumerable<MyClass>> UpdateClasses
            (IEnumerable<MyClass> classes,
             IEnumerable<int> delete)
        {
            try
            {
                foreach (var c in classes)
                {
                    var ent = await context.MyClasses.SingleOrDefaultAsync(e => e.Id == c.Id);

                    if (ent == null)
                    {
                        context.MyClasses.Attach(c);
                    }
                    else
                    {
                        ent.Name = c.Name;
                    }
                }
                this.context.MyClasses.RemoveRange(
                    await this.context.MyClasses.Where(e => delete.Contains(e.Id)).ToListAsync());
                await this.context.SaveChangesAsync();

                return await this.context.MyClasses.ToListAsync();
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
