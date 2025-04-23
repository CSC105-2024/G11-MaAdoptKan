import React, { useEffect, useState } from "react";

export default function PetInformation({ trigger, setTrigger, pet }) {
  const [isMobile, setIsMobile] = useState(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!trigger || !pet) return null;

  const StepIndicator = () => (
    <div className="flex justify-center gap-2 mb-4">
      {[1, 2].map((n) => (
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

  const InfoRow = ({ label, value }) => (
    <div className="mb-2">
      <p className="flex text-regular font-medium mb-1">{label}</p>
      <p className="flex text-primaryO capitalize ">{value || "-"}</p>
    </div>
  );

  const MobileInfo = () => (
    <div className="flex flex-col flex-1 w-full min-w-full gap-4 px-4 overflow-auto ">
      <StepIndicator />
      {step === 1 ? (
        <>
          <img
            src={
              pet.image ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUAfyVe3Easiycyh3isP9wDQTYuSmGPsPQvLIJdEYvQ_DsFq5Ez2Nh_QjiS3oZ3B8ZPfK9cZQyIStmQMV1lDPLw"
            }
            alt={pet.name}
            className="w-full h-[280px] object-cover rounded-[8px]"
          />
          <InfoRow label="Type" value={pet.type} />
          <InfoRow label="Name" value={pet.name} />
          <InfoRow label="Color" value={pet.color} />
          <InfoRow label="Gender" value={pet.gender} />
          <InfoRow label="Breed" value={pet.breed} />
        </>
      ) : (
        <>
          <InfoRow label="Date of Birth" value={formatDate(pet.date)} />
          <InfoRow
            label="Ages"
            value={`${pet.ageYear} Years, ${pet.ageMonth} Months`}
          />
          <InfoRow label="Phone Number" value={pet.phone} />
          <InfoRow label="Address" value={pet.address} />
          <div className="mb-4">
            <p className="text-left text-regular font-medium mb-1">
              Vaccine Record
            </p>
            <img
              src={
                pet.vaccineImage ||
                "https://i.etsystatic.com/29156076/r/il/e1a1fe/5483373649/il_fullxfull.5483373649_rn1v.jpg"
              }
              alt="vaccine"
              className="w-[150px] h-[150px] rounded-[8px] mb-2"
            />
            {pet.vaccine?.length > 0 ? (
              pet.vaccine.map((v, i) => (
                <p key={i} className="text-left text-primaryO capitalize">
                  {v || `Vaccine ${i + 1}`}
                </p>
              ))
            ) : (
              <p className="text-left text-primaryO capitalize">-</p>
            )}
          </div>
        </>
      )}

      <div className="flex justify-between mt-6">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="text-primaryO border border-primaryO px-4 py-2 rounded hover:bg-primaryO hover:text-white"
          >
            Back
          </button>
        )}
        {step < 2 ? (
          <button
            onClick={() => setStep(step + 1)}
            className="bg-primaryO text-white px-4 py-2 rounded hover:text-primaryO hover:bg-white hover:border border-primaryO"
          >
            Next
          </button>
        ) : (
          <>
            <button
              onClick={() => alert("Adopt clicked")}
              className="bg-primaryO text-white px-6 py-2 rounded hover:text-primaryO hover:bg-white hover:border border-primaryO"
            >
              Adopt
            </button>
          </>
        )}
      </div>
    </div>
  );

  const DesktopInfo = () => (
    <>
      <div className="flex-grow overflow-auto">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-x-12 gap-y-8 justify-items-center"
        >
          {/* 1st col - Picture + Type + Color */}
          <div className="min-w-[320px] my-4">
            <div className="mb-4">
              <img
                src={
                  pet.image ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUAfyVe3Easiycyh3isP9wDQTYuSmGPsPQvLIJdEYvQ_DsFq5Ez2Nh_QjiS3oZ3B8ZPfK9cZQyIStmQMV1lDPLw"
                }
                alt={pet.name}
                className="w-[320px] h-[320px] rounded-[8px] "
              />
            </div>

            <div className="mb-4 ">
              <p className="text-regular flex font-medium mb-1">Type</p>
              <p className="flex text-primaryO capitalize">{pet.type}</p>
            </div>

            <div className="mb-4">
              <p className="flex text-regular font-medium mb-1">Color</p>
              <p className="flex text-primaryO capitalize">
                {pet.color || "-"}
              </p>
            </div>
          </div>

          {/* 2nd col - Name + Gender + DOB + Age + Breed */}
          <div className="min-w-[370px] my-4">
            <div className="mb-4">
              <p className="text-regular flex font-medium mb-1">Name</p>
              <p className="flex text-primaryO capitalize">{pet.name}</p>
            </div>

            <div className="mb-4">
              <p className="flex text-regular font-medium mb-1">Gender</p>
              <p className="flex text-primaryO capitalize">{pet.gender}</p>
            </div>

            <div className="mb-4">
              <p className="flex text-regular font-medium mb-1">
                Date of Birth
              </p>
              <p className="flex text-primaryO capitalize">
                {formatDate(pet.date)}
              </p>
            </div>

            <div className="mb-4">
              <p className="flex text-regular font-medium mb-1">Ages</p>
              <p className="flex text-primaryO capitalize">
                {pet.ageYear} Years, {pet.ageMonth} Months
              </p>
            </div>

            <div className="mb-4">
              <p className="flex text-regular font-medium mb-1">Breed</p>
              <p className="flex text-primaryO capitalize">
                {pet.breed || "-"}
              </p>
            </div>
          </div>

          {/* 3rd col - Phone + Address + Vaccine */}
          <div className="min-w-[370px] my-4">
            <div className="mb-4">
              <p className="flex text-regular font-medium mb-1">Phone Number</p>
              <p className="flex text-primaryO capitalize">{pet.phone}</p>
            </div>

            <div className="mb-4">
              <p className="flex text-regular font-medium mb-1">Address</p>
              <p className="flex text-primaryO capitalize">
                {pet.address || "-"}
              </p>
            </div>

            <div className="mb-4">
              <p className="flex text-regular font-medium mb-1">
                Vaccine Record
              </p>
              <img
                src={
                  pet.vaccineImage ||
                  "https://i.etsystatic.com/29156076/r/il/e1a1fe/5483373649/il_fullxfull.5483373649_rn1v.jpg"
                }
                alt={pet.name}
                className="w-[150px] h-[150px] rounded-[8px] "
              />
              {pet.vaccine?.length > 0 ? (
                pet.vaccine.map((v, i) => (
                  <p key={i} className="flex text-primaryO capitalize">
                    {v || `Vaccine ${i + 1}`}
                  </p>
                ))
              ) : (
                <p className="flex text-primaryO capitalize">-</p>
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-auto pt-4 mr-[26px]">
          <button
            onClick={() => setTrigger(false)}
            className="bg-white border border-primaryO text-primaryO px-6 py-2 rounded-[8px] hover:bg-primaryO hover:text-white"
          >
            Cancel
          </button>
          <button
            onClick={() => alert("Adopt clicked")}
            className="bg-primaryO text-white px-6 py-2 rounded-[8px] hover:text-primaryO hover:bg-white hover:border-1 hover:border-primaryO"
          >
            Adopt
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div className="fixed min-w-full">
      <div
        className="popup-inner relative p-[32px] max-w-screen-2xl w-[95%] max-h-screen h-[80%]
        bg-white rounded-[8px] shadow-lg overflow-auto flex flex-col mx-auto "
      >
        <div className="flex justify-between mb-6">
          <h1 className="flex items-center text-header">Pet Information</h1>
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

        {/* ✅ Scrollable content */}
        <div className="flex-1 overflow-auto min-h-0 pb-8">
          {isMobile ? <MobileInfo /> : <DesktopInfo />}
        </div>

        <div className="flex justify-end gap-4 px-6 py-8"></div>
      </div>
    </div>
  );
}

function formatDate(date) {
  if (!date) return "-";
  const d = new Date(date);
  return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(
    2,
    "0"
  )}/${String(d.getDate()).padStart(2, "0")}`;
}