import React from "react";

export default function PopUpCreate(props) {
  return props.trigger ? (
    <div class="Popup" className="fixed">
      <div
        className="popup-inner relative p-[32px] w-[1280px] h-[800px]
      bg-white rounded-[8px] shadow-lg"
      >
        {props.children}
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={() => props.setTrigger(false)}
            className="bg-white border border-primaryO text-primaryO px-6 py-2 rounded-[8px] 
            hover:bg-primaryO hover:text-white"
          >
            Cancel
          </button>
          <button className="bg-primaryO text-white px-6 py-2 rounded-[8px] 
          hover:text-primaryO hover:bg-white hover:border-1 hover:border-primaryO">
            Upload
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
