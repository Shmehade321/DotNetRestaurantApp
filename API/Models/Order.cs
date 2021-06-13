using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Order
    {
        [Key]
        public long Id { get; set; }
        public string OrderNumber { get; set; }
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
        public string PaymentMethod { get; set; }
        public double Total { get; set; }
        public List<OrderDetail> OrderDetails { get; set; }
    }
}



