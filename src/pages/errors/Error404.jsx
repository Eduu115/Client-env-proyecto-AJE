import Navbar from "../../components/Navbar";
import "./Error404.css";
import { useNavigate } from "react-router-dom";

function NotFound404() {
  const navigate = useNavigate();

  return (
    <>
      <main className="not-found-page">
        <div className="not-found-content">
          <div className="not-found-text">
            <p className="not-found-label">ERROR 404</p>

            <h1 className="not-found-title">
              PÁGINA NO ENCONTRADA
            </h1>

            <p className="not-found-message">
              Parece que esta sección aún no existe o el enlace está roto.
              Vuelve al inicio y explora las vistas que sí están listas.
            </p>

            <button
              className="not-found-button"
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

export default NotFound404;
