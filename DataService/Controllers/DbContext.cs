using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataService.Controllers
{

    public class MyDbContext : DbContext
    {

        public MyDbContext(DbContextOptions<MyDbContext> opt) : base(opt)
        {
        }

        public virtual DbSet<MyClass> MyClasses { get;set;}
    }
}
