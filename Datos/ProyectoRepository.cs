using System.Collections.Generic;
using System.Data.SqlClient;
using Entity;



namespace Datos
{
    public class ProyectoRepository
    {

        private readonly SqlConnection _connection;

         public ProyectoRepository(ConnectionManager connection)
        {
            _connection = connection._conexion;
        }


        public void Guardar(Proyecto proyecto)
        {
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = @"Insert Into Proyecto (IdProyecto,Titulo,Resumen,Metodologia,Estado,CodigoAsignatura,IdentificacionEstudiante,IdentificacionDocente) 
                                        values (@IdProyecto,@Titulo,@Resumen,@Metodologia,@CodigoAsignatura,@IdentificacionEstudiante,@IdentificacionDocente)";
                command.Parameters.AddWithValue("@IdProyecto", proyecto.IdProyecto);
                command.Parameters.AddWithValue("@Titulo",proyecto.Titulo );
                command.Parameters.AddWithValue("@Resumen",proyecto.Resumen );
                command.Parameters.AddWithValue("@Metodologia",proyecto.Metodologia );
                command.Parameters.AddWithValue("@CodigoAsignatura",proyecto.CodigoAsignatura);
                command.Parameters.AddWithValue("@IdentificacionEstudiante",proyecto.IdentificacionEstudiante);
                command.Parameters.AddWithValue("@IdentificacionDocente",proyecto.IdentificacionDocente);
                var filas = command.ExecuteNonQuery();
            }
        }


        public Proyecto BuscarPorIdentificacion(string identificacion)
        {
            SqlDataReader dataReader;
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "select * from Proyecto where IdProyecto=@IdProyecto";
                command.Parameters.AddWithValue("@IdProyecto", identificacion);
                dataReader = command.ExecuteReader();
                dataReader.Read();
                return DataReaderMap(dataReader);
            }
        }


        private Proyecto DataReaderMap(SqlDataReader dataReader)
        {

            if (!dataReader.HasRows) return null;


            Proyecto proyecto = new Proyecto();

            proyecto.IdProyecto = (string)dataReader["IdProyecto"];
            
            proyecto.Titulo = (string)dataReader["Titulo"];

            proyecto.Resumen = (string)dataReader["Resumen"];

            
            proyecto.Metodologia = (string)dataReader["Metodologia"];

            
            proyecto.Estado = (string)dataReader["Estado"];

            
            proyecto.CodigoAsignatura = (string)dataReader["CodigoAsignatura"];

            
            proyecto.IdentificacionEstudiante = (string)dataReader["IdentificacionEstudiante"];

            
            proyecto.IdentificacionDocente = (string)dataReader["IdentificacionDocente"];

            return proyecto;

        }
        


        public List<Proyecto> ConsultarTodos()
        {
            SqlDataReader dataReader;
            List<Proyecto> proyectos = new List<Proyecto>();
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "SELECT * FROM Proyecto;";
                dataReader = command.ExecuteReader();
                if (dataReader.HasRows)
                {
                    while (dataReader.Read())
                    {
                        Proyecto proyecto = DataReaderMap(dataReader);
                        proyectos.Add(proyecto);
                    }
                }
            }
            return proyectos;
        }


        public void ModificarEstado(Proyecto proyecto)
        {
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "update Proyecto set Estado=@Estado where IdProyecto=@IdProyecto";
                command.Parameters.AddWithValue("@IdProyecto", proyecto.IdProyecto);
                command.Parameters.AddWithValue("@Estado", proyecto.Estado);
                command.ExecuteNonQuery();
            }
        }


        
        
    }
}