import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Heading, Img} from "../../components";
import Footer from "../../components/Footer/Footer";
import Header from "components/Header/Header";
import Reservationbox from "./Reservationbox";


export default function ReservationPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [value, setValue] = useState("Party Size");
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Helmet>
        <title>Foodio</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[51px] gap-[120px] bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[91px] max-w-[1300px]">
          <Header />
          {/* <header className="flex flex-row justify-between items-center w-full">
            <Img
              src="images/img_logo.svg"
              alt="logo_one"
              className="h-[51px]"
            />
            <div className="flex flex-row justify-between items-start w-[52%]">
              <Text
                size="s"
                as="p"
                className="mt-px !text-gray-900_a2 !font-opensans opacity-0.8"
              >
                Home
              </Text>
              <Text
                size="s"
                as="p"
                className="mt-px !text-gray-900_cc !font-opensans"
              >
                Menu
              </Text>
              <Text
                size="s"
                as="p"
                className="!text-gray-900_cc !font-opensans"
              >
                About us
              </Text>
              <Text
                size="s"
                as="p"
                className="!text-gray-900_cc !font-opensans"
              >
                Order online
              </Text>
              <div className="flex flex-col items-start justify-start w-[16%] gap-[3px]">
                <Text size="s" as="p" className="!text-red-400 !font-opensans">
                  Reservation
                </Text>
                <div className="h-px w-[53%] bg-red-400" />
              </div>
              <a href="#" className="mt-px">
                <Text
                  size="s"
                  as="p"
                  className="!text-gray-900_cc !font-opensans"
                >
                  Contact us
                </Text>
              </a>
            </div>
            <div className="flex flex-row justify-start gap-[25px]">
              <Button color="white_A700" size="lg" className="w-[50px]">
                <Img src="images/img_group_103.svg" />
              </Button>
              <Button
                size="md"
                shape="round"
                className="font-semibold min-w-[112px]"
              >
                Log in
              </Button>
            </div>
          </header> */}
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-between items-center w-full">
              <Img
                src="images/img_rectangle_150.png"
                alt="image"
                className="w-1/2 object-cover rounded-[20px]"
              />
              <div className="flex flex-col items-start justify-start w-[43%] gap-11">
                <Heading size="3xl" as="h1" className="!font-opensans">
                  Book a table
                </Heading>
                <div className="flex flex-col items-center justify-start gap-10">
                  <div className="w-full border border-gray-300 rounded border-solid p-2 text-gray-800 focus:outline-none focus:border-blue-500">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      placeholderText="Select Date"
                    />
                  </div>
                  <div className="w-full border border-gray-300 rounded border-solid p-2 text-gray-800 focus:outline-none focus:border-blue-500">
                    <DatePicker
                      selected={selectedTime}
                      onChange={(time) => setSelectedTime(time)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeFormat="HH:mm"
                      dateFormat="HH:mm"
                      placeholderText="Select time"
                    />
                  </div>
                  <div className="w-full border border-gray-400 rounded border-solid p-2 text-gray-800 focus:outline-none focus:border-blue-500">
                    <input
                      type="number"
                      value={value}
                      onChange={(event) => setValue(event.target.value)}
                      placeholder="Party size"
                    />
                  </div>
                </div>
                <Button
                  size="5xl"
                  className="w-full font-semibold rounded-[20px]"
                  onClick = {()=> setOpenModal(true)}
                >
                  Book now
                </Button>
              </div>
            </div>
          </div>
        </div>
        {openModal && <Reservationbox onClose={()=> setOpenModal(false)}/>}
        <Footer className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
