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
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-[480px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] h-[90%] overflow-y-auto relative flex flex-col p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-black">Request</h1>
            <button
                type="button"
                onClick={() => setTrigger(false)}
                className="text-gray-400 hover:text-gray-600"
            >
              <svg
                  className="h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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

          {/* Request Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
            {/* Left */}
            <div className="space-y-4">
              <div>
                <label className="font-semibold">First Name</label>
                <p className="mt-1 text-primaryO capitalize">{requestData.firstName}</p>
              </div>
              <div>
                <label className="font-semibold">Email</label>
                <p className="mt-1 text-primaryO">{requestData.email}</p>
              </div>
              <div>
                <label className="font-semibold">House Environment</label>
                <p className="mt-1 text-primaryO capitalize">{requestData.houseEnviron}</p>
                <div className="mt-2">
                  <img
                      src={requestData.houseUrl}
                      alt="House"
                      className="w-full h-[180px] md:h-[200px] lg:h-[220px] object-cover rounded-md"
                  />
                </div>
              </div>
              <div>
                <label className="font-semibold">Pickup</label>
                <p className="mt-1 text-primaryO capitalize">{requestData.pickup}</p>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-4">
              <div>
                <label className="font-semibold">Last Name</label>
                <p className="mt-1 text-primaryO capitalize">{requestData.lastName}</p>
              </div>
              <div>
                <label className="font-semibold">Phone Number</label>
                <p className="mt-1 text-primaryO">{requestData.phone}</p>
              </div>
              <div>
                <label className="font-semibold">Financial</label>
                <p className="mt-1 text-primaryO capitalize">{requestData.financial}</p>
              </div>
              <div>
                <label className="font-semibold">Address</label>
                <p className="mt-1 text-primaryO whitespace-pre-line">{requestData.address}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <button
                onClick={handleDecline}
                className="px-6 py-2 border border-primaryO text-primaryO rounded-md hover:bg-orange-100 transition text-sm sm:text-base"
            >
              Decline
            </button>
            <button
                onClick={handleAccept}
                className="px-6 py-2 bg-primaryO text-white rounded-md hover:bg-orange-600 transition text-sm sm:text-base"
            >
              Accept
            </button>
          </div>

          {/* Notification */}
          {notification && (
              <div
                  className={`flex justify-center mt-6 text-lg ${
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