import Navbar from "../../components/Navbar";
import "./AdminCrearUsuario.css";
import { useNavigate } from "react-router-dom";
import { irAAdminInicio } from "../Redirects";

function AdminCrearUsuario() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <main className="crear-usuario-page">
        <div className="crear-usuario-header">
          <h1>CREACION DE USUARIOS</h1>
        </div>

        <div className="crear-usuario-main">
          <form className="crear-usuario-form">
            <div className="crear-row">
              <label htmlFor="nombre">Nombre</label>
              <input id="nombre" name="nombre" type="text" />
            </div>

            <div className="crear-row">
              <label htmlFor="apellidos">Apellidos</label>
              <input id="apellidos" name="apellidos" type="text" />
            </div>

            <div className="crear-row">
              <label htmlFor="username">Usuario</label>
              <input id="username" name="username" type="text" />
            </div>

            <div className="crear-row">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" />
            </div>

            <div className="crear-row">
              <label htmlFor="password">Contraseña</label>
              <input id="password" name="password" type="password" />
            </div>

            <div className="crear-row">
              <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
              <input
                id="fechaNacimiento"
                name="fecha_nacimiento"
                type="date"
              />
            </div>

            <div className="crear-row crear-row-full">
              <label htmlFor="direccion">Dirección</label>
              <input id="direccion" name="direccion" type="text" />
            </div>

            <div className="crear-row">
              <label htmlFor="perfil">Rol / Perfil</label>
              <select id="perfil" name="id_perfil">
                <option value="">Selecciona un rol</option>
                <option value="1">Admnistrador</option>
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
