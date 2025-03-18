import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/pets">Pets</NavLink>
        <NavLink to="/donation">Donation</NavLink>
        <NavLink to="/aboutus">AboutUs</NavLink>
        
      </nav>
      <Outlet />
    </>
  );
}
