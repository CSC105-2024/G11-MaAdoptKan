import React from "react";
import Navbar from "./../assets/Navbar";
import PopUpCreate from "../popup/PopUpCreate";
import CreatePetForm from "../popup/CreatePetForm";
import { useState } from "react";

export default function PetPage() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState(null);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col items-center w-full max-w-[1440px] mx-auto text-center mt-8 g-24 min-h-screen">
        <div>This is Pet Page!</div>
        <br />
        <button className="" onClick={() => setButtonPopup(true)}>
          Create
        </button>

        {/* just for example let me try, then i'll move -Nateetan */}
        <PopUpCreate
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          className=""
        >
          <CreatePetForm
            type={type}
            setType={setType}
            gender={gender}
            setGender={setGender}
            date={date}
            setDate={setDate}
          />
        </PopUpCreate>
      </div>
    </>
  );
}
