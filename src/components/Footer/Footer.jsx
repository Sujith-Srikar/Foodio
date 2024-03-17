import React from "react";
import { Text, Heading, Button, Img } from "..";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center w-full px-14 py-[70px] bg-gray-900_01">
      <div className="flex flex-row justify-center w-full mb-0.5 mx-auto max-w-[1113px]">
        <div className="flex flex-col items-center justify-center w-full gap-[61px]">
          <div className="flex flex-row justify-between items-start w-full">
            <div className="flex flex-row justify-center w-[32%]">
              <div className="flex flex-col items-start justify-start w-full gap-[42px]">
                <Img
                  src="images/img_logo_red_400.svg"
                  alt="logo_three"
                  className="h-[51px]"
                />
                <Text as="p">
                  Crave more? Come back for seconds! See you soon at Foodio!
                </Text>
                <div className="flex flex-row justify-between w-[69%] ml-[3px]">
                  <Button color="gray_300" className="w-[60px]">
                    <Img src="images/img_group_53.png" />
                  </Button>
                  <Button color="blue_gray_100_02" className="w-[60px]">
                    <Img src="images/img_instagram.png" />
                  </Button>
                  <Button color="blue_gray_100_02" className="w-[60px]">
                    <Img src="images/img_group_51.png" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[12%] mt-[9px] gap-[31px]">
              <Heading as="h4" className="!text-red-400">
                Page
              </Heading>
              <div className="flex flex-col items-start justify-start w-full gap-[23px]">
                <Text as="p">Home</Text>
                <Text as="p">Menu</Text>
                <Text as="p">Order online</Text>
                <Text as="p">Catering</Text>
                <Text as="p">Reservation</Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[14%] mt-[5px] gap-[35px]">
              <Heading as="h4" className="!text-red-400">
                Information
              </Heading>
              <div className="flex flex-col items-start justify-start gap-6">
                <Text as="p">About us</Text>
                <Text as="p">Testimonial</Text>
                <Text as="p">Event</Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[26%] mt-[5px] gap-[31px]">
              <Heading as="h4" className="!text-red-400">
                Get in touch
              </Heading>
              <div className="flex flex-col items-start justify-start w-full gap-[21px]">
                <Text as="p" className="!leading-[153%]">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                </Text>
                <a
                  href="mailto:abc@example.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text size="xl" as="p" className="text-xl">
                    abc@example.com
                  </Text>
                </a>
                <Text as="p">+123 4567 8901</Text>
              </div>
            </div>
          </div>
          <Text as="p" className="!text-gray-300">
            <span className="text-gray-300">Copyright </span>
            <span className="text-gray-300">©</span>
            <span className="text-gray-300">2024</span>
          </Text>
        </div>
      </div>
    </footer>
  );
}
