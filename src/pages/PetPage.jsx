import React, { useState } from "react";
import Navbar from "../assets/Navbar";
import CreatePetForm from "../popup/CreatePetForm";

export default function PetPage() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto text-center mt-8 g-24 min-h-screen">
        <div>This is Pet Page!</div>
        <br />
        <button onClick={() => setButtonPopup(true)}>Create</button>

        {/* เรียก CreatePetForm ที่รวม popup มาให้แล้ว */}
        <CreatePetForm trigger={buttonPopup} setTrigger={setButtonPopup} />
      </div>
    </>
  );
}
