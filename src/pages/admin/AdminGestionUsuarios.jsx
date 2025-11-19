import Navbar from "../../components/Navbar";
import "./AdminGestionUsuarios.css";
import { useEffect, useState } from "react";

function AdminGestionUsuarios() {
  // --------------------- LOAD USERS ---------------------
  // cargamos el user de LocalStorage
  const user = JSON.parse(localStorage.getItem("user"));
  const clean = user.password.replace("{noop}", "");

 // cargamos los usuaruios desde una API o base de datos
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const response = await fetch("http://localhost:9001/usuarios/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${btoa(`${user.username}:${clean}`)}`,
          },
        });
        // si la respuesta no es ok, lanzamos un error
        if (!response.ok) {
          throw new Error("Error al cargar los usuarios");
        }
        // cargamsoos los datos
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error("Error al cargar los usuarios:", error);
      }
    };

    cargarDatos();
  }, []); 

    const handleEditClick = (usuario) => {
      // abrimos el popup clonando el usuario
      setEditUser({ ...usuario });
    };
  
    const handleClosePopup = () => {
      setEditUser(null);
    };
  
    // cambios en el formulario del popup
    const handleChangeEdit = (e) => {
      const { name, value } = e.target;
  
      // caso especial: perfil.idPerfil (rol)
      if (name === "idPerfil") {
        setEditUser((prev) => ({
          ...prev,
          perfil: { ...(prev.perfil || {}), idPerfil: Number(value) },
        }));
      } else {
        setEditUser((prev) => ({
          ...prev,
          [name]: value,
        }));
      }
    };

  
  const eliminado = async (username) => {
    const confirmar = window.confirm(`¿Eliminar usuario ${username}?`);
    if (!confirmar) return;
  
    try {
      const response = await fetch(`http://localhost:9001/usuarios/eliminar/${username}`, {
        method: "DELETE",
        headers: {
          Authorization: `Basic ${btoa(`${user.username}:${clean}`)}`,
        },
      });
  
      const resultado = await response.json(); 
  
      if (resultado === 1) {
        setUsuarios(prev => prev.filter(u => u.username !== username));
      } else {
        alert("El usuario no existe.");
      }
    } catch (error) {
      console.error(error);
      alert("Error al eliminar usuario.");
    }
  };
  

  // -------------------------------------------------------

  // Renderizamos la tabla de usuarios

  return (
    <main className="admin-gestion-usuarios">
      <Navbar />
      <h1 className="titulo">Usuarios</h1>

      <section className="tablaAdmin">
        {/* Cabecera de la "tabla" */}
        <div className="tablaAdmin-header">
          <div className="tablaAdmin-cell">ID</div>
          <div className="tablaAdmin-cell">NOMBRE/USER</div>
          <div className="tablaAdmin-cell">Correo</div>
          <div className="tablaAdmin-cell">ROL</div>
          <div className="tablaAdmin-cell">EDITAR</div>
          <div className="tablaAdmin-cell">ELIMINAR</div>
        </div>

        {/* Filas de usuarios */}
        {usuarios.length === 0 ? (
          <p className="tablaAdmin-loading">Cargando usuarios...</p>
        ) : (
          usuarios.map((usuario) => (
            <div className="tablaAdmin-row" key={usuario.username}>
              <div className="tablaAdmin-cell">{usuario.username}</div>
              <div className="tablaAdmin-cell">{usuario.nombre} {usuario.apellidos}</div>
              <div className="tablaAdmin-cell">{usuario.email}</div>
              <div className="tablaAdmin-cell">{usuario.perfil?.nombre || "Sin rol"}</div> 
              <div className="tablaAdmin-cell"><button className="icon-button editar" onClick={() => edit(usuario)}>Editar</button></div>
              <div className="tablaAdmin-cell"><button className="icon-button eliminar" onClick={() => eliminado(usuario.username)}>Eliminar</button></div>
            </div>
          ))
        )}
      </section>
    </main>
  );
}

export default AdminGestionUsuarios;
