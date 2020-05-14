using System.Collections.Generic;
using System.Data.SqlClient;
using Entity;

namespace Datos
{
    class EstudianteRepository
    {
        private readonly SqlConnection _connection;



        public EstudianteRepository(ConnectionManager connection)
        {
            _connection = connection._conexion;
        }

        public void Guardar(Estudiante estudiante)
        {
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = @"Insert Into Estudiante (Identificacion,Nombre,Correo,Asignatura,Semestre) 
                                        values (@Identificacion,@Nombre,@Correo,@Asignatura,@Semestre)";
                command.Parameters.AddWithValue("@Identificacion", estudiante.Identificacion);
                command.Parameters.AddWithValue("@Nombre", estudiante.Nombre);
                command.Parameters.AddWithValue("@Correo", estudiante.Correo);
                command.Parameters.AddWithValue("@Asignatura", estudiante.Asignatura);
                command.Parameters.AddWithValue("@Semestre", estudiante.Semestre);
                var filas = command.ExecuteNonQuery();
            }
        }

        public List<Estudiante> ConsultarTodos()
        {
            SqlDataReader dataReader;
            List<Estudiante> estudiantes = new List<Estudiante>();
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "SELECT * FROM Estudiante;";
                dataReader = command.ExecuteReader();
                if (dataReader.HasRows)
                {
                    while (dataReader.Read())
                    {
                        Estudiante estudiante = DataReaderMap(dataReader);
                        estudiantes.Add(estudiante);
                    }
                }
            }
            return estudiantes;
        }

        public Estudiante BuscarPorIdentificacion(string identificacion)
        {
            SqlDataReader dataReader;
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "select * from Estudiante where Identificacion=@Identificacion";
                command.Parameters.AddWithValue("@Identificacion", identificacion);
                dataReader = command.ExecuteReader();
                dataReader.Read();
                return DataReaderMap(dataReader);
            }
        }


        private Estudiante DataReaderMap(SqlDataReader dataReader)
        {
            if (!dataReader.HasRows) return null;

            Estudiante estudiante = new Estudiante();

            estudiante.Identificacion = (string)dataReader["Identificacion"];
            estudiante.Nombre = (string)dataReader["Nombre"];
            estudiante.Correo = (string)dataReader["Descripcion"];
            estudiante.Asignatura = (string)dataReader["Asignatura"];
            estudiante.Semestre = (int)dataReader["Tipo"];

            return estudiante;

        }

        public void Eliminar(Estudiante estudiante)
        {
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "Delete from Estudiante where Identificacion=@Identificacion";
                command.Parameters.AddWithValue("@Identificacion", estudiante.Identificacion);
                command.ExecuteNonQuery();
            }
        }

        public void Modificar(Estudiante estudiante)
        {
            using (var command = _connection.CreateCommand())
            {
                command.Parameters.AddWithValue("@Identificacion", estudiante.Identificacion);
                command.Parameters.AddWithValue("@Nombre", estudiante.Nombre);
                command.Parameters.AddWithValue("@Correo", estudiante.Correo);
                command.Parameters.AddWithValue("@Asignatura", estudiante.Asignatura);
                command.Parameters.AddWithValue("@Semestre", estudiante.Semestre);
                command.ExecuteNonQuery();
            }
        }
    }
}
