import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { addCart } from "../redux/features/cartSlice";
import {
  getselectedProduct,
  selectedProduct,
} from "../redux/features/productSlice";

const ProductDetails = () => {
  const product = useSelector(getselectedProduct);
  const dispatch = useDispatch();
  const { id } = useParams();

  const fetchSelectedProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => console.log("err", err));

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    fetchSelectedProduct();
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <Banner name="Product" />
      <div className="container my-10">
        <div className="pt-0 lg:pt-10">
          <div className="container flex flex-col lg:flex-row justify-center">
            <div className="lg:w-2/5 w-full  p-2">
              <img src={product.image} alt="img" className="w-full mx-auto " />
            </div>
            <div className="lg:w-3/5 w-full pl-5 mt-3 lg:mt-0">
              <h2 className="text-3xl uppercase font-bold mb-3">
                {product.title}
              </h2>
              <div className="space-y-2">
                <p className="text-gray-900 font-semibold space-x-2">
                  <span>Avilability:</span>
                  <span className="text-green-600">InStock</span>
                </p>
                <p className="text-gray-900 font-semibold space-x-2">
                  <span>Category:</span>
                  <span className="">{product.category}</span>
                </p>
              </div>
              <div className="my-7">
                <h6 className="uppercase text-xl font-bold mb-2">
                  Description :
                </h6>
                <p className="font-semibold text-gray-600 lg:w-3/4 w-full">
                  {product.description}
                </p>
                <h6 className="text-2xl font-extrabold text-red-600 my-3">
                  ${product.price}
                </h6>
              </div>
              <div className="mt-8 space-x-2">
                <button
                  className="uppercase bg-red-500 font-bold text-white px-4 py-3 rounded-md"
                  onClick={() => dispatch(addCart(product))}
                >
                  <i className="fas fa-shopping-cart mr-2"></i>Add to Cart
                </button>
                <Link
                  to={"/cart"}
                  className="uppercase bg-green-500 font-bold text-white px-4 py-3 rounded-md"
                >
                  <i className="fas fa-shopping-bag mr-2"></i>Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
