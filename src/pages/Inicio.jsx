import './Inicio.css'
// Componente de la página de inicio (landing page)
function Inicio() {
  return (
    <main className="inicio">
      {

      <div id="padre">
        {/* Parto el div en 4 para hacer una cuadricula mas custom */}
        
        <div class="hijo conimagen">
          <img src="/img/foto_landing1.png" alt="Imagen 1 de portada" />
        </div>

        <div class="hijo">
          <div class="texto-landing">
            <h1>Bienvenido a AJE</h1>
            <p>La plataforma donde se hace todo realidad</p>
          </div>
        </div>
        
        <div class="hijo conimagen">
          <img src="/img/foto_landing2.png" alt="Imagen 2 de portada" />
        </div>
        
        <div class="hijo">
          <div class="contenido-landing2">
            {/* dos partes: arriba texto, abajo botones */}
            <div class="texto-landing-2">
              <h2>¿Listo para comenzar tu aventura?</h2>
              <p>Únete a nuestra comunidad y descubre todo lo que tenemos para ofrecerte.</p>
            </div>
            <div class="botones-landing">
              <button class="btn-registrarse">Registrarse</button>
              <button class="btn-iniciar-sesion">Iniciar Sesión</button>
            </div>
          </div>
        </div>
      
      </div>

      }
    </main>
  )
}

export default Inicio
