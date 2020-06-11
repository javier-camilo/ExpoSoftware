﻿// <auto-generated />
using Datos;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Datos.Migrations
{
    [DbContext(typeof(ExpoSoftwareContext))]
    partial class ExpoSoftwareContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Entity.Area", b =>
                {
                    b.Property<string>("CodigoArea")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("NombreArea")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CodigoArea");

                    b.ToTable("Areas");
                });

            modelBuilder.Entity("Entity.Asignatura", b =>
                {
                    b.Property<string>("CodigoAsignatura")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("AreaAsignatura")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DescripcionAsignatura")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NombreAsignatura")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CodigoAsignatura");

                    b.ToTable("Asignaturas");
                });

            modelBuilder.Entity("Entity.Docente", b =>
                {
                    b.Property<string>("Identificacion")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Asignaturas")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Descripcion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nombre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Tipo")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Identificacion");

                    b.ToTable("Docentes");
                });

            modelBuilder.Entity("Entity.Estudiante", b =>
                {
                    b.Property<string>("Identificacion")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Asignatura")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Correo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nombre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Semestre")
                        .HasColumnType("int");

                    b.Property<string>("celular")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Identificacion");

                    b.ToTable("Estudiantes");
                });

            modelBuilder.Entity("Entity.Proyecto", b =>
                {
                    b.Property<string>("IdProyecto")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("CodigoAsignatura")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Estado")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IdentificacionDocente")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IdentificacionEstudiante")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Metodologia")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Resumen")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Titulo")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("IdProyecto");

                    b.ToTable("Proyectos");
                });
#pragma warning restore 612, 618
        }
    }
}
