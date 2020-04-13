using Entity;

namespace ExpoSoftware.Models
{
    public class AsignaturaInputModel
    {
        public string CodigoAsignatura { get; set; }
        public string NombreAsignatura { get; set; }
        public string AreaAsignatura { get; set; }
        public string DescripcionAsignatura { get; set; }
    }

        public class AsignaturaViewModel : AsignaturaInputModel
     {
        public AsignaturaViewModel()
        {

        }
        
        public AsignaturaViewModel(Asignatura asignatura)
        {
            CodigoAsignatura = asignatura.CodigoAsignatura;
            NombreAsignatura = asignatura.NombreAsignatura;
            AreaAsignatura = asignatura.AreaAsignatura;
            DescripcionAsignatura = asignatura.DescripcionAsignatura;

        }
    }

}