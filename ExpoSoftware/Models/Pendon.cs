using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ExpoSoftware.Models
{
    public class PendonImputModel
    {
        
        public string IdPendon { get; set; }
        [Required]
        public string Estado { get; set; }
        [Required]
        public string PendonPath { get; set; }
    }

    public class PendonViewModel : PendonImputModel
    {

    }
}
