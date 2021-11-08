import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getAllProducts } from "../redux/features/productSlice";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log("error", err));
    dispatch(addProduct(response.data));
    // console.log(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className=" ">
        <div className="container py-20">
          <h2 className="text-center text-4xl lg:text-5xl font-bold">
            Latests Products
          </h2>

          {/* {loading ? (
            <h2 className="text-center text-2xl font-bold mt-5">Loading...</h2>
          ) : ( */}
          <>
            <div className="my-8 flex flex-col lg:flex-row justify-center space-x-2 lg:space-x-4 space-y-2 lg:space-y-0">
              <div className="flex justify-center space-x-2 lg:space-x-4">
                <button className="text-sm lg:text-md lg:font-semibold border-2 border-black hover:text-white hover:bg-black rounded-lg px-1 lg:px-5 py-1 lg:py-2">
                  All
                </button>
                <button className="text-sm lg:text-md lg:font-semibold border-2 border-black hover:text-white hover:bg-black rounded-lg px-1 lg:px-5 py-1 lg:py-2">
                  Men's Clothing
                </button>
                <button className="text-sm lg:text-md lg:font-semibold border-2 border-black hover:text-white hover:bg-black rounded-lg px-1 lg:px-5 py-1 lg:py-2">
                  Women's Clothing
                </button>
              </div>
              <div className="flex justify-center space-x-2 lg:space-x-4">
                <button className="text-sm lg:text-md lg:font-semibold border-2 border-black hover:text-white hover:bg-black rounded-lg px-1 lg:px-5 py-1 lg:py-2">
                  Jewelery
                </button>
                <button className="text-sm lg:text-md lg:font-semibold border-2 border-black hover:text-white hover:bg-black rounded-lg px-1 lg:px-5 py-1 lg:py-2">
                  Electronics
                </button>
              </div>
            </div>
            <div className="grid lg:grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
          {/* )} */}
        </div>
      </div>
    </>
  );
};

export default Products;
