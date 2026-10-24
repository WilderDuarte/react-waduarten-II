
function Titulos() {
  return (
    <section id="titulos" className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">
            Formación académica
          </h2>

          <p className="text-secondary">
            Mis estudios y certificaciones profesionales
          </p>

          <img
            src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/mortarboard-fill.svg"
            alt=""
            width="40"
            className="mt-2"
          />
        </div>

        <div className="row g-4">
          <div className="col-12 col-lg-4">
            <div className="card h-100 border-primary shadow-sm">
              <div className="card-body">
                <span className="badge bg-primary mb-3">
                  Título profesional
                </span>

                <h5 className="card-title">
                  Ingeniería de Sistemas
                </h5>

                <p className="card-text text-secondary">
                  Universidad Tecnológica Nacional
                </p>

                <p className="small">
                  <strong>Año:</strong> 2023
                </p>

                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/book-fill.svg"
                  alt=""
                  width="30"
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="card h-100 border-success shadow-sm">
              <div className="card-body">
                <span className="badge bg-success mb-3">
                  Certificación
                </span>

                <h5 className="card-title">
                  Desarrollo Web con React
                </h5>

                <p className="card-text text-secondary">
                  Academia Digital de Ejemplo
                </p>

                <p className="small">
                  <strong>Año:</strong> 2024
                </p>

                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/code-slash.svg"
                  alt=""
                  width="30"
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="card h-100 border-danger shadow-sm">
              <div className="card-body">
                <span className="badge bg-danger mb-3">
                  Curso especializado
                </span>

                <h5 className="card-title">
                  Fundamentos de Cloud Computing
                </h5>

                <p className="card-text text-secondary">
                  Centro de Formación Tecnológica
                </p>

                <p className="small">
                  <strong>Año:</strong> 2025
                </p>

                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/cloud-fill.svg"
                  alt=""
                  width="30"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="alert alert-warning mt-4" role="alert">
          <strong>Objetivo profesional:</strong> continuar
          aprendiendo y participar en proyectos tecnológicos
          que generen valor.
        </div>
      </div>
    </section>
  );
}

export default Titulos;
