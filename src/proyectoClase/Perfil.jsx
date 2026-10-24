
function Perfil() {
  return (
    <section id="perfil" className="bg-light">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
        <a className="navbar-brand fw-bold" href="#perfil">
          Mi Hoja de Vida
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Abrir navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#perfil">Perfil</a>
            <a className="nav-link" href="#titulos">Formación</a>
            <a className="nav-link" href="#contacto">Contacto</a>
          </div>
        </div>
      </nav>

      <div className="container py-5">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-4 text-center">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop&crop=faces"
              alt="Fotografía de perfil de ejemplo"
              className="img-fluid rounded-circle border border-4 border-primary shadow"
              style={{
                width: '240px',
                height: '240px',
                objectFit: 'cover'
              }}
            />
          </div>

          <div className="col-12 col-md-8">
            <span className="badge bg-success mb-3">
              Disponible para trabajar
            </span>

            <h1 className="display-5 fw-bold">
              Carlos Andrés Rodríguez
            </h1>

            <h4 className="text-primary">
              Desarrollador de Software Junior
            </h4>

            <p className="text-secondary mt-3">
              Apasionado por la tecnología, el desarrollo web
              y la creación de soluciones digitales. Me gusta
              trabajar en equipo, aprender nuevas herramientas
              y afrontar retos que me permitan crecer
              profesionalmente.
            </p>

            <div className="d-flex flex-wrap gap-2 mt-4">
              <a href="#titulos" className="btn btn-primary">
                Ver formación
              </a>

              <a href="#contacto" className="btn btn-warning">
                Contactarme
              </a>
            </div>

            <div className="d-flex flex-wrap gap-4 mt-4">
              <span>
                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/geo-alt-fill.svg"
                  alt=""
                  width="18"
                  className="me-2"
                />
                Bogotá, Colombia
              </span>

              <span>
                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/envelope-fill.svg"
                  alt=""
                  width="18"
                  className="me-2"
                />
                carlos.ejemplo@email.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perfil;
