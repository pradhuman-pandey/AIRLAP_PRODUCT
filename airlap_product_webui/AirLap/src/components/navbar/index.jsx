import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { GlobalContext } from "../../providers";

import { useNavigate } from "react-router-dom";

import { API, Browser, LOCAL_STORAGE_KEY } from "../../constants";
import axios from "../../services/axios";
import { useUser } from "../../hooks";

export default function NavBar() {
  const { cart } = useContext(GlobalContext);
  const [user, loading] = useUser();
  const navigate = useNavigate();
  const performLogOut = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(API.V1.ACCOUNT_LOGOUT);
    } finally {
      localStorage.clear();
      navigate(Browser.ROOT);
    }
  };
  return (
    <nav className="bg-white shadow-lg">
      <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800 md:text-3xl">
            <Link to={Browser.ROOT}>/\ LAPHUB</Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  className="hidden"
                  d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                />
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>
        <ul className="flex">
          <li>
            {" "}
            <Link
              to="/airlap"
              className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/airlap"
              className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/airlap"
              className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
            >
              {" "}
              &#128722;{" "}
              <span className="card-count">({cart.length})</span>
            </Link>
          </li>
          <li>
            {loading? (
              <span 
              style={{cursor:"pointer"}}
                onClick={() => {
                  navigate("/");
                }}
              >
                Signin
              </span>
            ) : (
              <>
                <span
                  onClick={performLogOut}
                  style={{cursor:"pointer"}}
                  className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
                >
                  Logout
                </span>
                <span >{user.firstName}</span>
              </>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
