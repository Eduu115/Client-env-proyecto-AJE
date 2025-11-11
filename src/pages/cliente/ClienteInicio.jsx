import "./ClienteInicio.css";
import Navbar from "../../components/Navbar";

function ClienteInicio() {
  return (
    <main className="inicio-rol">
      <Navbar />
      <div className="placeholder-page">
        {/* Columna izquierda: texto */}
        <div className="placeholder-left">
          <p className="placeholder-saludo">HOLA - USER</p>

          <h1 className="placeholder-title">
            CUANDO ESTÉ
            <br />
            DISPONIBLE,
            <br />
            TE AVISAREMOS
          </h1>

          <p className="placeholder-text">
            Estamos trabajando en la experiencia para clientes. Aquí podrás ver
            tus proyectos, solicitudes y todo lo que tengas con la empresa.
          </p>

          <div className="placeholder-contact">
            <p className="placeholder-subtitle">DEJA TUS OPINIONES EN</p>
            <p className="placeholder-email">ejemplo-correo@empresa.com</p>
          </div>

          <div className="placeholder-social">
            <p className="placeholder-subtitle">
              SÍGUENOS EN NUESTRAS REDES
            </p>
            <div className="social-icons">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <img
                  src="/logotipo-de-instagram.png"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <img
                  src="/linkedin.png"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>

          <label className="placeholder-checkbox">
            Avísame cuando esta vista esté lista
            <input type="checkbox" />
          </label>
        </div>

        {/* Columna derecha: solo imagen */}
        <div className="placeholder-right">
          <img
            src="/img/foto_landing1.png"
            alt="Vista previa para clientes"
          />
        </div>
      </div>
    </main>
  );
}

export default ClienteInicio;
