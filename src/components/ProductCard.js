import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCart } from "../redux/features/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="rounded-md border border-gray-200 hover:border-purple-700 bg-white p-5"
        key={product.id}
      >
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt="img"
            className="rounded-lg h-52 mx-auto"
          />
          <h5 className="font-semibold pt-2">
            {product.title.substring(0, 20)}...
          </h5>
          <h3 className="font-extrabold text-2xl pt-2">${product.price}</h3>
        </Link>
        <div className="flex md:flex-col lg:flex-row justify-between pt-2">
          <button
            className="bg-purple-900 hover:bg-yellow-600 transition text-white py-2 rounded-md w-full"
            onClick={() => dispatch(addCart(product))}
          >
            <i className="fas fa-shopping-cart mr-2"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
