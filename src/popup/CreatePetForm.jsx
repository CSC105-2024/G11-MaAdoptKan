import React from "react";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";
import { FloatLabel } from "primereact/floatlabel";

export default function CreatePetForm({
  type,
  setType,
  gender,
  setGender,
  date,
  setDate,
}) {
  return (
    <div className="flex-col">
      <h1 className="flex text-header">Create post</h1>

      <div className="grid-cols-3 gap-[52px] flex ">
        {/* 1st col */}
        <div className="min-w-[320px] my-4">
          {/* Picture */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <p className="text-regular font-medium">Picture</p>
              <button className="border-1 rounded-[8px] p-2 h-[30px] flex items-center border-primaryO text-primaryO hover:bg-primaryO hover:text-white">
                Upload
              </button>
            </div>
            <img src="" alt="" className="w-[320px] h-[320px] rounded-[8px]" />
          </div>

          {/* Type */}
          <div className="mb-4">
            <p className="text-regular flex mb-2 font-medium">Type</p>
            <div className="flex gap-4">
              {["cat", "dog"].map((val) => (
                <div key={val} className="flex align-items-center">
                  <RadioButton
                    inputId={val}
                    name="type"
                    value={val}
                    onChange={(e) => setType(e.value)}
                    checked={type === val}
                  />
                  <label htmlFor={val} className="ml-2 capitalize">
                    {val}
                  </label>
                </div>
              ))}
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
              {["male", "female"].map((val) => (
                <div key={val} className="flex align-items-center">
                  <RadioButton
                    inputId={val}
                    name="gender"
                    value={val}
                    onChange={(e) => setGender(e.value)}
                    checked={gender === val}
                  />
                  <label htmlFor={val} className="ml-2 capitalize">
                    {val}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* DateOfBirth */}
          <div className="mb-4">
            <p className="text-regular flex mb-2 font-medium">Date of birth</p>
            <FloatLabel>
              <Calendar
                className="border-1 rounded-[8px] w-full px-2 shadow-lg border-gray-200"
                inputId="birth_date"
                value={date}
                onChange={(e) => setDate(e.value)}
                showIcon
              />
            </FloatLabel>
          </div>

          {/* Age */}
          <div className="mb-4">
            <p className="text-regular flex mb-2 font-medium">Age</p>
            <div className="flex gap-[10px] max-w-[370px]">
              <input
                type="number"
                className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
              />
              <label>Years</label>
              <input
                type="number"
                className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
              />
              <label>Months</label>
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

        {/* 3rd col */}
        <div className="min-w-[370px] my-4">
          <div className="mb-4">
            <p className="text-regular flex mb-2 font-medium">Phone Number</p>
            <input
              type="text"
              className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
            />
          </div>

          <div className="mb-4">
            <p className="text-regular flex mb-2 font-medium">Address</p>
            <input
              type="text"
              className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
            />
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <p className="text-regular font-medium">Vaccine Record</p>
              <button className="border-1 rounded-[8px] p-2 h-[30px] flex items-center border-primaryO text-primaryO hover:bg-primaryO hover:text-white">
                Upload
              </button>
            </div>
            {[1, 2, 3, 4].map((i) => (
              <input
                key={i}
                type="text"
                className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
