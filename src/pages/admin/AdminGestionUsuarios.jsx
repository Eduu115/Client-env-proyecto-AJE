import Navbar from "../../components/Navbar";
import "./AdminGestionUsuarios.css";

function AdminGestionUsuarios() {
  return (
    <>
      <Navbar />

      <main className="admin-gestion-usuarios">
            <h1>Usuarios</h1>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NOMBRE/USER</th>
                  <th>Correo</th>
                  <th>ROL</th>
                  <th>EDITAR</th>
                  <th>VER?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>admin1 o Carlos</td>
                  <td>carlos.perez@example.com</td>
                  <td>ADMIN</td>
                  <td>icono o lo que sea</td>
                  <td>icono o lo que sea</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>jefe1 o Laura</td>
                  <td>laura.garcia@example.com</td>
                  <td>JEFE</td>
                  <td>icono o lo que sea</td>
                  <td>icono o lo que sea</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>trabajador1 o Miguel</td>
                  <td>miguel.rodriguez@example.com</td>
                  <td>TRABAJADOR</td>
                  <td>icono o lo que sea</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
      </main>
    </>
  );
}

export default AdminGestionUsuarios;
