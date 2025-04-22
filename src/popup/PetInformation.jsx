import React from "react";

export default function PetInformation({ trigger, setTrigger, pet }) {
  if (!trigger || !pet) return null;

  return (
      <div className="fixed">
        <div
            className="popup-inner relative p-[32px] w-[1280px] h-[700px]
        bg-white rounded-[8px] shadow-lg overflow-auto flex flex-col"
        >
          <div className="flex-grow overflow-auto">
            <h1 className="flex text-header ml-[26px]">Pet Information</h1>

            <div className="grid-cols-3 gap-[52px] flex justify-center">
              {/* 1st col - Picture + Type + Color */}
              <div className="min-w-[320px] my-4">
                <div className="mb-4">
                  <img
                      src={pet.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUAfyVe3Easiycyh3isP9wDQTYuSmGPsPQvLIJdEYvQ_DsFq5Ez2Nh_QjiS3oZ3B8ZPfK9cZQyIStmQMV1lDPLw"}
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
                  <p className="flex text-primaryO capitalize">{pet.color || "-"}</p>
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
                  <p className="flex text-regular font-medium mb-1">Date of Birth</p>
                  <p className="flex text-primaryO capitalize">{formatDate(pet.date)}</p>
                </div>

                <div className="mb-4">
                  <p className="flex text-regular font-medium mb-1">Ages</p>
                  <p className="flex text-primaryO capitalize">{pet.ageYear} Years, {pet.ageMonth} Months</p>
                </div>

                <div className="mb-4">
                  <p className="flex text-regular font-medium mb-1">Breed</p>
                  <p className="flex text-primaryO capitalize">{pet.breed || "-"}</p>
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
                  <p className="flex text-primaryO capitalize">{pet.address || "-"}</p>
                </div>

                <div className="mb-4">
                  <p className="flex text-regular font-medium mb-1">Vaccine Record</p>
                  <img
                      src={pet.vaccineImage || "https://i.etsystatic.com/29156076/r/il/e1a1fe/5483373649/il_fullxfull.5483373649_rn1v.jpg"}
                      alt={pet.name}
                      className="w-[150px] h-[150px] rounded-[8px] "
                  />
                  {pet.vaccine?.length > 0 ? (
                      pet.vaccine.map((v, i) => (
                          <p key={i} className="flex text-primaryO capitalize">{v || `Vaccine ${i + 1}`}</p>
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
        </div>
      </div>
  );
}

function formatDate(date) {
  if (!date) return "-";
  const d = new Date(date);
  return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}`;
}
