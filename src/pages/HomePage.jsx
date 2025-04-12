import React from "react";
import Navbar from "./../assets/Navbar";

export default function HomePage() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto text-center mt-8 g-24 min-h-screen">
        <div>This is Home Page!</div>
      </div>
    </>
  );
}
