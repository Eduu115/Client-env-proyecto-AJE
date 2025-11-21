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
  const [editUser, setEditUser] = useState(null);

// ------------------------------------------- FILTRTOS
  const [busqueda, setBusqueda] = useState("");
  const [filtroRol, setFiltroRol] = useState("");
  const [ordenamiento, setOrdenamiento] = useState("nombre");
  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");

  const usuariosFiltrados = usuarios
    .filter((usuario) => {
      // Filtro por búsqueda (nombre, apellidos o username)
      const terminoBusqueda = busqueda.toLowerCase();
      const coincideBusqueda = 
        (usuario.nombre || "").toLowerCase().includes(terminoBusqueda) ||
        (usuario.apellidos || "").toLowerCase().includes(terminoBusqueda) ||
        (usuario.username || "").toLowerCase().includes(terminoBusqueda);

      // Filtro por rol
      const coincideRol = filtroRol === "" || usuario.perfil?.idPerfil === Number(filtroRol);

      // Filtro por fecha de registro
      let coincideFecha = true;
      
      if (usuario.fechaRegistro) {
        const fechaUsuario = new Date(usuario.fechaRegistro);
        
        if (fechaDesde) {
          const desde = new Date(fechaDesde);
          coincideFecha = coincideFecha && fechaUsuario >= desde;
        }
        
        if (fechaHasta) {
          const hasta = new Date(fechaHasta);
          hasta.setHours(23, 59, 59, 999); // Incluir todo el día
          coincideFecha = coincideFecha && fechaUsuario <= hasta;
        }
      }
      return coincideBusqueda && coincideRol && coincideFecha;
    })
    .sort((a, b) => {
      // Ordenamiento
      if (ordenamiento === "nombre") {
        return a.nombre.localeCompare(b.nombre);
      } else if (ordenamiento === "email") {
        return a.email.localeCompare(b.email);
      } else if (ordenamiento === "rol") {
        return (a.perfil?.nombre || "").localeCompare(b.perfil?.nombre || "");
      } else if (ordenamiento === "fecha") {
        return new Date(b.fechaRegistro || 0) - new Date(a.fechaRegistro || 0);
      }
      return 0;
    });

  // limpiar
  const limpiarFiltros = () => {
    setBusqueda("");
    setFiltroRol("");
    setOrdenamiento("nombre");
    setFechaDesde("");
    setFechaHasta("");
  };

  // ----------------------------------------
  // CARGAMOS USERS
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
        // cargamos los datos
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        console.error("Error al cargar los usuarios:", error);
      }
    };

    cargarDatos();
  }, []);


  const handleEditClick = (usuario) => {
    setEditUser({ ...usuario });
  };

  const handleClosePopup = () => {
    setEditUser(null);
  };

  const handleChangeEdit = (e) => {
    const { name, value } = e.target;

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

  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    const original = usuarios.find((u) => u.username === editUser.username);

    if (!original) {
      console.error("No se encontró el usuario original en el estado");
      alert("Error interno: usuario no encontrado.");
      return;
    }

    const payload = {
      username: original.username,
      password: original.password,
      email: editUser.email,
      nombre: editUser.nombre,
      apellidos: editUser.apellidos,
      enabled: original.enabled,
      direccion: original.direccion,
      fechaRegistro: original.fechaRegistro,
      fechaNacimiento: original.fechaNacimiento,
      perfil: {
        ...(original.perfil || {}),
        idPerfil: editUser.perfil?.idPerfil
          ? Number(editUser.perfil.idPerfil)
          : original.perfil?.idPerfil,
      },
    };

    try {
      const response = await fetch(
        `http://localhost:9001/usuarios/actualizar/${editUser.username}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${btoa(`${user.username}:${clean}`)}`,
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("ERROR ACTUALIZAR - STATUS:", response.status);
        console.error("ERROR ACTUALIZAR - BODY:", errorText);
        throw new Error("Error al actualizar el usuario");
      }

      const actualizado = await response.json();


      setUsuarios((prev) =>
        prev.map((u) =>
          u.username === actualizado.username ? actualizado : u
        )
      );

      handleClosePopup();
      alert("Se actualizado el Usuario correctamente");
    } catch (error) {
      console.error("CATCH handleSubmitEdit:", error);
      alert("Error al actualizar usuario");
    }
  };

  const eliminado = async (username) => {
    const confirmar = window.confirm(`¿Eliminar usuario ${username}?`);
    if (!confirmar) return;

    try {
      const response = await fetch(
        `http://localhost:9001/usuarios/eliminar/${username}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Basic ${btoa(`${user.username}:${clean}`)}`,
          },
        }
      );

      const resultado = await response.json();

      if (resultado === 1) {
        setUsuarios((prev) => prev.filter((u) => u.username !== username));
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

      {/* BARRA DE FILTROS */}
        <div className="barra-filtros">
          {/* PPRIMERA FILA */}
          <div className="filtros-fila-principal">
            {/* Búsqueda */}
            <div className="filtro-grupo">
              <label className="filtro-label">
                Buscar por nombre o usuario
              </label>
              <input
                type="text"
                className="filtro-input"
                placeholder="Escribe para buscar..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>

            {/* Rol */}
            <div className="filtro-grupo">
              <label className="filtro-label">
                Filtrar por rol
              </label>
              <select
                className="filtro-select"
                value={filtroRol}
                onChange={(e) => setFiltroRol(e.target.value)}
              >
                <option value="">Todos los roles</option>
                <option value="1">ADMIN</option>
                <option value="2">JEFE</option>
                <option value="3">CLIENTE</option>
                <option value="4">TRABAJADOR</option>
              </select>
            </div>

            {/* Ordendando */}
            <div className="filtro-grupo">
              <label className="filtro-label">
                ⬍ Ordenar por
              </label>
              <select
                className="filtro-select"
                value={ordenamiento}
                onChange={(e) => setOrdenamiento(e.target.value)}
              >
                <option value="nombre">Nombre</option>
                <option value="email">Email</option>
                <option value="rol">Rol</option>
                <option value="fecha">Fecha de registro</option>
              </select>
            </div>

            {/* Limpiar */}
            <button
              className="btn-limpiar-filtros"
              onClick={limpiarFiltros}
            >
              Limpiar
            </button>
          </div>

          {/* Filtros de fecha */}
          <div className="filtros-fila-fecha">
            {/* Fecha Desde */}
            <div className="filtro-grupo">
              <label className="filtro-label">
                Desde
              </label>
              <input
                type="date"
                className="filtro-input"
                value={fechaDesde}
                onChange={(e) => setFechaDesde(e.target.value)}
              />
            </div>

            {/* Fecha Hasta */}
            <div className="filtro-grupo">
              <label className="filtro-label">
                Hasta
              </label>
              <input
                type="date"
                className="filtro-input"
                value={fechaHasta}
                onChange={(e) => setFechaHasta(e.target.value)}
              />
            </div>

            {/* Espacio vacio pa alinear todo */}
            <div></div>
          </div>

          {/* Contador  */}
          <div className="filtros-contador">
            Mostrando {usuariosFiltrados.length} de {usuarios.length} usuarios
            {(fechaDesde || fechaHasta) && (
              <span className="filtros-indicador-fecha">
                Filtrado por fecha: {fechaDesde || "inicio"} → {fechaHasta || "hoy"}
              </span>
            )}
          </div>
        </div>

      <section className="tablaAdmin">
        <div className="tablaAdmin-titulos">
          <div className="tablaAdmin-cuadro">ID</div>
          <div className="tablaAdmin-cuadro">NOMBRE/USER</div>
          <div className="tablaAdmin-cuadro">Correo</div>
          <div className="tablaAdmin-cuadro">ROL</div>
          <div className="tablaAdmin-cuadro">EDITAR</div>
          <div className="tablaAdmin-cuadro">ELIMINAR</div>
        </div>

        {usuarios.length === 0 ? (
          <p className="tablaAdmin-loading">Cargando usuarios...</p>
        ) : (
          usuariosFiltrados.map((usuario) => (
            <div className="tablaAdmin-contenido" key={usuario.username}>
              <div className="tablaAdmin-cuadro">{usuario.username}</div>
              <div className="tablaAdmin-cuadro">{usuario.nombre} {usuario.apellidos}</div>
              <div className="tablaAdmin-cuadro">{usuario.email}</div>
              <div className="tablaAdmin-cuadro">{usuario.perfil?.nombre || "Sin rol"}</div>
              <div className="tablaAdmin-cuadro"><button className="icon-editar" onClick={() => handleEditClick(usuario)}>✏️</button></div>
              <div className="tablaAdmin-cuadro"><button className="icon-eliminar" onClick={() => eliminado(usuario.username)}>Eliminar</button></div>
            </div>
          ))
        )}
      </section>

      {editUser && (
        <div className="popup-overlay">
          <div className="popup show">
            <h2>Editar usuario: {editUser.username}</h2>

            <form onSubmit={handleSubmitEdit} className="popup-form">
              <label>
                Nombre
                <input
                  name="nombre"
                  value={editUser.nombre || ""}
                  onChange={handleChangeEdit}
                />
              </label>

              <label>
                Apellidos
                <input
                  name="apellidos"
                  value={editUser.apellidos || ""}
                  onChange={handleChangeEdit}
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={editUser.email || ""}
                  onChange={handleChangeEdit}
                />
              </label>

              <label>
                Rol
                <select
                  name="idPerfil"
                  value={editUser.perfil?.idPerfil || ""}
                  onChange={handleChangeEdit}
                >
                  <option value="">-- Selecciona rol --</option>
                  <option value={1}>ADMIN</option>
                  <option value={2}>JEFE</option>
                  <option value={3}>CLIENTE</option>
                  <option value={4}>TRABAJADOR</option>
                </select>
              </label>

              <div className="popup-buttons">
                <button
                  type="button"
                  className="btn-secundario"
                  onClick={handleClosePopup}
                >
                  Cancelar
                </button>
                <button type="submit" className="btn-primario">
                  Guardar cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default AdminGestionUsuarios;
