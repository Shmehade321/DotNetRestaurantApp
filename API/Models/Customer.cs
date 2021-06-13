using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Customer
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}