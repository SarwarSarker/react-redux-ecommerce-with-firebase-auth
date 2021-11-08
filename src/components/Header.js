import { getAuth, onAuthStateChanged } from "@firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotals } from "../redux/features/cartSlice";
import { loginuser, logoutuser, selectUser } from "../redux/features/userSlice";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          loginuser({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        // User is signed out
        dispatch(logoutuser());
      }
    });
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 py-2 shadow-sm bg-white px-4 lg:px-0">
        <div className="container flex flex-col md:flex-row lg:flex-row justify-center md:justify-between lg:justify-between items-center space-y-4 md:space-y-0 lg:space-y-0">
          {/* logo */}
          <Link to={"/"}>
            <h1 className="font-head text-5xl text-gray-600 ml-2">
              <span className="text-yellow-500">M</span>EZEST
            </h1>
          </Link>
          {/* searchbar */}
          <div className="w-full md:w-1/2 lg:max-w-xl relative flex justify-center items-center">
            <span className="absolute left-4 top-2 text-lg text-gray-400">
              <i className="fas fa-search" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 py-2 px-4 pl-12 rounded-l-md focus:outline-none"
            />
            <button className=" bg-yellow-500 border border-yellow-500 px-3 py-2 text-white rounded-r-md hover:bg-transparent hover:text-yellow-500 transition">
              Search
            </button>
          </div>
          {/* icons */}
          <div className="flex flex-row justify-center lg:justify-between items-center space-x-4">
            <Link
              to={"/cart"}
              className="text-center text-gray-500 hover:text-yellow-600 transition relative"
            >
              <div className="text-2xl ">
                <i className="fas fa-shopping-cart" />
              </div>
              <div className="text-sm leading-4">Cart</div>
              <span className="absolute text-white text-xs bg-yellow-600 rounded-full px-1 -right-2 -top-1">
                {cart.cartTotalQuantity}
              </span>
            </Link>
            <div className="text-center text-gray-500 hover:text-yellow-600 transition relative">
              <div className="text-2xl ">
                <i className="fas fa-user"></i>
              </div>
              <div className="text-sm leading-4">
                {!user ? "Account" : user.displayName}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
