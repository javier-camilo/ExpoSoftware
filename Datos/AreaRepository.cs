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


      public List<Area> ConsultarTodos()
        {
            SqlDataReader dataReader;
            List<Area> areas = new List<Area>();
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "Select * from Area";
                dataReader = command.ExecuteReader();
                if (dataReader.HasRows)
                {
                    while (dataReader.Read())
                    {
                        Area area = DataReaderMap(dataReader);
                        areas.Add(area);
                    }
                }
            }
            return areas;
        }


        private Area DataReaderMap(SqlDataReader dataReader)
        {
            if(!dataReader.HasRows) return null;

            Area area = new Area();

            area.CodigoArea = (string)dataReader["CodigoArea"].ToString();
            
            area.NombreArea = (string)dataReader["NombreArea"];

            return area;
            
         }


         
         public void Modificar(Area area)
        {
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "update Area set NombreArea=@NombreArea where CodigoArea=@CodigoArea";

                command.Parameters.AddWithValue("@CodigoArea", area.CodigoArea);
                
                command.Parameters.AddWithValue("@NombreArea", area.NombreArea);

                command.ExecuteNonQuery();
            }
        }



        
    }
}