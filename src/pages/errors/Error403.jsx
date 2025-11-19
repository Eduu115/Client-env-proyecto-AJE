import Navbar from "../../components/Navbar";
import "./Error403.css";
import { useNavigate } from "react-router-dom";

function NotFound403() {
  const navigate = useNavigate();

  return (
    <>
      <main className="not-authorization-page">
        <div className="not-authorization-content">
          <div className="not-authorization-text">
            <p className="not-authorization-label">ERROR 403</p>

            <h1 className="not-authorization-title">
              SOLICITUD ENTENDIDA PERO DENEGADA LA AUTORIZACION 
            </h1>

            <p className="not-authorization-message">
              El servidor ha entendido la solicitud pero se niega a autorizarla.
              Vuelve al inicio y Logeate con una cuenta con permisos.
            </p>

            <button
              className="not-authorization-button"
              onClick={() => navigate("/")}
            >
              Volver al inicio
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default NotFound403;
