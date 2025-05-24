import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { deleteRequest } from "../api/requestDetail";

export default function RequestDetailPopup({
                                             trigger,
                                             setTrigger,
                                             selectedRequests,
                                             setSelectedRequests,
                                             setPets,
                                             selectedPet,
                                             onRequestUpdate,
                                           }) {
  const [isProcessing, setIsProcessing] = useState(false);

  if (!trigger || !selectedRequests || selectedRequests.length === 0)
    return null;

  const handleAccept = async (request, index) => {
    setIsProcessing(true);
    try {
      const result = await deleteRequest(request.id);
      if (result.success) {
        toast.success("Request Accepted!");

        const updatedRequests = [...selectedRequests];
        updatedRequests.splice(index, 1);
        setSelectedRequests(updatedRequests);

        if (updatedRequests.length === 0) {
          setTrigger(false);
        }

        if (onRequestUpdate) {
          onRequestUpdate(selectedPet.id);
        }
      } else {
        toast.error("Failed to accept request. Please try again.");
      }
    } catch (error) {
      console.error("Error accepting request:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDecline = async (request, index) => {
    setIsProcessing(true);
    try {
      const result = await deleteRequest(request.id);
      if (result.success) {
        toast.error("Request Declined!");

        const updatedRequests = [...selectedRequests];
        updatedRequests.splice(index, 1);
        setSelectedRequests(updatedRequests);

        if (updatedRequests.length === 0) {
          setTrigger(false);
        }

        if (onRequestUpdate) {
          onRequestUpdate(selectedPet.id);
        }
      } else {
        toast.error("Failed to decline request. Please try again.");
      }
    } catch (error) {
      console.error("Error declining request:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-start pt-10 z-50 overflow-y-auto">
        <div className="bg-white rounded-2xl p-8 max-w-5xl w-full h-[85vh] overflow-y-auto relative">
          <button
              className="absolute top-5 right-6 text-4xl font-light text-gray-500 hover:text-black "
              onClick={() => setTrigger(false)}
              disabled={isProcessing}
          >
            &times;
          </button>

          <h1 className="text-3xl font-bold mb-8">
            Request Details ({selectedRequests.length})
          </h1>

          <div className="flex flex-col gap-8">
            {selectedRequests.map((request, index) => (
                <div
                    key={request.id || index}
                    className="border rounded-lg p-6 flex flex-col md:flex-row gap-6"
                >
                  {/* รูปบ้านฝั่งซ้าย */}
                  <div className="flex-shrink-0">
                    <img
                        src={request.houseImg}
                        alt="House"
                        className="w-[250px] h-[200px] object-cover rounded-lg"
                    />
                  </div>

                  {/* ข้อมูลรีเควสฝั่งขวา */}
                  <div className="flex flex-col justify-between w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      <div>
                        <p className="font-bold">First Name:</p>
                        <p>{request.firstName}</p>
                      </div>
                      <div>
                        <p className="font-bold">Last Name:</p>
                        <p>{request.lastName}</p>
                      </div>
                      <div>
                        <p className="font-bold">Email:</p>
                        <p>{request.email}</p>
                      </div>
                      <div>
                        <p className="font-bold">Phone Number:</p>
                        <p>{request.phoneNum}</p>
                      </div>
                      <div>
                        <p className="font-bold">Financial:</p>
                        <p>{request.financial}</p>
                      </div>
                      <div>
                        <p className="font-bold">Address:</p>
                        <p className="whitespace-pre-line">{request.address}</p>
                      </div>
                      <div>
                        <p className="font-bold">House Environment:</p>
                        <p>{request.houseEnviron}</p>
                      </div>
                      <div>
                        <p className="font-bold">Pickup:</p>
                        <p>{request.pickup}</p>
                      </div>
                    </div>

                    {/* ปุ่ม Accept / Decline */}
                    <div className="flex justify-end gap-4 mt-6">
                      <button
                          onClick={() => handleDecline(request, index)}
                          disabled={isProcessing}
                          className="px-6 py-2 border border-primaryO text-primaryO rounded-md hover:bg-primaryO hover:text-white transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isProcessing ? "Processing..." : "Decline"}
                      </button>
                      <button
                          onClick={() => handleAccept(request, index)}
                          disabled={isProcessing}
                          className="px-6 py-2 bg-primaryO text-white rounded-md hover:bg-white hover:text-primaryO hover:border-primaryO border transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isProcessing ? "Processing..." : "Accept"}
                      </button>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}