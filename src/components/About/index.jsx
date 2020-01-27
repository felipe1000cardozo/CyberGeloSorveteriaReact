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
              Fazer sorvetes artesanais com sabor e a melhor qualidade durante
              as quatro estações do ano! Com essa ideia a CyberGelo foi criada
              por uma família apaixonada por sabores. A CyberGelo iniciou as
              atividades no verão e ao contrário do ditado popular “que o amor
              acaba com o fim da estação” a empresa se mantém desde 1991
              produzindo gelatos artesanais, com todo cuidado e profissionalismo
              exigido.
            </p>
            <p className="p-3">
              Considerada a primeira Gelateria de Florianópolis, a empresa
              possui a Central de Produção com mais de mil metros quadrados.
              Montado obedecendo aos rigorosos padrões de qualidade e higiene
              estabelecidos por lei, o espaço abriga câmaras frias e modernos
              equipamentos necessários para a produção de toda a linha de
              gelatos da CyberGelo, assim como equipe especialmente treinada
              composta por tecnólogos e engenheiros de alimentos.
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
