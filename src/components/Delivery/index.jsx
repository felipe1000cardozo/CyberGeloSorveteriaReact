import React from "react";

import img from "../../img/delivery.png";

function Delivery() {
  return (
    <div id="delivery" className="container themed-container">
      <section className="row mb-3">
        <div className="col-md-4 themed-grid-col">
          <img src={img} alt="" />
        </div>
        <div className="col-md-8 themed-grid-col">
          <h2>Delivery</h2>
          <p>
            A Cyber Gelo também disponibiliza todos os seus produtos em
            embalagens próprias para revenda ou para abastecimento em bares,
            restaurantes e hotéis. Para saber mais, entre contato com o
            Departamento Comercial através do telefone 33 3333.3333 | 3333 3333.
            Se preferir, encaminhe e-mail para comercial@cybergelo.com.br
          </p>
        </div>
      </section>
    </div>
  );
}

export default Delivery;
