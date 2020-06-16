using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Pendon
    {
        [Key]
        public string IdPendon { get; set; }

        public string Estado { get; set; }

        public string PendonPath { get; set; }
    }
}
