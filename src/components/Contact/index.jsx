import React from "react";

function Contact() {
  return (
    <div id="contact" className="container themed-container">
      <section className="row my-3">
        <div className="col-md-4 themed-grid-col">
          <h2>Contato</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi hic
            necessitatibus labore neque ipsum, eius pariatur quisquam alias
            eveniet earum possimus quae, nobis quis asperiores omnis aut dolor!
            Voluptatum, neque a quaerat?
          </p>
        </div>
        <div className="col-md-8 themed-grid-col">
          <form>
            <div className="form-row">
              <div className="form-group col-md-12">
                <input
                  className="form-control"
                  placeholder="Nome"
                  type="text"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-12">
                <input
                  className="form-control"
                  placeholder="Email"
                  type="email"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  className="form-control"
                  placeholder="Telefone"
                  type="phone"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  className="form-control"
                  placeholder="Data"
                  type="date"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-12">
                <input
                  className="form-control"
                  placeholder="Assunto"
                  type="text"
                />
              </div>
            </div>
            <input value="Enviar" type="button" />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
