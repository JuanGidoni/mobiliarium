import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="error-page">
      <div className="error-card">
        <h1 className="error-status">{error.status || "Error"}</h1>
        <h2 className="error-status-text">
          {error.statusText || "Ocurrió un problema"}
        </h2>

        <div className="error-details">
          <p>
            <strong>Detalles:</strong>
          </p>
          <pre className="error-json">
            {error.data || "No hay información adicional."}
          </pre>
        </div>

        <Link href="/" className="error-button">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
