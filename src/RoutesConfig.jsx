import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio.jsx";
import AdminInicio from "./pages/admin/AdminInicio.jsx";
import AdminCrearUsuario from "./pages/admin/AdminCrearUsuario.jsx";
import AdminGestionUsuarios from "./pages/admin/AdminGestionUsuarios.jsx";
import Login from "./pages/Login.jsx";
import RegistroCliente from "./pages/RegistroCliente.jsx";
import InicioJefe from "./pages/jefe/InicioJefe.jsx";
import TrabajadorInicio from "./pages/trabajador/trabajadorInicio.jsx";
import ClienteInicio from "./pages/cliente/ClienteInicio.jsx";

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<RegistroCliente />} />

      <Route path="/admin/inicio" element={<AdminInicio />} />
      <Route path="/admin/crear-usuario" element={<AdminCrearUsuario />} />
      <Route path="/admin/gestion-usuarios" element={<AdminGestionUsuarios />} />

      <Route path="/jefe/inicio" element={<InicioJefe />} />
      <Route path="/trabajador/inicio" element={<TrabajadorInicio />} />
      <Route path="/cliente/inicio" element={<ClienteInicio />} />

      <Route path="*" element={<h1>Página no encontrada</h1>} />
    </Routes>
  );
}
