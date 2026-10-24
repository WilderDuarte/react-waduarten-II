
import { useState } from 'react';

function Footer() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  function manejarEnvio(event) {
    event.preventDefault();

    setEnviado(true);
    setNombre('');
    setCorreo('');
    setMensaje('');
  }

  return (
    <footer id="contacto" className="bg-dark text-white">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-12 col-lg-5">
            <h2 className="fw-bold">¡Hablemos!</h2>

            <p className="text-white-50">
              ¿Tienes una propuesta laboral o un proyecto
              interesante? Envíame un mensaje.
            </p>

            <p>
              <img
                src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/envelope.svg"
                alt=""
                width="20"
                className="me-2"
              />
              carlos.ejemplo@email.com
            </p>

            <p>
              <img
                src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/telephone.svg"
                alt=""
                width="20"
                className="me-2"
              />
              +57 300 123 4567
            </p>

            <div className="alert alert-danger mt-4">
              Los datos mostrados son ficticios y se utilizan
              únicamente para practicar.
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <h4 className="mb-4">Formulario de contacto</h4>

            <form onSubmit={manejarEnvio}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre completo
                </label>

                <input
                  type="text"
                  id="nombre"
                  className="form-control"
                  placeholder="Escribe tu nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="correo" className="form-label">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  id="correo"
                  className="form-control"
                  placeholder="nombre@correo.com"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">
                  Mensaje
                </label>

                <textarea
                  id="mensaje"
                  className="form-control"
                  rows="4"
                  placeholder="Escribe tu mensaje..."
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-success">
                <img
                  src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/send-fill.svg"
                  alt=""
                  width="16"
                  className="me-2"
                  style={{
                    filter: 'brightness(0) invert(1)'
                  }}
                />
                Enviar mensaje
              </button>

              {enviado && (
                <div className="alert alert-success mt-3" role="status">
                  ¡Mensaje enviado correctamente en la demostración!
                </div>
              )}
            </form>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center text-white-50">
          <p className="mb-1">
            © 2026 Carlos Andrés Rodríguez
          </p>

          <small>
            Hoja de vida creada con React y Bootstrap.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
