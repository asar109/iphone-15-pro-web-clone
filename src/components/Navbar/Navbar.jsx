import React from "react";
import { navLists } from "../../constants/index";
import { bagImg, appleImg as logo, searchImg } from "../../utils/index";

const Navbar = () => {
  return (
    <header className="p-4 bg-black screen-max-width">
      <nav className="flex  justify-between items-center">
        <img width={14} height={18} src={logo} alt="Apple" />
        <div className="sm:flex hidden justify-around gap-5 items-center">
          {navLists.map((nav) => (
            <div
              className="hover:cursor-pointer text-gray-200 hover:text-white"
              key={nav}
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex hover:cursor-pointer justify-between items-center gap-4">
          <img width={18} height={18} src={bagImg} alt="cart" />
          <img width={18} height={18} src={searchImg} alt="search" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
