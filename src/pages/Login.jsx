import "./Login.css";

function Login() {
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
            <label htmlFor="email">Correo electrónico</label>
            <input id="email" name="email" type="email" />
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
