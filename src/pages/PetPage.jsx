import React from "react";
import Navbar from "./../assets/Navbar";
import PopUp from "./../popup/PopUp";
import { useState } from "react";
import { RadioButton } from "primereact/radiobutton";

export default function PetPage() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [type, setType] = useState("");
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
        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup} className="">
          <div className="flex-col">
            <h1 className="flex text-header">Create post</h1>
            
            <div className="grid-cols-3 gap-4">
              <div className="max-w-[420px] my-4">
                <div>
                  <div className="flex justify-between">
                    <p className="text-regular">Picture</p>
                    <button>Upload</button>
                  </div>
                  <img src="" alt="" /> {/*pic example*/}
                </div>

                <div className="">
                  <p className="text-regular flex">Type</p>
                  <div className="flex gap-4">
                    <div className="flex align-items-center">
                      <RadioButton
                        inputId="cat"
                        name="cat"
                        value="cat"
                        onChange={(e) => setType(e.value)}
                        checked={type === "cat"}
                      />
                      <label htmlFor="cat" className="ml-2">
                        Cat
                      </label>
                    </div>

                    <div className="flex align-items-center">
                      <RadioButton
                        inputId="dog"
                        name="dog"
                        value="dog"
                        onChange={(e) => setType(e.value)}
                        checked={type === "dog"}
                      />
                      <label htmlFor="dog" className="ml-2">
                        Dog
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-regular flex">Color</p>
                  <input type="text" className="flex border-1 rounded-[8px]"/>
                </div>
              </div>

              <div className="max-w-[420px]">

              </div>
              <div className="max-w-[420px]">

              </div>
            </div>
          </div>
        </PopUp>
      </div>
    </>
  );
}
