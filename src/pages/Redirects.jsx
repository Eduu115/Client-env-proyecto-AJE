// primero cargamos el user del localstorage y segun su perfil lo mandamos a una u otra pagina

// cargamos datos y definimos variables

let logged = false;

const user = JSON.parse(localStorage.getItem("user"));

let perfil = null;

if (user) perfil = user.perfil;

if (user) logged = true; 

// importamos los symbol de perfiles
import { ROLES } from "../utils/perfilSymbols.js";

export function irALogin(navigate){
    if (logged) irAHome(navigate);  
    navigate('/login')
}

export function irARegister(navigate){
    navigate('/registro')
}

export function irAInicio(navigate){
    navigate('/')
}
// LA IMPORTANTE: segun el perfil del user logueado,
// lo mandamos a su home correspondiente, los perfiles son 
// ADMIN, CLIENTE, TRABAJADOR, JEFE que estan en perfilSymbols.js (DICCIONARIO)
export function irAHome(navigate){
  if (!logged){
      irALogin(navigate);
  }
  else{
    switch (perfil){
      case ROLES.ADMIN: 
        irAAdminInicio(navigate);
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
      irALogin(navigate);
    }
  }
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