import React from 'react';
import './DonationPage.css';
import Navbar from "../assets/Navbar.jsx";

function DonationPage() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="min-h-screen flex justify-center items-center p-4">
                <div className="two-boxes-container flex flex-col md:flex-row items-center justify-center gap-4">
                    <div className="box1 sm:w-[355px] md:w-[500px] sm:h-[510px] md:h-[450px] m-[20px] overflow-hidden bg-white rounded-[8px] shadow p-[20px]">
                        <h1 className="text-header">Food & Supplies</h1><br/>
                        <p className="font-medium">Name</p>
                        <p className="font-medium text-[#E97A28] flex items-center">
                            <img src="public/images/logo-orange.png" alt="logo" className="w-6 h-6 mr-2"/>
                            Ma Adopt Kan
                        </p><br/>
                        <p className="font-medium">Tel.</p>
                        <p className="font-medium text-[#E97A28]">0930299202</p><br/>
                        <p className="font-medium">Address</p>
                        <p className="font-medium text-primaryO">
                            9/168 Prachautit 23 Prachautit Road,<br/> BangMod, Thung Kru, Bangkok, 10140
                        </p>
                    </div>
                    <div className="box2 sm:w-[355px] md:w-[500px] sm:h-[510px] md:h-[450px] m-[20px] overflow-hidden bg-white rounded-[8px] shadow p-[20px] flex flex-col items-start justify-center">
                        <h1 className="text-header text-left">QR Code for Donation</h1>
                        <div className="flex justify-center items-center h-[300px] mb-6 w-full">
                            <img
                                src="public/images/QRDonate.jpg"
                                alt="QR Code for Donation"
                                className="w-full h-auto max-w-[300px] max-h-[300px] object-contain"
                            />
                        </div>
                        <div className="text-center w-full">
                            <p className="font-medium">Bank Account Information</p>
                            <p className="font-medium text-[#E97A28]">ttbbank : 245-2-19934-8</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DonationPage;