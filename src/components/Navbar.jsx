import { irAHome, irAInicio, logoutAndRedirect } from '../pages/Redirects.jsx';
import './Navbar.css'
import './navbarBlur.js'
import { useNavigate } from "react-router-dom"; //hook

const user = JSON.parse(localStorage.getItem('user'));

function Navbar() {
  const navigate = useNavigate(); // inicio el hook

  return (
    <nav className="navbar">
      {/* Contenido de la barra de navegación */}

      <img src="/logo.png" alt="logo" onClick={() => irAInicio(navigate)} />

      <div className='links-container'>
          <button onClick={() => irAInicio(navigate)}>Tus datos</button>
          {!user && (
            <button onClick={() => irAHome(navigate)}>Home</button>
          )}   
          {user && (
            <>
              <button onClick={() => irAHome(navigate)}>Home {user.perfil.nombre}</button>
              <button onClick={() => logoutAndRedirect(navigate)}>Logout</button>
            </>
          )}
          
      </div>

      <div className='saludo-container'>
        <p className='saludo'>
          Hola - {user ? user.name : 'Invitado'}
          {/* FALTA ESTO */}
        </p>
      </div>
    </nav>
    
  )
}

export default Navbar
