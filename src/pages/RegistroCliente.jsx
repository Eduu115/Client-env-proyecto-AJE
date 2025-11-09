import "./RegistroCliente.css";

function RegistroCliente() {
  return (
    <div className="register-page">
      <div className="register-left">
        <h1 className="register-title">REGISTRO:</h1>

        <form className="register-form">
          <div className="register-row">
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" name="nombre" type="text" />
          </div>

          <div className="register-row">
            <label htmlFor="apellidos">Apellidos</label>
            <input id="apellidos" name="apellidos" type="text" />
          </div>

          <div className="register-row">
            <label htmlFor="username">Usuario</label>
            <input id="username" name="username" type="text" />
          </div>

          <div className="register-row">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />
          </div>

          <div className="register-row">
            <label htmlFor="password">Contraseña</label>
            <input id="password" name="password" type="password" />
          </div>

          <div className="register-row">
            <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
            <input
              id="fechaNacimiento"
              name="fecha_nacimiento"
              type="date"
            />
          </div>

          <div className="register-row register-row-full">
            <label htmlFor="direccion">Dirección</label>
            <input id="direccion" name="direccion" type="text" />
          </div>

          <button type="submit" className="register-button">
            Registrarse
          </button>
        </form>

        <p className="register-login-link">
          ¿Ya tienes cuenta? <a href="">Login</a>
        </p>
      </div>

      <div className="register-right">
        <img
          src="/img/foto_landing2.png"
          alt="Imagen lateral de registro"
        />
      </div>
    </div>
  );
}

export default RegistroCliente;
