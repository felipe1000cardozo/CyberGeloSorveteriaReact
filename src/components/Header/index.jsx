import React, { Fragment } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../../img/logo.jpg";

let Header = () => {
  return (
    <Fragment>
      <section
        id="header"
        className="container-fluid themed-container mt-5 px-0"
      >
        <div id="logo" className="center pt-3">
          <img src={logo} alt="" />
        </div>
      </section>
      <div className="center bg-principal" id="menu">
        <ul className="container mb-0">
          <li>
            <HashLink smooth to="#app">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#anchor-about">
              Sobre
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#anchor-products">
              Produtos
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#delivery">
              Delivery
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#contact">
              Contato
            </HashLink>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Header;
