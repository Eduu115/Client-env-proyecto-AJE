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
      <Navbar />
          <h1>Usuarios</h1>
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
  );
}

export default AdminGestionUsuarios;
