import { irAHome, irAInicio } from '../pages/Redirects.jsx';
import './Navbar.css'
import './navbarBlur.js'
import { useNavigate } from "react-router-dom"; //hook

function Navbar() {
  const navigate = useNavigate(); // inicio el hook

  return (
    <nav className="navbar">
      {/* Contenido de la barra de navegación */}

      <img src="/logo.png" alt="logo" onClick={() => irAInicio(navigate)} />

      <div className='links-container'>
          <button onClick={() => irAInicio(navigate)}>Tus datos</button>
          <button className='log-out' onClick={() => irAInicio(navigate)}>Cerrar sesion</button>
      </div>

      <div className='saludo-container'>
        <p className='saludo'>
          Hola - QUIEN SEAS
          {/* FALTA ESTO */}
        </p>
      </div>
    </nav>
    
  )
}

export default Navbar
