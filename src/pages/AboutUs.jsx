import React, { useEffect } from "react";
import ImageSlider from "../assets/ImageSlider";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <>
      <div className="flex flex-col items-center w-full max-w-[1280px] mx-auto text-center mt-8 g-24">
        {/* slide bar */}
        <div>
          <ImageSlider />
        </div>

        {/* Our Mission */}
        <div className="max-w-[1280px] mx-auto text-center mt-8 g-24">
          <h2 className="text-primaryO text-header mb-4">Our Mission</h2>
          <p className="text-regular text-black">
            At Ma Adopt Kan, our mission is simple: to provide loving homes for
            pets in need. We work with shelters, rescue groups, <br />
            and foster families to ensure every animal receives the care, love,
            and support they deserve before finding their forever home.
          </p>
        </div>

        {/* dark box with button */}
        <div className="max-w-full mx-auto text-center mt-8">
          <div
            className="max-w-full md:w-[1000px] mx-auto mt-12 flex flex-col md:flex-row items-center gap-8 
        bg-[url('/src/assets/catSleep.jpg')] bg-cover bg-center p-10 rounded-[8px] min-h-[400px] md:min-h-[400px]"
          >
            <div className="w-full md:w-[450px] text-center md:text-left flex-col gap-24">
              <h3 className="text-header font-bold mb-4 text-primaryO flex justify-center">
                Join Our Cause
              </h3>
              <p className="text-white mb-4 flex justify-center text-center ">
                Looking for a furry companion? Start your adoption journey
                today! You can make a difference by opening your home to a pet
                in need.
              </p>
              <p className="text-white mb-4 flex justify-center text-center">
                Together, we can give these animals the loving homes they
                deserve.
              </p>
              <div className="flex justify-center">
                <button
                  className="px-6 py-3 bg-primaryO text-white rounded-md min-h-[50px] md:min-h-[50px]
            hover:bg-white hover:text-primaryO hover:border-primaryO hover:border-1 transition
            "
                >
                  Adopt Now
                </button>
              </div>
            </div>
          </div>

          {/* Why choosing Us and Reviews */}
          <div className="max-w-[1280px] mx-auto text-center mt-8 g-24 pb-10">
            <h2 className="text-primaryO text-[32px] font-bold mb-4">
              Why Choosing Us
            </h2>
            <div className="grid grid-cols-3 gap-13 justify-center items-center">
              <div
                className="max-w-[350px] md:w-[300px] min-h-[350px] md:min-h-[350px] text-left 
                text-white bg-primaryO p-6 rounded-2xl 
                hover:bg-white hover:text-primaryO"
              >
                <div>
                  <img src="" alt="" />
                  <p className="text-[20px] py-1">Great Service!</p>
                </div>
                <div>
                  <p className="text-regular py-1">4.5</p>
                </div>
                <div>
                  <p className="text-regular py-1">
                    Exploring the Adoption website revealed a supportive
                    platform with clear guidance, heartfelt stories, and
                    practical legal advice. It empowers hopeful parents with
                    confidence and understanding.
                  </p>
                </div>
                <div className="flex gap-4 py-1">
                  <div className="w-10 h-10 bg-black rounded-full "></div>
                  <div className="flex-col ">
                    <p className="text-regular">Sophie Dubois</p>
                    <p className="text-[14px]">Bangkok</p>
                  </div>
                </div>
              </div>

              <div
                className="max-w-[350px] md:w-[300px] min-h-[350px] md:min-h-[350px] text-left 
                text-white bg-primaryO p-6 rounded-2xl 
                hover:bg-white hover:text-primaryO"
              >
                <div>
                  <img src="" alt="" />
                  <p className="text-[20px] py-1">Great Service!</p>
                </div>
                <div>
                  <p className="text-regular py-1">4.5</p>
                </div>
                <div>
                  <p className="text-regular py-1">
                  Adoption website impressively simplifies the adoption process with clear,
                  compassionate guidance and essential legal insights.
                  </p>
                </div>
                <div className="flex gap-4 py-1">
                  <div className="w-10 h-10 bg-black rounded-full "></div>
                  <div className="flex-col ">
                    <p className="text-regular">Sophie Dubois</p>
                    <p className="text-[14px]">Bangkok</p>
                  </div>
                </div>
              </div>

              <div
                className="max-w-[350px] md:w-[300px] min-h-[350px] md:min-h-[350px] text-left 
                text-white bg-primaryO p-6 rounded-2xl 
                hover:bg-white hover:text-primaryO"
              >
                <div>
                  <img src="" alt="" />
                  <p className="text-[20px] py-1">Great Service!</p>
                </div>
                <div>
                  <p className="text-regular py-1">4.5</p>
                </div>
                <div>
                  <p className="text-regular py-1">
                  The Adoption website offers comprehensive support, 
                  clear legal advice, and inspiring family stories, 
                  making the journey approachable and deeply reassuring.
                  </p>
                </div>
                <div className="flex gap-4 py-1">
                  <div className="w-10 h-10 bg-black rounded-full "></div>
                  <div className="flex-col ">
                    <p className="text-regular">Sophie Dubois</p>
                    <p className="text-[14px]">Bangkok</p>
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
