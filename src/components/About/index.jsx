import React from "react";

import loja from "../../img/loja.jpg";

function About() {
  return (
    <div className="relative">
      <section id="about" className="container themed-container mt-5">
        <h2>Cyber Gelo</h2>
        <div className="row mb-3">
          <div className="col-md-7 themed-grid-col">
            <p className="p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              voluptatum veniam animi enim esse est magni debitis sint, dolorem
              alias praesentium quibusdam deserunt quod hic, labore dolores
              quaerat? elit. Similique, explicabo. Omnis molestiae, alias nisi
              dolorem incidunt hic est repellat vel quidem autem quaerat ad,
              quod possimus molestias deleniti eveniet minima asdsadasd?
            </p>
            <p className="p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              nobis vel animi laborum ipsam ad hic, voluptate ipsa enim repellat
              libero. Odio rem, facere qui aut architecto temporibus culpa
              quam?Recusandae, voluptatum quam? Numquam earum enim doloribus est
              culpa, illum neque, amet consequatur aliquam qui fugiat iste
              animi. Quas doloremque iure dolore reprehenderit obcaecati! Quasi
              obcaecati possimus illo expedita facilis obcaecati Quasi
              obcaecati.
            </p>
          </div>
          <div className="col-md-5 themed-grid-col">
            <img src={loja} alt="Imagem da loja" />
          </div>
        </div>
      </section>
      <span id="anchor-products" className="anchor" />
    </div>
  );
}

export default About;
