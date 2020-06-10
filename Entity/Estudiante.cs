
using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Estudiante
    {
        
        [Key]
        public string IdEstudiante { get; set; }

        public string NombreCompleto { get; set; }

        public string Correo { get; set; }

        public string Celular { get; set; }

        public string CodigoAsignatura { get; set; }


    }
}