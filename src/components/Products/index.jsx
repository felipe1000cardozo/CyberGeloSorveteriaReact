import React from "react";
import img1 from "../../img/taca.jpg";
import img2 from "../../img/pote.jpg";
import img3 from "../../img/casca.png";

function Products() {
  return (
    <div id="products">
      <section className="container center">
        <div className="relative">
          <img
            src={img1}
            className="img-fluid"
            alt="Imagem de uma taça de sorvete"
          />
          <img
            src={img2}
            className="img-fluid"
            alt="Imagem de um pote de sorvete"
          />
          <img
            src={img3}
            className="img-fluid"
            alt="Imagem de um sorvete com casca"
          />
        </div>
      </section>
      <span id="anchor-delivery" className="anchor" />
    </div>
  );
}

export default Products;
