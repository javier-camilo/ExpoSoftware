using Microsoft.EntityFrameworkCore.Migrations;

namespace Datos.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Areas",
                columns: table => new
                {
                    CodigoArea = table.Column<string>(nullable: false),
                    NombreArea = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Areas", x => x.CodigoArea);
                });

            migrationBuilder.CreateTable(
                name: "Asignaturas",
                columns: table => new
                {
                    CodigoAsignatura = table.Column<string>(nullable: false),
                    NombreAsignatura = table.Column<string>(nullable: true),
                    AreaAsignatura = table.Column<string>(nullable: true),
                    DescripcionAsignatura = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Asignaturas", x => x.CodigoAsignatura);
                });

            migrationBuilder.CreateTable(
                name: "AspectoEvaluars",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Pregunta = table.Column<string>(nullable: true),
                    Valor = table.Column<double>(nullable: false),
                    RefRubrica = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspectoEvaluars", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Docentes",
                columns: table => new
                {
                    Identificacion = table.Column<string>(nullable: false),
                    Nombre = table.Column<string>(nullable: true),
                    Descripcion = table.Column<string>(nullable: true),
                    Tipo = table.Column<string>(nullable: true),
                    Asignaturas = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Docentes", x => x.Identificacion);
                });

            migrationBuilder.CreateTable(
                name: "Estudiantes",
                columns: table => new
                {
                    Identificacion = table.Column<string>(nullable: false),
                    Nombre = table.Column<string>(nullable: true),
                    Correo = table.Column<string>(nullable: true),
                    celular = table.Column<string>(nullable: true),
                    Asignatura = table.Column<string>(nullable: true),
                    Semestre = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Estudiantes", x => x.Identificacion);
                });

            migrationBuilder.CreateTable(
                name: "Proyectos",
                columns: table => new
                {
                    IdProyecto = table.Column<string>(nullable: false),
                    Titulo = table.Column<string>(nullable: true),
                    Resumen = table.Column<string>(nullable: true),
                    Metodologia = table.Column<string>(nullable: true),
                    Estado = table.Column<string>(nullable: true),
                    CodigoAsignatura = table.Column<string>(nullable: true),
                    IdentificacionEstudiante = table.Column<string>(nullable: true),
                    IdentificacionDocente = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Proyectos", x => x.IdProyecto);
                });

            migrationBuilder.CreateTable(
                name: "Rubricas",
                columns: table => new
                {
                    IdRubrica = table.Column<string>(nullable: false),
                    Titulo = table.Column<string>(nullable: true),
                    CodigoArea = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rubricas", x => x.IdRubrica);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Areas");

            migrationBuilder.DropTable(
                name: "Asignaturas");

            migrationBuilder.DropTable(
                name: "AspectoEvaluars");

            migrationBuilder.DropTable(
                name: "Docentes");

            migrationBuilder.DropTable(
                name: "Estudiantes");

            migrationBuilder.DropTable(
                name: "Proyectos");

            migrationBuilder.DropTable(
                name: "Rubricas");
        }
    }
}
