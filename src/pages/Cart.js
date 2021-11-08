import React from "react";
import Banner from "../components/Banner";
import Carts from "../components/Carts";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Cart = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner name="Cart" />
      <Carts />
    </>
  );
};

export default Cart;
