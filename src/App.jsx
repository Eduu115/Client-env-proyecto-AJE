import './App.css'
import Inicio from './pages/Inicio.jsx'
import { Link } from 'react-router-dom'
import RoutesConfig from './RoutesConfig.jsx'

import AdminInicio from './pages/admin/AdminInicio.jsx'
import AdminCrearUsuario from './pages/admin/AdminCrearUsuario.jsx'
import AdminGestionUsuarios from './pages/admin/AdminGestionUsuarios.jsx'
import Login from './pages/Login.jsx'
import RegistroCliente from './pages/RegistroCliente.jsx'
import InicioJefe from './pages/jefe/InicioJefe.jsx'
import TrabajadorInicio from './pages/trabajador/trabajadorInicio.jsx'
import ClienteInicio from './pages/cliente/ClienteInicio.jsx'


function App() {
  return (
    <div className="app">  
      {/* Componente externo que contiene todas las rutas */}
      <RoutesConfig />
    </div>
   
  )
}

export default App
