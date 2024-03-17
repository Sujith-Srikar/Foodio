import React, { useRef,useState } from "react";
import {
  Text,
  Heading,
  Button,
  TextArea,
  Input,
} from "../../components";
import { CircleX } from "lucide-react";
import { Calendar } from "lucide-react";
import { Clock } from "lucide-react";
import { User } from "lucide-react";
import Reservationhasbeenconfirmed from "../../modals/Reservationhasbeenconfirmed/index.jsx";

// destructure the parameters properly using {}
function Reservationbox({ onClose }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const confirmbutton = () => {
    setHasConfirmed(true)
    // onClose()
  }

  const [hasConfirmed,setHasConfirmed] = useState(false)

  return (
    <>
      <div
        className="fixed inset-0 bg-black-900  bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
        ref={modalRef}
        onClick={closeModal}
      >
        <div className="mx-10  w-[1112px] flex flex-col justify-evenly items-stretch  gap-5 bg-white-A700 rounded-[16px] ">
          <Button className="place-self-end" size="xs" onClick={onClose}>
            <CircleX />
          </Button>
          <Heading className="text-center">Reservation</Heading>

          {/* Sub-Heading */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-full h-16 px-[35px] py-[17px] !text-black-900 bg-light_blue-A100 max-w-[992px] rounded-[20px]">
              <Text>
                <span className="text-gray-800_01">
                  Due to limited availability, we can hold this table for you
                  for
                </span>
                <span className="text-black-900"></span>
                <span className="text-gray-900 font-semibold">
                  {" "}
                  5:00 minutes
                </span>
              </Text>
            </div>
          </div>

          <div className="flex flex-row p-5 px-10">
            {/* Left-Part */}
            <div className="flex flex-row justify-between items-start w-full ">
              <div className=" flex flex-col items-start justify-start w-[80%] gap-[9px]">
                <Heading as="h2" className="!text-black-900">
                  Data order
                </Heading>
                <Input
                  size="sm"
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="w-full"
                  required
                />
                <Input
                  size="sm"
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="w-full"
                  required
                />
                <Input
                  size="sm"
                  type="number"
                  name="phoneNumber"
                  placeholder="Phone number"
                  className="w-full gap-4"
                  required
                />
                <Input
                  size="sm"
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full"
                  required
                />
                <TextArea
                  size="sm"
                  name="groupseventynin"
                  placeholder="Add a special request"
                  className="w-full text-gray-500"
                  required
                />
                <Button
                  size="2xl"
                  className="w-full rounded-lg"
                  onClick={() => {
                    confirmbutton();
                  }}
                >
                  Confirm reservation
                </Button>
              </div>
            </div>

            {/* Right-Part */}
            <div className="flex flex-col items-start justify-start w-[50%] gap-6 p-[34px] bg-blue_gray-100_01 rounded-[20px]">
              <div className="flex flex-col items-start justify-start w-full gap-8">
                <div className="flex flex-row justify-start ml-[5px]">
                  <Heading as="h3">Reservation detail</Heading>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <Calendar />
                  <Text as="p" className="!text-gray-800_01">
                    Saturday, 28 february 2022
                  </Text>
                </div>
                <div className="flex flex-row justify-start w-[49%]">
                  <div className="flex flex-row justify-between items-center w-full">
                    <Clock />
                    <Text as="p" className="!text-gray-800_01">
                      04:30 pm
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <User />
                  <Text as="p" className="!text-gray-800_01 text-start">
                    2 people (Standard seating)
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {hasConfirmed && <Reservationhasbeenconfirmed onModify={()=>setHasConfirmed(false)} />}
      {/* <div
          className={`reservation-modal ${open ? "open" : ""} min-w-[1112px] h-screen`}
          onClick={onClose}
        >
          <div
            className="flex flex-row justify-center w-[50%] fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex flex-row justify-center w-full p-10 bg-white-A700 rounded-[16px]">
              <div className="flex flex-col items-center justify-start w-[97%] mb-5 gap-3.5 mx-5">
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-col items-end justify-start w-full gap-[27px]">
                    <div className="flex flex-row justify-between items-start w-[61%]">
                      <Heading
                        size="xl"
                        as="h1"
                        className="mt-[15px] !font-opensans text-center"
                      >
                        Reservation
                      </Heading>
                      <Img
                        src="images/img_group_7736.svg"
                        alt="image"
                        className="h-5 w-5"
                        onClick={onClose}
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-[47px]">
                      <div className="flex flex-row justify-center w-full">
                        <Text
                          as="p"
                          className="flex justify-center items-center w-full h-16 px-[35px] py-[17px] !text-black-900 bg-light_blue-A100 max-w-[992px] rounded-[20px]"
                        >
                          <span className="text-gray-800_01">
                            Due to limited availability, we can hold this table
                            for you for
                          </span>
                          <span className="text-black-900"></span>
                          <span className="text-gray-900 font-semibold">
                            5:00 minutes
                          </span>
                        </Text>
                      </div>
                      <div className="flex flex-row justify-between items-start w-full">
                        <div className="flex flex-col items-start justify-start w-[48%] gap-[22px]">
                          <Heading as="h2" className="!text-black-900">
                            Data order
                          </Heading>
                          <Input
                            size="sm"
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            className="w-full"
                          />
                          <Input
                            size="sm"
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            className="w-full"
                          />
                          <Input
                            size="sm"
                            type="number"
                            name="phoneNumber"
                            placeholder="Phone number"
                            prefix={
                              <Img
                                src="images/img_group_94dropdown.svg"
                                alt="Group 94:Dropdown "
                              />
                            }
                            className="w-full gap-4"
                          />
                          <Input
                            size="sm"
                            type="email"
                            name="email"
                            placeholder="Email address"
                            className="w-full"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-[44%] gap-6 p-[34px] bg-blue_gray-100_01 rounded-[20px]">
                          <div className="flex flex-col items-start justify-start w-[94%] gap-8">
                            <div className="flex flex-row justify-start ml-[5px]">
                              <Heading as="h3">Reservation detail</Heading>
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <Img
                                src="images/img_icon_calender.svg"
                                alt="iconcalender"
                                className="h-[34px] w-[34px]"
                              />
                              <Text as="p" className="!text-gray-800_01">
                                Saturday, 28 february 2022
                              </Text>
                            </div>
                            <div className="flex flex-row justify-start w-[49%]">
                              <div className="flex flex-row justify-between items-center w-full">
                                <Img
                                  src="images/img_icon_time.svg"
                                  alt="icontime_one"
                                  className="h-[34px] w-[34px] mb-px"
                                />
                                <Text as="p" className="!text-gray-800_01">
                                  04:30 pm
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-between items-center w-[95%]">
                            <Img
                              src="images/img_icon_people.svg"
                              alt="iconpeople_one"
                              className="h-[34px] w-[34px]"
                            />
                            <Text as="p" className="!text-gray-800_01">
                              2 people (Standar seating)
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-start w-[99%]">
                  <div className="flex flex-col items-center justify-start w-[49%] mt-[9px] gap-6">
                    <SelectBox
                      size="xs"
                      indicator={
                        <Img
                          src="images/img_rectangle_21.svg"
                          alt="Rectangle 21"
                        />
                      }
                      name="selectan"
                      placeholder="Select an occasion"
                      options={dropDownOptions}
                      className="w-full gap-px border-gray-400 border border-solid rounded-lg"
                    />
                    <TextArea
                      size="sm"
                      name="groupseventynin"
                      placeholder="Add a special request"
                      className="w-full text-gray-500"
                    />
                    <Button
                      size="2xl"
                      className="w-full rounded-lg"
                      onClick={() => setOpenModal(true)}
                    >
                      Confirm reservation
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[42%] gap-10">
                    <Heading as="h4" className="!text-black-900">
                      Restaurant informations
                    </Heading>
                    <Text as="p" className="!text-gray-800_01">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </>
  );
}

export default Reservationbox;
