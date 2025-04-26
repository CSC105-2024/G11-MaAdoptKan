import React, { useState } from "react";

export default function RequestDetailPopup({
  trigger,
  setTrigger,
  requestData,
  requestCount,
  setRequestCount,
}) {
  const [notification, setNotification] = useState("");
  const [notificationType, setNotificationType] = useState("");

  if (!trigger || !requestData) return null;

  const handleDecline = () => {
    setNotification("Request Declined");
    setNotificationType("error");
    setTimeout(() => {
      setRequestCount(requestCount - 1);
      setTrigger(false);
      setNotification("");
      setNotificationType("");
    }, 1500);
  };
  
  const handleAccept = () => {
    setNotification("Request Accepted");
    setNotificationType("success");
    setTimeout(() => {
      setRequestCount(requestCount - 1); 
      setTrigger(false);
      setNotification("");
      setNotificationType("");
    }, 1500);
  };
  

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-[95%] h-[80%] md:max-w-6xl md:h-auto p-6 overflow-y-auto relative">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-8">Request</h1>
          {/* Close button */}
          <button
            type="button"
            onClick={() => setTrigger(false)}
            className="bg-white rounded-md flex text-gray-400"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left side */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="font-semibold">First Name</label>
              <p className="mt-1 text-primaryO capitalize">
                {requestData.firstName}
              </p>
            </div>
            <div>
              <label className="font-semibold">Email</label>
              <p className="mt-1 text-primaryO">{requestData.email}</p>
            </div>
            <div>
              <label className="font-semibold mb-1">House Environment</label>
              <p className="mt-1 text-primaryO capitalize">
                {requestData.houseEnviron}
              </p>
              <div className="flex gap-2 mt-2">
                <img src={requestData.houseUrl} alt="" className=" h-[150px]" />
              </div>
            </div>
            <div>
              <label className="font-semibold mb-1">Pickup</label>
              <p className="mt-1 text-primaryO capitalize">
                {requestData.pickup}
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-4">
            <div>
              <label className="font-semibold">Last Name</label>
              <p className="mt-1 text-primaryO capitalize">
                {requestData.lastName}
              </p>
            </div>
            <div>
              <label className="font-semibold">Phone Number</label>
              <p className="mt-1 text-primaryO capitalize">
                {requestData.phone}
              </p>
            </div>
            <div>
              <label className="font-semibold mb-1">Financial</label>
              <p className="mt-1 text-primaryO capitalize">
                {requestData.financial}
              </p>
            </div>
            <div>
              <label className="font-semibold mb-1">Address</label>
              <p className="mt-1 text-primaryO capitalize">
                {requestData.address}
              </p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex justify-end gap-4 mt-10">
          <button
            onClick={handleDecline}
            className="px-6 py-2 border border-primaryO text-primaryO rounded-md hover:bg-orange-100 transition"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-primaryO text-white rounded-md hover:bg-orange-600 transition"
          >
            Accept
          </button>
        </div>

        {notification && (
          <div
            className={`flex justify-center text-lg mt-6 ${
              notificationType === "success" ? "text-green-600" : "text-red-500"
            }`}
          >
            {notification}
          </div>
        )}
      </div>
    </div>
  );
}
