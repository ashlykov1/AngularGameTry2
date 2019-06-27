using System.Data.Entity;
using System.Threading.Tasks;

namespace DataService.Controllers
{
    public interface IMyDbContext 
     {
        DbSet<MyClass> MyClasses { get; set; }

        Task SaveChangesAsync();
    }
}