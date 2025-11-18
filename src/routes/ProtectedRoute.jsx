import { Navigate, Outlet } from "react-router-dom";
import { PERMISOS, ROLES } from "../utils/perfilSymbols";

export default function ProtectedRoute({ roles = [], redirectTo = "/unauthorized" }) {
  // Obtener usuario del localStorage o asignar GUEST por defecto
  const user = JSON.parse(localStorage.getItem("user")) || { perfil: { nombre: ROLES.GUEST } };

  const userRole = user.perfil?.nombre;
  const userLevel = PERMISOS[userRole] || 0;

  // Si no hay roles definidos para la ruta, cualquier usuario puede acceder
  if (roles.length === 0) return <Outlet />;

  // Verifica si el usuario tiene nivel >= al nivel de alguno de los roles permitidos
  const allowed = roles.some(role => userLevel >= (PERMISOS[role] || 0));

  return allowed ? <Outlet /> : <Navigate to={redirectTo} replace />;
}
