import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="">
        <div className="flex justify-center max-w-[1280px] p-4 mx-auto">
          <nav className="flex justify-between items-center w-full md:w-[1000px]">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Logo />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-[18px]">
              <NavLink to="/" end>Home</NavLink>
              <NavLink to="/pets">Pets</NavLink>
              <NavLink to="/donation">Donation</NavLink>
              <NavLink to="/aboutus">About Us</NavLink>
            </div>

            {/* Sign Up Button (Desktop) */}
            <div className="hidden md:block">
              <button className="px-6 py-1 h-[32px] w-[110px] bg-primaryO text-white rounded-[8px]
                hover:bg-white hover:text-primaryO hover:border hover:border-primaryO
                flex justify-center items-center">
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">
                👤
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden px-6 py-4 space-y-4 text-[18px]">
            <NavLink to="/" end onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/pets" onClick={() => setIsOpen(false)}>Pets</NavLink>
            <NavLink to="/donation" onClick={() => setIsOpen(false)}>Donation</NavLink>
            <NavLink to="/aboutus" onClick={() => setIsOpen(false)}>About Us</NavLink>
            <button className="block w-full px-6 py-2 mt-2 bg-primaryO text-white rounded-[8px]
              hover:bg-white hover:text-primaryO hover:border hover:border-primaryO">
              Sign Up
            </button>
          </div>
        )}
      </div>

      <Outlet />
    </>
  );
}
