import React from "react";
import Logo from "../..//assets/images/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-10" alt="Cafe Chelsea Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Cafe Chelsea
            </span>
          </Link>
          <div className="flex items-center relative">
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-gear-wide-connected relative"></span>
              <span className="text-2xl bi bi-search"></span>
              <span className="text-2xl bi bi-cart-fill"></span>
              <span className="text-2xl bi bi-person-circle"></span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
