import "./TrabajadorInicio.css";
import Navbar from "../../components/Navbar";

function TrabajadorInicio() {
  return (
    <>
      <Navbar />

      <main className="trabajador-page">
        <div className="placeholder-page">
          {/* Columna izquierda: texto */}
          <div className="placeholder-left">
            <p className="placeholder-saludo">HOLA - TRABAJADOR</p>

            <h1 className="placeholder-title">
              AQUÍ VERÁS
              <br />
              TUS TAREAS
            </h1>

            <p className="placeholder-text">
              Estamos preparando esta vista para que puedas ver de un vistazo
              tus tareas, los proyectos en los que participas y qué viene después.
            </p>

            <p className="placeholder-text">
              Cuando esté disponible, tendrás aquí un resumen claro de tu trabajo
              diario y el progreso de cada proyecto.
            </p>

            {/* Bloque correo de contacto */}
            <div className="placeholder-contact">
              <p className="placeholder-subtitle">DEJA TUS OPINIONES EN</p>
              <p className="placeholder-email">ejemplo-correo@empresa.com</p>
            </div>

            {/* Bloque redes sociales con iconos */}
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
              src="/img/foto_landing2.png"
              alt="Vista previa de tareas del trabajador"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default TrabajadorInicio;
