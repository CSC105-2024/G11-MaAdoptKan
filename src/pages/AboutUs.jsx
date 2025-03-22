import React, { useEffect } from "react";
import ImageSlider from "../assets/ImageSlider";
import Navbar from "./../assets/Navbar";
import { Link } from "react-router-dom";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col items-center w-full max-w-[1280px] text-center mt-8 g-24">
        {/* slide bar */}
        <div>
          <ImageSlider />
        </div>

        {/* Our Mission */}
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 my-8 text-center space-y-6">
          <div>
            <h2 className="text-primaryO text-header sm:text-header lg:text-header font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-black leading-relaxed break-words">
              At Ma Adopt Kan, our mission is simple: to provide loving homes
              for pets in need. <br />
              We work with shelters, rescue groups, and foster families to
              ensure every animal receives the care, love, and support they
              deserve before finding their forever home.
            </p>
          </div>
        </div>

        {/* dark box with button */}
        <div className="max-w-full px-4 mx-auto text-center m-8">
          <div>
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="max-w-full md:w-[1000px] mx-auto m-8 flex flex-col md:flex-row items-center gap-8 bg-[url('./images/catSleep.jpg')] bg-cover bg-center p-10 rounded-[8px] min-h-[400px]">
                <div className="w-full md:w-[450px] text-center md:text-left">
                  <h3 className="text-header font-bold mb-4 text-primaryO flex justify-center">
                    Join Our Cause
                  </h3>
                  <p className="text-white mb-4 flex justify-center text-center">
                    Looking for a furry companion? <br />
                    Start your adoption journey today! <br />
                    You can make a difference by opening <br />
                    your home to a pet in need.
                  </p>
                  <p className="text-white mb-4 flex justify-center text-center">
                    Together, we can give these animals <br />
                    the loving homes they deserve.
                  </p>
                  <div className="flex justify-center">
                    <button className="px-6 py-3 bg-primaryO text-white rounded-[8px] min-h-[50px] hover:bg-white hover:text-primaryO hover:border-primaryO hover:border transition">
                      <Link to="/pets">Adopt Now</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why choosing Us and Reviews */}
          <div className="max-w-[1280px] mx-auto text-center m-16 g-24">
            <div>
              <h2 className="text-primaryO text-[32px] font-bold mb-4">
                Why Choosing Us
              </h2>

              {/* grid for 3 boxes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-13 justify-center items-center px-4">
                {" "}
                {/* 1st box */}
                <div
                  className="w-full md:w-[300px] min-h-[350px] text-left 
                text-white bg-primaryO p-6 rounded-2xl 
                hover:bg-white hover:text-primaryO mx-auto my-4"
                >
                  <div>
                    <p className="text-[20px] py-1">Great Service!</p>
                  </div>

                  <div className="flex items-center space-x-1">
                    <img
                      src="/images/fourstar.png"
                      alt="Star Rating"
                      className="h-5 w-auto object-contain"
                    />
                    <p className="text-regular ">4.5</p>
                  </div>

                  <div>
                    <p className="text-regular py-1 min-h-[200px]">
                      Exploring the Adoption website revealed a supportive
                      platform with clear guidance, heartfelt stories, and
                      practical legal advice. It empowers hopeful parents with
                      confidence and understanding.
                    </p>
                  </div>
                  <div className="flex gap-4 py-1">
                    <div className="">
                      <img
                        src="/images/Sophie.jpg"
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-col ">
                      <p className="text-regular">Sophie Dubois</p>
                      <p className="text-[14px]">Bangkok</p>
                    </div>
                  </div>
                </div>
                <div
                  className="w-full md:w-[300px] min-h-[350px] text-left 
                text-white bg-primaryO p-6 rounded-2xl 
                hover:bg-white hover:text-primaryO mx-auto my-4"
                >
                  <div>
                    <p className="text-[20px] py-1">Impressed Service!</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img
                      src="/images/fourstar.png"
                      alt="Star Rating"
                      className="h-5 w-auto object-contain"
                    />
                    <p className="text-regular ">4.8</p>
                  </div>
                  <div>
                    <p className="text-regular py-1 min-h-[200px]">
                      Adoption website impressively simplifies the adoption
                      process with clear, compassionate guidance and essential
                      legal insights.
                    </p>
                  </div>
                  <div className="flex gap-4 py-1">
                    <div className="">
                      <img
                        src="/images/Somjai.jpg"
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-col ">
                      <p className="text-regular">Somjai Dudee</p>
                      <p className="text-[14px]">Chonburi</p>
                    </div>
                  </div>
                </div>
                <div
                  className="w-full md:w-[300px] min-h-[350px] text-left 
                text-white bg-primaryO p-6 rounded-2xl 
                hover:bg-white hover:text-primaryO mx-auto my-4"
                >
                  <div>
                    <p className="text-[20px] py-1">Kind Website!</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img
                      src="/images/fivestar.png"
                      alt="Star Rating"
                      className="h-5 w-auto object-contain"
                    />
                    <p className="text-regular ">5.0</p>
                  </div>
                  <div>
                    <p className="text-regular py-1 min-h-[200px]">
                      The Adoption website offers comprehensive support, clear
                      legal advice, and inspiring family stories, making the
                      journey approachable and deeply reassuring.
                    </p>
                  </div>
                  <div className="flex gap-4 py-1">
                    <div className="">
                      <img
                        src="/images/John.jpg"
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-col ">
                      <p className="text-regular">John Wick</p>
                      <p className="text-[14px]">London</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
