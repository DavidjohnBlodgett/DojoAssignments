using System.ComponentModel.DataAnnotations;

namespace TheWall.Models
{
    public class MessageVal : BaseEntity
    {   
        [Required]
        [MinLength(1)]
        public string content { get; set; }
    }
}