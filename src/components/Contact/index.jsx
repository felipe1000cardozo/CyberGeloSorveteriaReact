import React from "react";

function Contact() {
  return (
    <div id="contact">
      <section className="row my-3 container themed-container">
        <div className="col-md-4 themed-grid-col">
          <h2>Contato</h2>
          <p>
            Quer saber mais sobre o nosso processo de produção? Contar como foi
            sua experiência na Cyber Gelo ? Saber sobre a tabela nutricional dos
            nossos produtos? Preencha o formulário que será um prazer em
            responde-lo!
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
            <button type="button">Enviar</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
