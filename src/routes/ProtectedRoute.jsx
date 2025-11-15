import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, roles = [] }) {
  const { user } = useAuth();

  // 1. Si no está logueado → al login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2. Si no tiene perfil → no autorizado
  if (!user.perfil || !user.perfil.nombre) {
    return <Navigate to="/errors/unauthorized" replace />;
  }

  const userRole = user.perfil.nombre;

  // 3. Si la ruta requiere roles, y el usuario NOOOOO está en esa lista de ROLES PERMITIDOS:
  if (roles.length > 0 && !roles.includes(userRole)) {
    return <Navigate to="/errors/unauthorized" replace />;
  }

  return children;
}
