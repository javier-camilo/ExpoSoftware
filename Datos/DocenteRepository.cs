using System.Collections.Generic;
using System.Data.SqlClient;
using Entity;


namespace Datos
{
    public class DocenteRepository
    {
        private readonly SqlConnection _connection;

       

        public DocenteRepository(ConnectionManager connection)
        {
            _connection = connection._conexion;
        }


        public void Guardar(Docente docente)
        {
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = @"Insert Into Docente (Identificacion,Nombre,Descripcion,Tipo,Asignatura) 
                                        values (@Identificacion,@Nombre,@Descripcion,@Tipo,@Asignatura)";
                command.Parameters.AddWithValue("@Identificacion", docente.Identificacion);
                command.Parameters.AddWithValue("@Nombre", docente.Nombre);
                command.Parameters.AddWithValue("@Descripcion", docente.Descripcion);
                command.Parameters.AddWithValue("@Tipo", docente.Tipo);
                command.Parameters.AddWithValue("@Asignatura", docente.Asignaturas);
                var filas = command.ExecuteNonQuery();
            }
        }

        public List<Docente> ConsultarTodos()
        {
            SqlDataReader dataReader;
            List<Docente> docentes = new List<Docente>();
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "SELECT * FROM Docente;";
                dataReader = command.ExecuteReader();
                if (dataReader.HasRows)
                {
                    while (dataReader.Read())
                    {
                        Docente docente = DataReaderMap(dataReader);
                        docentes.Add(docente);
                    }
                }
            }
            return docentes;
        }


        public Docente BuscarPorIdentificacion(string identificacion)
        {
            SqlDataReader dataReader;
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "select * from Docente where Identificacion=@Identificacion";
                command.Parameters.AddWithValue("@Identificacion", identificacion);
                dataReader = command.ExecuteReader();
                dataReader.Read();
                return DataReaderMap(dataReader);
            }
        }


        private Docente DataReaderMap(SqlDataReader dataReader)
        {
            if (!dataReader.HasRows) return null;

            Docente docente = new Docente();

            docente.Identificacion = (string)dataReader["Identificacion"];
            docente.Nombre = (string)dataReader["Nombre"];
            docente.Descripcion = (string)dataReader["Descripcion"];
            docente.Tipo = (string)dataReader["Tipo"];
            docente.Asignaturas = (string)dataReader["Asignatura"];

            return docente;

        }

        public void Eliminar(Docente docente)
        {
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "Delete from Docente where Identificacion=@Identificacion";
                command.Parameters.AddWithValue("@CodigoAsignatura", docente.Identificacion);
                command.ExecuteNonQuery();
            }
        }

        public void Modificar(Docente docente)
        {
            using (var command = _connection.CreateCommand())
            {
                command.CommandText = "update Docente set Identificacion=@Identidificacion Nombre=@Nombre,Descripcion=@Descripcion, Tipo=@Tipo, Asignaturas=@Asignaturas where Identificacion=@Identificacion";
                command.Parameters.AddWithValue("@Identificacion", docente.Identificacion);
                command.Parameters.AddWithValue("@Nombre", docente.Nombre);
                command.Parameters.AddWithValue("@Descripcion", docente.Descripcion);
                command.Parameters.AddWithValue("@Tipo", docente.Tipo);
                command.Parameters.AddWithValue("@Docentes", docente.Asignaturas);
                command.ExecuteNonQuery();
            }
        }

    }
}
