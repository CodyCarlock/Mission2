using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication2.Models
{
    public class calcModel
    {
        //requires a value to be input in this field 
        [Required]
        
        public float asmnt { get; set; }
        public float gp { get; set; }
        public float qz { get; set; }
        public float ex { get; set; }
        public float itx { get; set; }

    }
}
