using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheWall.Models
{
    public class Message : BaseEntity
    {   
        [Key]
        public int messageid { get; set; }
        public int userid { get; set; }
        public string content { get; set; }
        public List<Comment> comments { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime created_at { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime updated_at { get; set; }

        public User author { get; set; }

        public Message() {
            comments = new List<Comment>();
        }
    }
}