// Dependencias
import { Routes, Route } from "react-router-dom";

// Dependencias internas
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import { ROLES } from "./utils/perfilSymbols.js";

// Landing
import Inicio from "./pages/Inicio.jsx";

// Layouts para protección por rol
import AdminLayout from "./layouts/AdminLayout";
import JefeLayout from "./layouts/JefeLayout";
import TrabajadorLayout from "./layouts/TrabajadorLayout";
import ClienteLayout from "./layouts/ClienteLayout";

// Pages
import Unauthorized from "./pages/errors/Unauthorized.jsx"
import AdminInicio from "./pages/admin/AdminInicio.jsx";
import AdminCrearUsuario from "./pages/admin/AdminCrearUsuario.jsx";
import AdminGestionUsuarios from "./pages/admin/AdminGestionUsuarios.jsx";
import Login from "./pages/Login.jsx";
import RegistroCliente from "./pages/RegistroCliente.jsx";
import InicioJefe from "./pages/jefe/InicioJefe.jsx";
import TrabajadorInicio from "./pages/trabajador/trabajadorInicio.jsx";
import ClienteInicio from "./pages/cliente/ClienteInicio.jsx";
import NotFound404 from "./pages/errors/Error404.jsx";

export default function RoutesConfig() {
  return (
    <Routes>
      {/* Cualquier otra ruta */}
      <Route path="*" element={<NotFound404 />} />
      {/* DEFAULT - LANDING */}
      <Route path="/" element={<ProtectedRoute roles={[ROLES.GUEST]} redirectTo="/login" />}>
        <Route index element={<Inicio />} />
      </Route>

      {/* PUBLICAS */}
      <Route path="/errors/unauthorized" element={<Unauthorized />} />
      <Route path="/errors/404" element={<NotFound404 />} />
      {/* ESTO ESTA desprotegido, todos pueden logearse o registrarse */}
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<RegistroCliente />} />

      <Route path="/cliente/inicio" element={<ClienteInicio />} />

      {/* ADMIN */}
      <Route path="/admin" element={<AdminLayout />}>

        {/* Todas estas rutas están protegidas solo por ser hijas de /admin  PARA eso es el LAYOUT, PROTEGE A LAS HIJAS*/}
        <Route index element={<AdminInicio />} />
        <Route path="inicio" element={<AdminInicio />} />

        <Route path="crear-usuario" element={<AdminCrearUsuario />} />
        <Route path="gestion-usuarios" element={<AdminGestionUsuarios />} />

      </Route>

      {/* Ya que lo hacemos, lo hacemos bien, para todos */}
      <Route path="/jefe" element={<JefeLayout />}>
      
        <Route index element={<InicioJefe />}/>
        <Route path="inicio" element={<InicioJefe />} />
      
      </Route>

      <Route path="/trabajador" element={<TrabajadorLayout />}>
      
        <Route index element={<InicioJefe />}/>
        <Route path="inicio" element={<InicioJefe />} />
      
      </Route>

    </Routes>
  );
}
