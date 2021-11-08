import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Checkout from "../components/Checkout";
import { addCart, decreaseCart, removeCart } from "../redux/features/cartSlice";

const Carts = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      {cart.cartItems.length === 0 ? (
        <div className="text-center py-5 flex flex-col">
          <h4 className="text-2xl font-bold mb-2">
            Your Cart is currently empty.
          </h4>
          <Link to={"/"}>
            <button className="px-4 py-2 bg-yellow-600 text-white">
              Start Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className="container px-2 lg:px-0 mt-5">
            <h1 className="uppercase font-bold text-xl lg:text-2xl">
              Your shopping cart contains: {cart.cartTotalQuantity} Products
            </h1>
            <div className="my-7">
              <table className="border-collapse border border-gray-800 w-full text-center">
                <thead className="bg-gray-500 text-white">
                  <tr>
                    {/* <th className="border border-white py-3">SL No.</th> */}
                    <th className="border border-white py-3">Product</th>
                    <th className="border border-white py-3">Quantity</th>
                    <th className="border border-white py-3">Product Name</th>
                    <th className="border border-white py-3">Price</th>
                    <th className="border border-white py-3">SubTotal</th>
                    <th className="border border-white py-3">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.cartItems.map((cartItem) => (
                    <tr key={cartItem.id}>
                      {/* <td className="border border-gray-300 p-2">1</td> */}
                      <td className="border border-gray-300 p-2">
                        <img
                          src={cartItem.image}
                          alt={cartItem.title}
                          className="h-32 mx-auto"
                        />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <div className="flex justify-center space-x-2">
                          <button
                            className="border hover:bg-gray-300 font-bold text-2xl px-2 py-1"
                            onClick={() => dispatch(decreaseCart(cartItem))}
                          >
                            -
                          </button>
                          <div className="border bg-gray-300 text-2xl px-2 py-1">
                            {cartItem.cartQuantity}
                          </div>
                          <button
                            className="border hover:bg-gray-300 font-bold text-2xl px-2 py-1"
                            onClick={() => dispatch(addCart(cartItem))}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="border border-gray-300 p-2">
                        {cartItem.title}
                      </td>
                      <td className="border border-gray-300 p-2">
                        ${cartItem.price}
                      </td>
                      <td className="border border-gray-300 p-2">
                        ${cartItem.price * cartItem.cartQuantity}
                      </td>
                      <td className="border border-gray-300 p-2">
                        <i
                          className="fas fa-trash-alt  text-2xl text-red-500 hover:text-red-700 cursor-pointer"
                          onClick={() => dispatch(removeCart(cartItem))}
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Checkout />
          </div>
        </>
      )}
    </>
  );
};

export default Carts;
