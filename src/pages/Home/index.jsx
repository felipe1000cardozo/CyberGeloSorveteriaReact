import React, { Fragment } from "react";

import Header from "../../components/Header";
import Slider from "../../components/Slider";
import About from "../../components/About";
import Products from "../../components/Products";
import Delivery from "../../components/Delivery";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

function Home() {
  return (
    <Fragment>
      <Header />
      <Slider />
      <About />
      <Products />
      <Delivery />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default Home;
