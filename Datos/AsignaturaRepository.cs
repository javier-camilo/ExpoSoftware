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

        public List<Asignatura> ConsultarTodos()
        {
            SqlDataReader dataReader;
            List<Asignatura> asignaturas = new List<Asignatura>();
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "Select * from Asignatura ";
                dataReader = command.ExecuteReader();
                if (dataReader.HasRows)
                {
                    while (dataReader.Read())
                    {
                        Asignatura asignatura = DataReaderMap(dataReader);
                        asignaturas.Add(asignatura);
                    }
                }
            }
            return asignaturas;
        }

        public Asignatura BuscarPorIdentificacion(string identificacion)
        {
            SqlDataReader dataReader;
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "select * from Asignatura where CodigoAsignatura=@CodigoAsignatura";
                command.Parameters.AddWithValue("@CodigoAsignatura", identificacion);
                dataReader = command.ExecuteReader();
                dataReader.Read();
                return DataReaderMap(dataReader);
            }
        }

        
       private Asignatura DataReaderMap(SqlDataReader dataReader)
        {
            if(!dataReader.HasRows) return null;

            Asignatura asignatura = new Asignatura();

            asignatura.CodigoAsignatura = (string)dataReader["CodigoAsignatura"];
            
            asignatura.NombreAsignatura = (string)dataReader["NombreAsignatura"];

            
            asignatura.AreaAsignatura = (string)dataReader["AreaAsignatura"];

            
            asignatura.DescripcionAsignatura = (string)dataReader["DescripcionAsignatura"];

            return asignatura;
            
         }


        public void Eliminar(Asignatura asignatura)
        {
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "Delete from Asignatura where CodigoAsignatura=@CodigoAsignatura";
                command.Parameters.AddWithValue("@CodigoAsignatura", asignatura.CodigoAsignatura);
                command.ExecuteNonQuery();
            }
        }

         public void Modificar( Asignatura asignatura)
        {
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "update Asignatura set NombreAsignatura=@NombreAsignatura, AreaAsignatura=@AreaAsignatura, DescripcionAsignatura=@DescripcionAsignatura where CodigoAsignatura=@CodigoAsignatura";
                command.Parameters.AddWithValue("@CodigoAsignatura", asignatura.CodigoAsignatura);
                command.Parameters.AddWithValue("@NombreAsignatura", asignatura.NombreAsignatura);
                command.Parameters.AddWithValue("@AreaAsignatura", asignatura.AreaAsignatura);
                command.Parameters.AddWithValue("@DescripcionAsignatura", asignatura.DescripcionAsignatura);
                command.ExecuteNonQuery();
            }
        }

        
    }
}