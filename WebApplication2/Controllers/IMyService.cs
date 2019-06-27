using System.Collections.Generic;
using System.Threading.Tasks;

namespace DataService.Controllers
{
    public interface IMyService
    {
        Task<IEnumerable<MyClass>> GetClasses();
        Task<IEnumerable<MyClass>> UpdateClasses(IEnumerable<MyClass> classes, IEnumerable<int> delete);
    }
}