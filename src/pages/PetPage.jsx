import React from "react";
import Navbar from "./../assets/Navbar";
import PopUpCreate from "../popup/PopUpCreate";
import { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";
import { FloatLabel } from "primereact/floatlabel";

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
          <div className="flex-col">
            <h1 className="flex text-header">Create post</h1>

            <div className="grid-cols-3 gap-[52px] flex ">
              {/* 1st col */}
              <div className="min-w-[320px] my-4">
                {/* Picture */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-regular font-medium">Picture</p>
                    <button
                      className="border-1 rounded-[8px] p-2 h-[30px] flex items-center
                    border-primaryO text-primaryO
                    hover:bg-primaryO hover:text-white"
                    >
                      Upload
                    </button>
                  </div>
                  <img
                    src=""
                    alt=""
                    className="w-[320px] h-[320px] rounded-[8px]"
                  />{" "}
                  {/*pic example*/}
                </div>

                {/* Type */}
                <div className="mb-4">
                  <p className="text-regular flex mb-2 font-medium">Type</p>
                  <div className="flex gap-4">
                    <div className="flex align-items-center">

                      {/* yang changed color of radio mai dai */}
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

                {/* Color */}
                <div className="mb-4">
                  <p className="text-regular flex mb-2 font-medium">Color</p>
                  <input
                    type="text"
                    className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
                  />
                </div>
              </div>

              {/* 2nd col */}
              <div className="min-w-[370px] my-4">
                {/* Name */}
                <div className="mb-4">
                  <p className="text-regular flex mb-2 font-medium">Name</p>
                  <input
                    type="text"
                    className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
                  />
                </div>

                {/* Gender */}
                <div className="mb-4">
                  <p className="text-regular flex mb-2 font-medium">Gender</p>
                  <div className="flex gap-4">
                    <div className="flex align-items-center">
                      <RadioButton
                        inputId="male"
                        name="male"
                        value="male"
                        onChange={(e) => setGender(e.value)}
                        checked={gender === "male"}
                      />
                      <label htmlFor="male" className="ml-2">
                        Male
                      </label>
                    </div>

                    <div className="flex align-items-center">
                      <RadioButton
                        inputId="female"
                        name="female"
                        value="female"
                        onChange={(e) => setGender(e.value)}
                        checked={gender === "female"}
                      />
                      <label htmlFor="female" className="ml-2">
                        Female
                      </label>
                    </div>
                  </div>
                </div>

                {/* DateOfBirth */}
                <div className="mb-4">
                  <p className="text-regular flex mb-2 font-medium">
                    Date of birth
                  </p>
                  <div className="card flex justify-content-center">
                    <FloatLabel>
                      <Calendar
                        className="border-1 rounded-[8px] w-full px-2 
                        shadow-lg border-1 border-gray-200"
                        inputId="birth_date"
                        value={date}
                        onChange={(e) => setDate(e.value)}
                        showIcon
                      />
                    </FloatLabel>
                  </div>
                </div>

                {/* Age */}
                <div className="mb-4">
                  <p className="text-regular flex mb-2 font-medium">Age</p>
                  <div className="flex gap-[10px] max-w-[370px]">
                    <input
                      type="number"
                      className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
                    />
                    <label htmlFor="yearForPet">Years</label>
                    <input
                      type="number"
                      className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
                    />
                    <label htmlFor="yearForPet">Months</label>
                  </div>
                </div>

                {/* Breed */}
                <div className="mb-4">
                  <p className="text-regular flex mb-2 font-medium">Breed</p>
                  <input
                    type="text"
                    className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
                  />
                </div>
              </div>
              <div className="min-w-[370px] my-4">
                {/* Phone Number */}
                <div className="mb-4">
                  <p className="text-regular flex mb-2 font-medium">
                    Phone Number
                  </p>
                  <input
                    type="text"
                    className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
                  />
                </div>

                {/* Address */}
                <div className="mb-4">
                  <p className="text-regular flex mb-2 font-medium">Address</p>
                  <input
                    type="text"
                    className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
                  />
                </div>

                {/* Vaccine Record */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-regular font-medium">Vaccine Record</p>
                    <button
                      className="border-1 rounded-[8px] p-2 h-[30px] flex items-center
                    border-primaryO text-primaryO
                    hover:bg-primaryO hover:text-white"
                    >
                      Upload
                    </button>
                  </div>
                  <input
                    type="text"
                    className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
                  />
                  <input
                    type="text"
                    className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
                  />
                  <input
                    type="text"
                    className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
                  />
                  <input
                    type="text"
                    className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </PopUpCreate>
      </div>
    </>
  );
}
