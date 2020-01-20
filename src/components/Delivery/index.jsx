import React from "react";

import img from "../../img/delivery.png";

function Delivery() {
  return (
    <div id="delivery" className="container themed-container">
      <section className="row mb-3">
        <div className="col-md-4 themed-grid-col">
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="col-md-8 themed-grid-col">
          <h2>Delivery</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nisi
            placeat magnam error, similique, quaerat aliquid ratione dolores
            accusamus doloremque mollitia ratione dolores accusamus commodi? Ab,
            unde. Temporibus nostrum aspernatur accusantium. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Libero itaque quaerat.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Delivery;
