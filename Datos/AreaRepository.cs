using Entity;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace Datos
{
    public class AreaRepository
    {

        
         private readonly SqlConnection _connection;

         public AreaRepository(ConnectionManager connection)
        {
            _connection = connection._conexion;
        }


        public void Guardar(Area area)
        {
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = @"Insert Into Area (CodigoArea,NombreArea) 
                                        values (@CodigoArea,@NombreArea)";
                command.Parameters.AddWithValue("@CodigoArea", area.CodigoArea);
                command.Parameters.AddWithValue("@NombreArea", area.NombreArea);
                var filas = command.ExecuteNonQuery();
            }

        }


        public Area BuscarPorIdentificacion(string identificacion)
        {
            SqlDataReader dataReader;

            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "select * from Area where CodigoArea=@CodigoArea";
                command.Parameters.AddWithValue("@CodigoArea", identificacion);
                dataReader = command.ExecuteReader();
                dataReader.Read();

                return DataReaderMap(dataReader);

            }
        }



        private Area DataReaderMap(SqlDataReader dataReader)
        {
            if(!dataReader.HasRows) return null;

            Area area = new Area();

            area.CodigoArea = (string)dataReader["CodigoArea"];
            
            area.NombreArea = (string)dataReader["NombreArea"];

            return area;
            
         }



        
    }
}