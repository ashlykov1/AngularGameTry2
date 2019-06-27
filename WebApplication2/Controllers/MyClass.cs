using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataService.Controllers
{
    [Table("MyClass", Schema = "dbo")]
    public class MyClass
    {
        [Column("Id",TypeName = "int"), DatabaseGenerated(DatabaseGeneratedOption.Identity), Key]
        public int Id { get; set; }

        [Column("Name")]
        public string Name { get; set; }
    }
}