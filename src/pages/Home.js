import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
