using System.ComponentModel.DataAnnotations;

namespace TheWall.Models
{
    public class CommentVal : BaseEntity
    {   
        public int message_id {get; set; }

        [Required]
        [MinLength(1)]
        public string content { get; set; }
    }
}