// cargamos user para validar el logout
const user = JSON.parse(localStorage.getItem("user"));

function logout() {
    if (user) { // volvemos a validar si hay un user logueado aunque ya se hizo en Redirects.js, por seguridad
        localStorage.removeItem("user");
        console.log("Usuario deslogueado.");
    } else {
        console.log("No hay ningún usuario logueado.");
    }
}

export default logout;