import "./Inicio.css";

// Componente de la página de inicio (landing page)
function Inicio() {
  return (
    <main className="inicio">
      <div id="padre">
        {/* Parto el div en 4 para hacer una cuadricula mas custom */}

        <div className="hijo conimagen">
          <img src="/img/foto_landing1.png" alt="Imagen 1 de portada" />
        </div>

        <div className="hijo">
          <div className="texto-landing">
            <h1>PROYECTO FULL STACK</h1>
          </div>
        </div>

        <div className="hijo conimagen">
          <img src="/img/foto_landing2.png" alt="Imagen 2 de portada" />
        </div>

        <div className="hijo">
          <div className="contenido-landing2">
            {/* dos partes: arriba texto, abajo botones */}
            <div className="texto-landing-2">
              <h2>Comienza ahora</h2>
              <p>
                Unete a nosotros y descubre todas las funcionalidades que hemos
                preparado para ti.
              </p>
            </div>
            <div className="botones-landing">
              <button className="btn-registrarse">Registrarse</button>
              <button className="btn-iniciar-sesion">Iniciar Sesión</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Inicio;
