import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import React from "react";
import { Text, Heading, Button, Img, RatingBar } from "../../components";

function AboutUS() {
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full pt-[50px] gap-[105px] bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[78px] max-w-[1300px]">
          <Header />
          {/* About-Us First Section */}
          <div className="flex flex-col items-center justify-center w-full gap-[120px]">
            <div className="flex flex-row items-center justify-center w-full gap-[100px]">
              <div className="flex flex-col items-center justify-start h-[543px] w-[543px]">
                <div className="flex flex-col items-center justify-center h-[500px] w-[500px] p-[20px] bg-gray-400 rounded-[271px]">
                  <Img
                    src="images/aboutus-chef.png"
                    alt="temp-chef-image"
                    className="h-[550px] w-[550px]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[39%] gap-[35px]">
                <div className="flex flex-col items-start justify-start w-full gap-4">
                  <Heading size="3xl" as="h1" className="w-[68%]">
                    <span className="text-gray-700 font-opensans">
                      About Our
                      <br />
                    </span>
                    <span className="text-red-400 font-opensans">
                      Restaurant
                    </span>
                  </Heading>
                  <Text as="p" className="!leading-[200%] text-gray-600">
                    We're more than just a dining destination – we're a culinary
                    sanctuary. With a passion for perfection, we serve up
                    memorable moments on every plate.
                  </Text>
                  <Button
                    size="5xl"
                    shape="round"
                    className="font-semibold min-w-[200px]"
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* About-Us Second Section */}
          <div className="flex flex-col items-center justify-center w-full gap-[120px]">
            <div className="flex flex-row items-center justify-center w-full gap-[100px]">
              <div className="flex flex-col items-start justify-start w-[39%] gap-[35px]">
                <div className="flex flex-col items-start justify-start w-full gap-4">
                  <Text as="p" className="!leading-[200%] text-gray-600">
                    Step into a world of rich spices, vibrant colors, and
                    tantalizing aromas with our authentic Indian cuisine. From
                    the sizzle of tandoori dishes to the creamy goodness of
                    butter chicken, each bite is a journey through the diverse
                    flavors of India. Indulge in the warmth of comforting
                    curries, the crunch of crispy samosas, and the sweetness of
                    decadent desserts.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start h-[543px] w-[543px]">
                <div className="flex flex-col items-center justify-center h-[520px] w-[520px] p-[20px] bg-gray-400 rounded-[271px]">
                  <Img
                    src="images/aboutus-dish.jpg"
                    alt="temp-dish-image"
                    className="h-[400px] w-[400px] rounded-[50%]"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* About-Us Third Section */}
          <div className="flex flex-row items-start justify-start w-full gap-[120px]">
            {/* <div className="flex flex-row items-center justify-center w-full gap-[100px]"> */}
            <Img
              src="images/aboutus-owner.jpg"
              alt="temp-owner-image"
              className="w-[39%] object-cover pb-4"
            />
            {/* <div className="flex flex-col items-start justify-start w-[39%] gap-[35px] pt-[5%]"> */}
            <div className="flex flex-col items-start justify-start w-full gap-4">
              <Heading size="3xl" as="h1" className="w-[72%]">
                <span className="text-red-400 font-opensans">Owner</span>
                <span className="text-gray-700 font-opensans">
                  & Executive
                  <br />
                </span>
                <span className="text-gray-700 font-opensans">Chef</span>
              </Heading>
              <Text size="3xl" as="p" className="!text-gray-800_01 font-bold underline">
                Sujith Srikar
              </Text>
              <div className="w-[70%]">
                <Text
                  size="2xl"
                  as="p"
                  className="!leading-[200%] text-gray-600"
                >
                  Meet our esteemed owner, a renowned Indian chef whose culinary
                  expertise knows no bounds. With years of experience and a
                  passion for creating authentic Indian flavors, our chef brings
                  a touch of magic to every dish.
                </Text>
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutUS;
