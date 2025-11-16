import Navbar from "../../components/Navbar";
import "./AdminGestionUsuarios.css";

function AdminGestionUsuarios() {
  return (
    <>
      <Navbar />
      <main className="admin-gestion-usuarios">
                <h1 class="titulo">Usuarios</h1>
          <table class="tablaAdmin">
            <thead>
              <tr>
                <th>ID</th>
                <th>NOMBRE/USER</th>
                <th>Correo</th>
                <th>ROL</th>
                <th>EDITAR</th>
                <th>ELIMINAR</th>
              </tr>
            </thead>
            <tbody>
              {/* Ejemplo de tabla de usuarios */}
              {usuarios.length === 0 ? (  /* Si no carga nada imprimimos esto */
                <p>Cargando usuarios...</p>
              ) : (
                usuarios.map((usuario) => ( /* Si hay usuarios los mapeamos (como un foreach)*/
                  <tr key={usuario.id}>
                    <td>{usuario.id}</td>
                    <td>{usuario.name} o {usuario.username}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.role}</td>
                    <td>icono o lo que sea</td>
                    <td>icono o lo que sea</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
      </main>
    </>
  );
}

export default AdminGestionUsuarios;
