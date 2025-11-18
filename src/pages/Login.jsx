import "./Login.css";
import { useNavigate } from "react-router-dom"; //hook
import { irARegister, irAInicio, irAHome, loginAsGuest } from "./Redirects";
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Login() {
  const navigate = useNavigate(); // inicio el hook

  const form = document.getElementById("login-form");

  const { login } = useAuth();
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const onSubmit = async function (e) {
    e.preventDefault();
    const ok = await login(username, password);
    if (!ok){
      setError('Credenciales inválidas');
    } else {
      irAHome(navigate);
    }
  };

  
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

        <form className="login-form" onSubmit={onSubmit}>
          <div className="login-row">
            <label htmlFor="username">Username</label>
            <input id="username" name="username" type="text" onChange={e => setUsername(e.target.value)} required />
          </div>

          <div className="login-row">
            <label htmlFor="password">Contraseña</label>
            <input id="password" name="password" type="password" onChange={e => setPassword(e.target.value)} required />
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>

        <p className="login-register-link">
          ¿No tienes cuenta?{" "}
          <button
            type="button"
            className="text-link"
            onClick={() => irARegister(navigate)}
          >
            Regístrate
          </button>
        </p>
                <button
                  type="button"
                  className="login-back-button"
                  onClick={() => irAInicio(navigate)}
                >
                  ← Volver al inicio
                </button>
                <button
                  className="login-back-button"
                  onClick={() => loginAsGuest(navigate)}
                >
                  - Entrar como invitado
                </button>
      </div>
    </main>
  );
}

export default Login;
