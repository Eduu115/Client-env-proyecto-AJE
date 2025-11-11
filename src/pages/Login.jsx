import "./Login.css";
import { irAHome } from "./Redirects";
import { useNavigate } from "react-router-dom"; //hook

function Login() {
  const navigate = useNavigate(); // inicio el hook

  const form = document.getElementById("login-form");
  const btn_enviar = document.querySelector(".login-button");
  if (btn_enviar){

    btn_enviar.addEventListener("submit", function (event) {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
    console.log("Formulario de inicio de sesión enviado");
    
    // inicializamos usuario final
    let usuarioFinal = [];

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const loginData = {
      username: username,
      password: password,
    };

    console.log("username:", username);
    console.log("Password:", password);

    let idPerfil = 4; // Valor predeterminado para idPerfil (Cliente)

    fetch("http://localhost:9001/usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),  
    
    })
    .then(
      response => {
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);
      return response.json();
    })
    .then((data) => {

      console.log("Data recibida:", data);

      usuarioFinal = data;

      console.log("Success:", usuarioFinal);

      alert("Inicio de sesión exitoso");
      
      // Guardar en el almacenamiento local
      saveDataToLocalStorage(usuarioFinal);
      console.log("Usuario guardado en localStorage:", usuarioFinal);


      idPerfil = usuarioFinal.perfil.idPerfil;
      alert("ID Perfil: " + idPerfil);
      alert("Redirigiendo...");
      
      irAHome(navigate);

    })
    .catch((error) => {
      console.error("Error:", error);
    }),

    // Reiniciar el formulario después de enviar
    form.reset();
    });
  
  }
  
  function saveDataToLocalStorage(x){       
      var receivedData = JSON.stringify(x);
      console.log(receivedData);
      localStorage.setItem('user', receivedData);
  }

 
  

  return (
    <main className="login-page">
      <div className="login-left">
        <img
          src="/img/foto_landing1.png"
          alt="Imagen lateral de login"
        />
      </div>

      <div className="login-right">
        <h1 className="login-title">LOGIN:</h1>

        <form className="login-form">
          <div className="login-row">
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text" />
          </div>

          <div className="login-row">
            <label htmlFor="password">Contraseña</label>
            <input id="password" name="password" type="password" />
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>

        <p className="login-register-link">
          ¿No tienes cuenta? <a href="/registro">Regístrate</a>
        </p>
      </div>
    </main>
  );
}

export default Login;
