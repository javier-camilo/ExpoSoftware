using Entity;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace Datos
{
    public class AsignaturaRepository
    {

         private readonly SqlConnection _connection;

         public AsignaturaRepository(ConnectionManager connection)
        {
            _connection = connection._conexion;
        }


        public void Guardar(Asignatura asignatura)
        {
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = @"Insert Into Asignatura (CodigoAsignatura,NombreAsignatura,AreaAsignatura,DescripcionAsignatura) 
                                        values (@CodigoAsignatura,@NombreAsignatura,@AreaAsignatura,@DescripcionAsignatura)";
                command.Parameters.AddWithValue("@CodigoAsignatura", asignatura.CodigoAsignatura);
                command.Parameters.AddWithValue("@NombreAsignatura", asignatura.NombreAsignatura);
                command.Parameters.AddWithValue("@AreaAsignatura", asignatura.AreaAsignatura);
                command.Parameters.AddWithValue("@DescripcionAsignatura", asignatura.DescripcionAsignatura);
                var filas = command.ExecuteNonQuery();
            }
        }

        
    }
}