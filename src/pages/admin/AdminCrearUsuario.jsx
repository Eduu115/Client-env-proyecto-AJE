import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { irAAdminInicio } from "../Redirects";
import { useState } from "react";
import "./AdminCrearUsuario.css";

function AdminCrearUsuario() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  console.log(user)

  if (!user) navigate("/inicio");

  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    username: "",
    email: "",
    password: "",
    fecha_nacimiento: "",
    direccion: "",
    id_perfil: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.id_perfil) {
      alert("Debes seleccionar un rol.");
      return;
    }

    try {

      const clean = user.password.replace('{noop}', '');

      const response = await fetch("http://localhost:9001/usuarios/registro/admin", {
        method: "POST",
        headers: {
          'Authorization': `Basic ${btoa(`${user.username}:${clean}`)}`,
          "Content-Type": "application/json"
        },
        body: 
          JSON.stringify({
            username: form.username,
            nombre: form.nombre,
            apellidos: form.apellidos,
            email: form.email,
            password: form.password,
            fechaNacimiento: form.fecha_nacimiento,
            direccion: form.direccion,
            enabled: 1,
            perfil: {
              idPerfil: Number(form.id_perfil)
            }
          })
      });

      if (!response.ok) {
        alert("Error al crear usuario");
        return;
      }

      alert("Usuario creado correctamente");
    } catch (error) {
      console.error("Error creando usuario:", error);
      alert("Error inesperado");
    }
  };

  return (
    <>
      <Navbar />

      <main className="crear-usuario-page">
        <div className="crear-usuario-header">
          <h1>CREACIÓN DE USUARIOS</h1>
        </div>

        <div className="crear-usuario-main">
          <form className="crear-usuario-form" onSubmit={handleSubmit}>

            <div className="crear-row">
              <label htmlFor="nombre">Nombre</label>
              <input id="nombre" name="nombre" type="text" onChange={handleChange} />
            </div>

            <div className="crear-row">
              <label htmlFor="apellidos">Apellidos</label>
              <input id="apellidos" name="apellidos" type="text" onChange={handleChange} />
            </div>

            <div className="crear-row">
              <label htmlFor="username">Usuario</label>
              <input id="username" name="username" type="text" onChange={handleChange} />
            </div>

            <div className="crear-row">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" onChange={handleChange} />
            </div>

            <div className="crear-row">
              <label htmlFor="password">Contraseña</label>
              <input id="password" name="password" type="password" onChange={handleChange} />
            </div>

            <div className="crear-row">
              <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
              <input id="fechaNacimiento" name="fecha_nacimiento" type="date" onChange={handleChange} />
            </div>

            <div className="crear-row crear-row-full">
              <label htmlFor="direccion">Dirección</label>
              <input id="direccion" name="direccion" type="text" onChange={handleChange} />
            </div>

            <div className="crear-row">
              <label htmlFor="perfil">Rol / Perfil</label>
              <select id="perfil" name="id_perfil" onChange={handleChange}>
                <option value="1">Selecciona un rol</option>
                <option value="1">Administrador</option>
                <option value="2">Jefe</option>
                <option value="3">Trabajador</option>
                <option value="4">Cliente</option>
              </select>
            </div>

            <button type="submit" className="crear-button">
              Crear usuario
            </button>
          </form>
        </div>

        <div className="boton-ir-atras">
          <button
            type="button"
            className="crear-usuario-back-button"
            onClick={() => irAAdminInicio(navigate)}
          >
            ← Volver al menú admin
          </button>
        </div>
      </main>
    </>
  );
}

export default AdminCrearUsuario;
