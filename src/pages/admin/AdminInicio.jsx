import Navbar from "../../components/Navbar";
import "./AdminInicio.css";

function AdminInicio() {
  return (
    <div className="admin-menu">
      <div className="admin-header">
        <h1>MENU DE ADMINISTRACION</h1>
        <p>HOLA - NOMBRE (ADMIN)</p>
      </div>

      <div className="admin-content">
        <div className="admin-item">
          <div className="admin-item-image">
            <img
              src="/img/foto_landing1.png"
              alt="Acceso a creación de usuarios"
            />
          </div>

          <div className="admin-item-text">
            <p>ACCESO A CREACION USUARIOS</p>
          </div>
        </div>

        <div className="admin-item">
          <div className="admin-item-image">
            <img
              src="/img/foto_landing2.png"
              alt="Administrar usuarios"
            />
          </div>

          <div className="admin-item-text">
            <p>ADMINISTRAR USUARIOS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminInicio;
