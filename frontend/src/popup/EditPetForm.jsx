import React, { useState, useEffect } from "react";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";
import { z } from "zod";
import { editPet } from "./../api/editPet";

// Zod Schema
const petFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  type: z.enum(["cat", "dog"], "Type is required"),
  gender: z.enum(["male", "female"], "Gender is required"),
  color: z.string().optional(),
  date: z.date().nullable().optional(),
  ageYear: z.number().optional(),
  ageMonth: z.number().optional(),
  breed: z.string().optional(),
  vaccine: z.array(z.string()).optional(),
});

export default function EditPetForm({ trigger, setTrigger, petData }) {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    type: "",
    gender: "",
    color: "",
    date: null,
    ageYear: "",
    ageMonth: "",
    breed: "",
    vaccine: ["", "", "", ""],
    image: "",
    imageVaccine: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (petData) {
      setFormData({
        ...formData,
        ...petData,
        id: petData.id,
        image: `http://localhost:3000/${petData.pictureUrl}` || "",
        imageVaccine:  petData.vacineUrl ? `http://localhost:3000/${petData.vacineUrl}`: "",
        vaccine: petData.vaccine?.length ? petData.vaccine : ["", "", "", ""],
        date: petData.date ? new Date(petData.date) : null,
      });
    }
  }, [petData]);

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleVaccineChange = (index, value) => {
    const updated = [...formData.vaccine];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, vaccine: updated }));
  };

  const handleUpdate = async () => {
    const result = petFormSchema.safeParse(formData);
    const pictureFile = document.getElementById("upload-photo-1").files[0];
    const vaccineFile = document.getElementById("upload-photo-2").files[0];
    console.log(pictureFile, vaccineFile);

    if (!result.success) {
      const firstError =
        result.error.issues[0]?.message || "Please fill required fields";
      setError(firstError);
      setSuccess(false);
    } else {
      setError("");
      setSuccess(true);
      setTimeout(() => setTrigger(false), 1500);
    }

    const realFormData = new FormData();
    realFormData.append("pictureFile", pictureFile);
    realFormData.append("vaccineFile", vaccineFile);
    realFormData.append(
      "json",
      JSON.stringify({
        id: petData.id,
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        type: formData.type,
        gender: formData.gender,
        color: formData.color,
        date: formData.date,
        ageYear: formData.ageYear,
        ageMonth: formData.ageMonth,
        breed: formData.breed,
        vaccine: formData.vaccine,
        pictureUrl: formData.image,
        vaccineUrl: formData.imageVaccine,
      })
    );

    const res = await editPet(realFormData);
    if (res.success) {
      location.reload();
      setStatus("Pet update!!");
    } else {
      alert("Error editing a pet! Try Again!");
    }
  };

  const [step, setStep] = useState(1);

  const StepIndicator = () => (
    <div className="flex justify-center gap-2 mb-4">
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            step === n ? "bg-primaryO text-white" : "bg-gray-200 text-gray-500"
          }`}
        >
          {n}
        </span>
      ))}
    </div>
  );

  if (!trigger) return null;

  const MobileForm = (
    <div className="flex flex-col flex-1 w-full min-w-full gap-4 px-4">
      <StepIndicator />
      <div className="w-full min-w-full flex flex-col gap-4 px-4">
        {step === 1 && (
          <>
            {/* Picture Upload */}
            <div className="w-full">
              <div className="flex w-full justify-between mb-2">
                <p className="flex items-center font-medium">Picture</p>
                <input
                  type="file"
                  id="upload-photo-1"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const imageUrl = URL.createObjectURL(file);
                      setFormData((prevData) => ({
                        ...prevData,
                        image: imageUrl,
                      }));
                    }
                  }}
                />
                <label
                  htmlFor="upload-photo-1"
                  className="border-1 rounded-[8px] p-2 h-[30px] flex items-center border-primaryO text-primaryO hover:bg-primaryO hover:text-white"
                >
                  Upload
                </label>
              </div>
              {formData.image ? (
                <img
                  src={formData.image}
                  alt="preview"
                  className="w-full h-[320px] rounded-[8px]"
                />
              ) : (
                <div className="w-full h-[320px] rounded-[8px] bg-gray-200 flex items-center justify-center text-gray-500">
                  No image uploaded
                </div>
              )}
            </div>

            {/* Type */}
            <div>
              <p className="flex text-regular font-medium">Type</p>
              <div className="flex gap-4">
                {["cat", "dog"].map((val) => (
                  <div key={val} className="flex items-center">
                    <RadioButton
                      inputId={val}
                      name="type"
                      value={val}
                      className="custom-radio-orange"
                      onChange={(e) => handleInputChange("type", e.value)}
                      checked={formData.type === val}
                    />
                    <label htmlFor={val} className="ml-2 capitalize">
                      {val}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Name */}
            <div>
              <p className="flex text-regular font-medium">Name</p>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
              />
            </div>

            {/* Gender */}
            <div>
              <p className="flex text-regular font-medium">Gender</p>
              <div className="flex gap-4">
                {["male", "female"].map((val) => (
                  <div key={val} className="flex items-center">
                    <RadioButton
                      inputId={val}
                      name="gender"
                      value={val}
                      className="custom-radio-orange"
                      onChange={(e) => handleInputChange("gender", e.value)}
                      checked={formData.gender === val}
                    />
                    <label htmlFor={val} className="ml-2 capitalize">
                      {val}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            {/* Date of Birth */}
            <div>
              <p className="flex text-regular font-medium">Date of Birth</p>
              <Calendar
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.value)}
                showIcon
                className="p-calendar-custom flex justify-start w-full"
              />
            </div>

            {/* Age */}
            <div>
              <p className="flex text-regular font-medium">Age</p>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={formData.ageYear}
                  onChange={(e) => handleInputChange("ageYear", e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                />
                <span className="flex items-center">Years</span>
                <input
                  type="number"
                  value={formData.ageMonth}
                  onChange={(e) =>
                    handleInputChange("ageMonth", e.target.value)
                  }
                  className="w-full rounded-lg border border-gray-300 px-3 py-2"
                />
                <span className="flex items-center">Months</span>
              </div>
            </div>

            {/* Breed */}
            <div>
              <p className="flex text-regular font-medium">Breed</p>
              <input
                type="text"
                value={formData.breed}
                onChange={(e) => handleInputChange("breed", e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
              />
            </div>
          </>
        )}

        {step === 3 && (
          <>
            {/* Phone Number */}
            <div>
              <p className="flex text-regular font-medium">Phone Number</p>
              <input
                type="text"
                value={formData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
              />
            </div>

            {/* Address */}
            <div>
              <p className="flex text-regular font-medium">Address</p>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2"
              />
            </div>

            {/* Vaccine */}
            <div>
              <div className="flex w-full justify-between mb-2">
                <p className="flex items-center font-medium">Vaccine Record</p>
                <input
                  type="file"
                  id="upload-photo-2"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const imageVaccineUrl = URL.createObjectURL(file);
                      setFormData((prevData) => ({
                        ...prevData,
                        imageVaccine: imageVaccineUrl,
                      }));
                    }
                  }}
                />
                <label
                  htmlFor="upload-photo-2"
                  className="border-1 rounded-[8px] p-2 h-[30px] flex items-center border-primaryO text-primaryO hover:bg-primaryO hover:text-white"
                >
                  Upload
                </label>
              </div>
              {formData.imageVaccine !== "" ? (
                <img
                  src={formData.imageVaccine}
                  alt="preview"
                  className="w-[50px] h-[50px] rounded-[8px]"
                />
              ) : (
                <div className="w-full h-[50px] rounded-[8px] bg-gray-200 flex items-center justify-center text-gray-500">
                  No image uploaded
                </div>
              )}
              {formData.vaccine.map((val, i) => (
                <input
                  key={i}
                  value={val}
                  onChange={(e) => handleVaccineChange(i, e.target.value)}
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 mb-2"
                />
              ))}
            </div>
          </>
        )}

        {/* Step buttons */}
        <div className="flex justify-between mt-4">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="text-primaryO border border-primaryO px-4 py-2 rounded hover:bg-primaryO hover:text-white"
            >
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="bg-primaryO text-white px-4 py-2 rounded hover:text-primaryO hover:bg-white hover:border border-primaryO"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleUpdate}
              className="bg-primaryO text-white px-6 py-2 rounded hover:text-primaryO hover:bg-white hover:border border-primaryO"
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const DesktopForm = (
    <>
      <div className="flex-grow overflow-auto">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-x-12 gap-y-8 justify-items-center"
        >
          {/* 1st col */}
          <div className="w-full max-w-[400px] min-w-[300px]">
            {/* Picture */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-regular font-medium">Picture</p>
                <input
                  type="file"
                  id="upload-photo-1"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const imageUrl = URL.createObjectURL(file);
                      setFormData((prevData) => ({
                        ...prevData,
                        image: imageUrl,
                      }));
                    }
                  }}
                />
                <label
                  htmlFor="upload-photo-1"
                  className="border-1 rounded-[8px] p-2 h-[30px] flex items-center border-primaryO text-primaryO hover:bg-primaryO hover:text-white"
                >
                  Upload
                </label>
              </div>
              {formData.image ? (
                <img
                  src={formData.image}
                  alt="preview"
                  className="w-full h-[320px] rounded-[8px]"
                />
              ) : (
                <div className="w-full h-[320px] rounded-[8px] bg-gray-200 flex items-center justify-center text-gray-500">
                  No image uploaded
                </div>
              )}
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
                      className="custom-radio-orange"
                      onChange={(e) => handleInputChange("type", e.value)}
                      checked={formData.type === val}
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
                value={formData.color}
                onChange={(e) => handleInputChange("color", e.target.value)}
                className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
              />
            </div>
          </div>

          {/* 2nd col */}
          <div className="w-full max-w-[400px] min-w-[300px]">
            {/* Name */}
            <div className="mb-4">
              <p className="text-regular flex mb-2 font-medium">Name</p>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
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
                      className="custom-radio-orange"
                      onChange={(e) => handleInputChange("gender", e.value)}
                      checked={formData.gender === val}
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
              <p className="text-regular flex mb-2 font-medium">
                Date of birth
              </p>
              <Calendar
                className="p-calendar-custom flex justify-start h-[24px] w-full"
                inputId="birth_date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.value)}
                showIcon
              />
            </div>

            {/* Age */}
            <div className="mb-4">
              <p className="text-regular flex mb-2 font-medium">Age</p>
              <div className="flex gap-[10px] max-w-[370px]">
                <input
                  type="number"
                  value={formData.ageYear}
                  onChange={(e) => handleInputChange("ageYear", e.target.value)}
                  className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
                />
                <label>Years</label>
                <input
                  type="number"
                  value={formData.ageMonth}
                  onChange={(e) =>
                    handleInputChange("ageMonth", e.target.value)
                  }
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
                value={formData.breed}
                onChange={(e) => handleInputChange("breed", e.target.value)}
                className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
              />
            </div>
          </div>

          {/* 3rd col */}
          <div className="w-full max-w-[400px] min-w-[300px]">
            {/* Phone Number */}
            <div className="mb-4">
              <p className="text-regular flex mb-2 font-medium">Phone Number</p>
              <input
                type="text"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <p className="text-regular flex mb-2 font-medium">Address</p>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
              />
            </div>

            {/* Vaccine Record */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-regular font-medium">Vaccine Record</p>
                <input
                  type="file"
                  id="upload-photo-2"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const imageVaccineUrl = URL.createObjectURL(file);
                      setFormData((prevData) => ({
                        ...prevData,
                        imageVaccine: imageVaccineUrl,
                      }));
                    }
                  }}
                />
                <label
                  htmlFor="upload-photo-2"
                  className="border-1 rounded-[8px] p-2 h-[30px] flex items-center border-primaryO text-primaryO hover:bg-primaryO hover:text-white"
                >
                  Upload
                </label>
              </div>
              {formData.imageVaccine !== "" ? (
                <img
                  src={formData.imageVaccine}
                  alt="preview"
                  className="w-[50px] h-[50px] rounded-[8px]"
                />
              ) : (
                <div className="w-full h-[50px] rounded-[8px] bg-gray-200 flex items-center justify-center text-gray-500">
                  No image uploaded
                </div>
              )}
              {formData.vaccine.map((val, i) => (
                <input
                  key={i}
                  value={val}
                  onChange={(e) => handleVaccineChange(i, e.target.value)}
                  type="text"
                  className="flex rounded-[8px] w-full mb-2 shadow-lg border-1 border-gray-200"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4 mt-auto pt-4 mr-[26px]">
          <button
            onClick={() => setTrigger(false)}
            className="bg-white border border-primaryO text-primaryO px-6 py-2 rounded-[8px] hover:bg-primaryO hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="bg-primaryO text-white px-6 py-2 rounded-[8px] hover:text-primaryO hover:bg-white hover:border-1 hover:border-primaryO"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div className="fixed min-w-full">
      <div
        className="popup-inner relative p-[32px] max-w-screen-2xl w-[95%] max-h-screen h-[80%]
        bg-white rounded-[8px] shadow-lg overflow-auto flex flex-col mx-auto"
      >
        <div className="flex justify-between mb-6">
          <h1 className="flex items-center text-header">Edit post</h1>
          <button
            type="button"
            onClick={() => setTrigger(false)}
            className="bg-white rounded-md flex 
        items-center text-gray-400 md:hidden"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {isMobile ? MobileForm : DesktopForm}
        {error && (
          <div className="flex justify-center text-red-500 mt-4">
            ⚠️ {error}
          </div>
        )}
        {success && (
          <div className="flex justify-center text-green-600 mt-4">
            ✅ Update succeed
          </div>
        )}
      </div>
    </div>
  );
}
