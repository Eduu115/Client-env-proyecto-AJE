import { Outlet } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute";
import { ROLES } from "../utils/perfilSymbols";

export default function AdminLayout() {
  return (
    <ProtectedRoute roles={[ROLES.ADMIN]}>
      <Outlet />   {/* Aquí se renderizan tus rutas hijas del admin */}
    </ProtectedRoute>
  );
}
