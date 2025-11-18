import Navbar from "../../components/Navbar";
import "./AdminGestionUsuarios.css";
import { useEffect, useState } from "react";

function AdminGestionUsuarios() {
  // --------------------- LOAD USERS ---------------------
  // cargamos el user de LocalStorage
  const user = JSON.parse(localStorage.getItem('user'));

  // cargamos los usuaruios desde una API o base de datos
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const response = await fetch('localhost:9001/usuarios/', { /* HAY QUE ESTAR LOGUEADO COMO A */
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa(`${user.username}:${user.password}`)}` // credenciales hardcodeadas por ahora
          }
        });
        // si la respuesta no es ok, lanzamos un error
        if (!response.ok) {
          throw new Error('Error al cargar los usuarios');
        }
        // cargamsoos los datos
        const data = await response.json();
        setUsuarios(data);
      
      } catch (error) {
        console.error('Error al cargar los usuarios:', error);
      }
    };
    cargarDatos();
  }, []);
  // -------------------------------------------------------

  // Renderizamos la tabla de usuarios
  
  return (
      <main className="admin-gestion-usuarios">
        <h1 className="titulo"> Usuarios</h1>
            <table>
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
  );
}

export default AdminGestionUsuarios;

