// importamos logout para usarlo si es necesario
import logout from "../utils/logout.js";
// importamos los symbol de perfiles
import { ROLES } from "../utils/perfilSymbols.js";

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
}


function isLogged() {
  return getCurrentUser() !== null;
}

function getUserPerfil() {
  const user = getCurrentUser();
  return user ? user.perfil.nombre : "GUEST";
}

export function logoutAndRedirect(navigate) {
  let respuesta = window.confirm("¿Estás seguro de que deseas cerrar sesión?");
  
  if (respuesta) {
    if (!isLogged()) {
      console.log("No hay ningún usuario logueado.");
      return;
    }
    
    console.log("Cerrando sesión...");
    logout();
    navigate('/');
  } else {
    console.log("Cierre de sesión cancelado.");
    alert("¡Me alegra que te quedes con nosotros!");
  }
}

export function irALogin(navigate) {

  if (isLogged()) {
    irAHome(navigate);
  } else {
    navigate('/login');
  }
}

export function irARegister(navigate) {
  navigate('/registro');
}

export function irAInicio(navigate) {
  navigate('/');
}

// 👇 Ahora obtiene el perfil dinámicamente
export function irAHome(navigate) {
  const perfil = getUserPerfil();
  console.log("Perfil del usuario:", perfil);
  
  switch (perfil) {
    case ROLES.ADMIN: 
      navigate('/admin/inicio');
      break;
    case ROLES.CLIENTE:
      navigate('/cliente/inicio');
      break;
    case ROLES.TRABAJADOR:
      navigate('/trabajador/inicio');
      break;
    case ROLES.JEFE:
      navigate('/jefe/inicio');
      break;
    default:
      irAInicio(navigate);
      break;
  }
}

export function loginAsGuest(navigate) {
  navigate("/cliente/inicio");
}

export function irAAdminInicio(navigate) {
  navigate("/admin/inicio");
}

export function irAAdminCrearUsuario(navigate) {
  navigate("/admin/crear-usuario");
}

export function irAAdminGestionUsuarios(navigate) {
  navigate("/admin/gestion-usuarios");
}