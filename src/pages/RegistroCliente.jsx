import "./RegistroCliente.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { irALogin, irAInicio } from "./Redirects";

function RegistroCliente() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    username: "",
    email: "",
    password: "",
    direccion: "",
    fecha_nacimiento: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hoyISO = new Date().toISOString().slice(0, 10);

    const payload = {
      ...formData,
      nombre: formData.nombre.trim(),
      apellidos: formData.apellidos.trim(),
      username: formData.username.trim(),
      email: formData.email.trim(),
      direccion: formData.direccion.trim() || null,
      fecha_nacimiento: formData.fecha_nacimiento || null,
      password: formData.password,
      enabled: 1,
      fecha_registro: hoyISO,
      id_perfil: 4,
    };

    try {
      const resp = await fetch("http://localhost:9001/usuarios/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!resp.ok) {
        const bodyText = await resp.text();
        let details;

      try {
        const parsed = JSON.parse(bodyText);
        details =
          typeof parsed === "string" ? parsed : JSON.stringify(parsed);
      } catch {
        details = bodyText || "Error desconocido en el servidor";
      }

      throw new Error(details);
    }


      irALogin(navigate);
    } catch (err) {
      console.error("Error al registrar el usuario:", err);
      alert("Error al registrar el usuario: " + err.message);
    }
  };

  return (
    <main className="register-page">
      <div className="register-left">
        <h1 className="register-title">REGISTRO:</h1>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-row">
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" name="nombre" type="text" value={formData.nombre} onChange={handleChange}/>
          </div>

          <div className="register-row">
            <label htmlFor="apellidos">Apellidos</label>
            <input id="apellidos" name="apellidos" type="text" value={formData.apellidos} onChange={handleChange}/>
          </div>

          <div className="register-row">
            <label htmlFor="username">Usuario</label>
            <input id="username" name="username" type="text" value={formData.username} onChange={handleChange}/>
          </div>

          <div className="register-row">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange}/>
          </div>

          <div className="register-row">
            <label htmlFor="password">Contraseña</label>
            <input id="password" name="password" type="password" value={formData.password} onChange={handleChange}/>
          </div>

          <div className="register-row">
            <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
            <input id="fechaNacimiento" name="fecha_nacimiento" type="date" value={formData.fecha_nacimiento} onChange={handleChange}/>
          </div>

          <div className="register-row register-row-full">
            <label htmlFor="direccion">Dirección</label>
            <input id="direccion" name="direccion" type="text" value={formData.direccion} onChange={handleChange}/>
          </div>

          <button type="submit" className="register-button">
            Registrarse
          </button>
        </form>

        <p className="register-login-link">
          ¿Ya tienes cuenta?{" "}
          <button
            type="button"
            className="text-link"
            onClick={() => irALogin(navigate)}
          >
            Login
          </button>
        </p>

        <button
          type="button"
          className="register-back-button"
          onClick={() => irAInicio(navigate)}
        >
          ← Volver al inicio
        </button>
      </div>

      <div className="register-right">
        <img
          src="/img/foto_landing2.png"
          alt="Imagen lateral de registro"
        />
      </div>
      
    </main>
  );
}

export default RegistroCliente;

