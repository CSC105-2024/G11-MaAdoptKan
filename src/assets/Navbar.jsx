import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);


  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, []);

  return (
    <>
      <div className="">
        <div className="flex justify-center max-w-[1280px] p-4 mx-auto">
          <nav className="flex justify-between items-center w-full md:w-[1000px]">
            <div className="flex items-center gap-2">
              <Logo />
            </div>

            <div className="hidden md:flex gap-8 text-[18px]">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-primaryO text-primaryO font-semibold pb-1"
                    : "hover:text-primaryO hover:border-b-2 hover:border-primaryO pb-1"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/pets"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-primaryO text-primaryO font-semibold pb-1"
                    : "hover:text-primaryO hover:border-b-2 hover:border-primaryO pb-1"
                }
              >
                Pets
              </NavLink>

              <NavLink
                to="/donation"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-primaryO text-primaryO font-semibold pb-1"
                    : "hover:text-primaryO hover:border-b-2 hover:border-primaryO pb-1"
                }
              >
                Donation
              </NavLink>

              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-primaryO text-primaryO font-semibold pb-1"
                    : "hover:text-primaryO hover:border-b-2 hover:border-primaryO pb-1"
                }
              >
                About Us
              </NavLink>
            </div>

            {/* Sign Up Button (Desktop) */}
            {/* <div className="hidden md:block">
              <button
                className="px-6 py-1 h-[32px] min-w-[110px] bg-primaryO text-white rounded-[8px]
                hover:bg-white hover:text-primaryO hover:border hover:border-primaryO
                flex justify-center items-center"
              >
                <Link to="/signup">Sign Up</Link>
              </button>
            </div> */}
            <div className="hidden md:block">
              {isLoggedIn ? (
                <div className="relative group">
                  <button className="flex items-center gap-2 px-4 py-2 bg-primaryO text-white rounded-[8px]">
                    <span>👤</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-md rounded-md hidden group-hover:block z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Your Profile
                    </Link>
                    <button
                      onClick={() => {
                        localStorage.removeItem("isLoggedIn");
                        setIsLoggedIn(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  className="px-6 py-1 h-[32px] min-w-[110px] bg-primaryO text-white rounded-[8px]
        hover:bg-white hover:text-primaryO hover:border hover:border-primaryO"
                >
                  <Link to="/signup">Sign Up</Link>
                </button>
              )}
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
          <div
            className="md:hidden absolute top-[70px] right-4 left-4 bg-white 
          shadow-lg rounded-xl px-6 py-6 z-50 transition-all duration-300 
          space-y-4 text-[18px] flex flex-col items-start"
          >
            <NavLink
              to="/"
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-primaryO font-semibold w-full"
                  : "hover:text-primaryO w-full"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/pets"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-primaryO font-semibold w-full"
                  : "hover:text-primaryO w-full"
              }
            >
              Pets
            </NavLink>
            <NavLink
              to="/donation"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-primaryO font-semibold w-full"
                  : "hover:text-primaryO w-full"
              }
            >
              Donation
            </NavLink>
            <NavLink
              to="/aboutus"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-primaryO font-semibold w-full"
                  : "hover:text-primaryO w-full"
              }
            >
              About Us
            </NavLink>
            <button
              className="w-full px-6 py-2 mt-4 bg-primaryO text-white rounded-[8px]
      hover:bg-white hover:text-primaryO hover:border hover:border-primaryO transition-all duration-200"
            >
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        )}
      </div>

      <Outlet />
    </>
  );
}
