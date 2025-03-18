import React from "react";
import "./DonationPage.css";
import Navbar from "../assets/Navbar";

function DonationPage() {
  return (
    <>
      

      <div className="fixed top-[0%] left-[0%] right-[0%] flex-row">
        <div>
        <Navbar />
      </div>
        <div
          className="two-boxes-container flex justify-center items-center h-100vh bg-fixed bg-linear-"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.6),rgba(255,255,255,0.6))," +
              " linear-gradient(to bottom, #FFFFFF, #E97A28)",
          }}
        >
          <div className="box1 w-[40%] h-[60vh] m-[20px] overflow-hidden bg-white rounded-[8px] shadow p-[20px]">
            <h1 className="font-semibold">Food & Supplies</h1>
            <p className="font-medium">Name</p>
            <p className="font-medium text-orange-200">Ma Adopt Kan</p>
            <p className="font-medium">Tel.</p>
            <p className="font-medium">0930299202</p>
            <p className="font-medium">Address</p>
            <p className="font-medium">
              9/168 Prachautit 23 Prachautit Road,
              <br /> BangMod, Thung Kru, Bangkok, 10140
            </p>
          </div>
          <div
            className="box2"
            style={{
              width: "40%",
              height: "60vh",
              margin: "20px",
              overflow: "hidden",
              backgroundColor: "#f9f9f9",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "20px",
            }}
          >
            <h1 style={{ fontWeight: "600" }}>QR Code for Donation</h1>
            <img
              src="/path/to/your/qrcode.png"
              alt="QR Code for Donation"
              className="w-44 h-44 mb-3"
            />
            <p style={{ fontWeight: "500" }}>Bank Account Information</p>
            <p style={{ fontWeight: "500", color: "#E97A28" }}>
              Kbank: 198-8-56887-9
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DonationPage;
