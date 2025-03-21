import  React from 'react';
import './DonationPage.css';
import Navbar from "../assets/Navbar.jsx";

function DonationPage() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="min-h-screen flex justify-center items-center">
                <div className="two-boxes-container flex ">
                    <div className="box1 w-[500px] h-[60vh] m-[20px] overflow-hidden bg-white rounded-[8px] shadow p-[20px]">
                        <h1 className="text-header">Food & Supplies</h1><br/>
                        <p className="font-medium">Name</p>
                        <p className="font-medium text-[#E97A28]">Ma Adopt Kan</p><br/>
                        <p className="font-medium">Tel.</p>
                        <p className="font-medium text-[#E97A28]">0930299202</p><br/>
                        <p className="font-medium">Address</p>
                        <p className="font-medium text-primaryO">
                            9/168 Prachautit 23 Prachautit Road,<br/> BangMod, Thung Kru, Bangkok, 10140
                        </p>
                    </div>
                    <div className="box2 w-[500px] h-[60vh] m-[20px] overflow-hidden bg-[#f9f9f9] rounded-[8px] shadow p-[20px]">
                        <h1 className="text-header">QR Code for Donation</h1>
                        <img
                            src="public/images/QRDonate.jpg"
                            alt="QR Code for Donation"
                            className="w-44 h-44 mb-3"
                        />
                        <p className="font-medium">Bank Account Information</p>
                        <p className="font-medium text-[#E97A28]">Kbank: 198-8-56887-9</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DonationPage;