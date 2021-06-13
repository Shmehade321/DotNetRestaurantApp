using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class OrderDetail
    {
        [Key]
        public long Id { get; set; }
        public long OrderId { get; set; }
        public Order Order { get; set; }
        public int FoodItemId { get; set; }
        public FoodItem FoodItem { get; set; }
        public double FoodItemPrice { get; set; }
        public int Quantity { get; set; }
    }
}