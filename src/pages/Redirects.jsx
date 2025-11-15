// importamos logout para usarlo si es necesario
import logout from "../utils/logout.js";
// importamos los symbol de perfiles
import { ROLES } from "../utils/perfilSymbols.js";

// primero cargamos el user del localstorage y segun su perfil lo mandamos a una u otra pagina
// cargamos datos y definimos variables

let logged = false;

const user = JSON.parse(localStorage.getItem("user"));

let perfil = "GEST"; // por defecto GUEST

if (user) perfil = user.perfil.nombre;
console.log("Perfil del user en Redirects.js: ", perfil);
if (user) logged = true; 
console.log("logged: ", logged);

export function logoutAndRedirect(navigate) {
  let respuesta = window.confirm("¿Estás seguro de que deseas cerrar sesión?");
  if (respuesta) {
    // validamos si hay un usuario logueado
    if (!logged) {
      console.log("No hay ningún usuario logueado.");
      return;
    }
    // Si el usuario confirma, cerramos sesión
    console.log("Cerrando sesión...");
    logout();
    navigate('/');
  } else {
    // Si el usuario cancela, no hacemos nada
    console.log("Cierre de sesión cancelado.");
    alert("¡Me alegra que te quedes con nosotros!");
  }
}

export function irALogin(navigate){
  if (logged) {
    irAHome(navigate);
  }else {
    navigate('/login')
  }
}

export function irARegister(navigate){
    avigate('/registro')
}

export function irAInicio(navigate){
  navigate('/')
}
// LA IMPORTANTE: segun el perfil del user logueado,
// lo mandamos a su home correspondiente, los perfiles son 
// ADMIN, CLIENTE, TRABAJADOR, JEFE que estan en perfilSymbols.js (DICCIONARIO)
export function irAHome(navigate){
  switch (perfil){
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

export function loginAsGuest(navigate){
  navigate("/cliente/inicio")
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