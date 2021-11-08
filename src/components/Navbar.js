import { getAuth, signOut } from "@firebase/auth";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutuser, selectUser } from "../redux/features/userSlice";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      dispatch(logoutuser());
    });
  };

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-700">
        <div className="container flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <select className="px-5 py-2 bg-transparent border-2 border-gray-600 text-gray-300 focus:outline-none">
              <option className="text-gray-800 ">All Categories</option>
              <option className="text-gray-800">Televisions</option>
              <option className="text-gray-800">Headphones</option>
              <option className="text-gray-800">Headphones</option>
              <option className="text-gray-800">Cameras</option>
              <option className="text-gray-800">Theater</option>
            </select>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow flex-col lg:flex-row items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none items-center lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  to={"/product"}
                >
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                  to={"/"}
                >
                  About
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none items-center lg:ml-auto">
              {!user ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                      to={"/login"}
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                      to={"/register"}
                    >
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                    to={"/register"}
                    onClick={logOut}
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
