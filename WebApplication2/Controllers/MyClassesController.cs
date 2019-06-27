using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DataService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MyClassesController : ControllerBase
    {
        private IMyService service;

        public MyClassesController(IMyService service)
        {
            this.service = service;
        }

        [HttpGet]
        public async Task<IEnumerable<MyClass>> GetList()
        {
            return await this.service.GetClasses();
        }

        [HttpPost]
        public async Task<IEnumerable<MyClass>> Save(Data<MyClass> data)
        {
            return await this.service.UpdateClasses(data.ToSave, data.ToDelete);
        }

        public class Data <T>
        {
            public IEnumerable<T> ToSave
            {
                get; set;
            }

            public IEnumerable<int> ToDelete { get; set; }
        }
    }
}