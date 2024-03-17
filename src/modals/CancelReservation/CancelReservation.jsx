import React from "react";
import { Img, Text, Button, Heading } from "../../components";
import { X } from "lucide-react";

function CancelReservation({onCancel}) {
  return (
    <div className="fixed inset-0 bg-black-200  bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="flex flex-row justify-center min-w-[1112px]">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-center w-full py-[33px] bg-white-A700 rounded-[16px]">
            <div className="h-[705px] w-full mb-[30px] relative">
              <div className="flex flex-col items-center justify-start w-full top-0 right-0 left-0 m-auto absolute">
                <div className="flex flex-col items-end justify-start w-full">
                  <div className="flex flex-row justify-end w-full z-[1]">
                    <div className="flex flex-col items-end justify-start w-full">
                      <div className="flex flex-row justify-between items-center w-[55%] mr-[58px]">
                        <Heading
                          size="xl"
                          as="h1"
                          className="!font-opensans text-center"
                        >
                          Reservation
                        </Heading>
                        <X size={50} onClick={onCancel} />
                      </div>
                      <div className="flex flex-row justify-end w-full mt-[45px] bg-orange-500">
                        <div className="h-[232px] w-full relative">
                          <div className="flex flex-col items-start justify-start w-3/5 left-[6%] top-[15%] m-auto absolute">
                            <Heading
                              size="2xl"
                              as="h2"
                              className="!text-white-A700"
                            >
                              Are you sure you want to cancel this reservation?
                            </Heading>
                            <div className="flex flex-row justify-start mt-[21px] gap-4">
                              <Img
                                src="images/img_icon_confirm.svg"
                                alt="iconconfirm_one"
                                className="h-[30px] w-[30px] mb-px"
                              />
                              <Text as="p" className="!text-white-A700">
                                The confirmation result has been sent to your
                                email
                              </Text>
                            </div>
                            <div className="flex flex-row justify-start mt-2.5 gap-4">
                              <Img
                                src="images/img_icon_booking_id.svg"
                                alt="iconbookingid"
                                className="h-[30px] w-[30px] mb-0.5"
                              />
                              <Text as="p" className="!text-white-A700">
                                Booking ID : #123456
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between items-start w-[62%] mt-[107px] mr-8">
                        <div className="flex flex-col items-start justify-start w-[48%] gap-[26px]">
                          <Heading as="h3">Reservation detail</Heading>
                          <div className="flex flex-row justify-start items-center gap-5">
                            <Img
                              src="images/img_icon_calender.svg"
                              alt="iconcalender"
                              className="h-[34px] w-[34px]"
                            />
                            <Text as="p" className="!text-gray-800_01">
                              Saturday, 28 february 2022
                            </Text>
                          </div>
                          <div className="h-7 w-7 ml-0.5 relative">
                            <div className="justify-center h-7 w-7 left-0 bottom-0 right-0 top-0 m-auto border-gray-900 border-2 border-solid absolute rounded-[50%]" />
                            <Img
                              src="images/img_vector_21.svg"
                              alt="vectortwentyone"
                              className="h-3 right-[35%] top-[20%] m-auto absolute"
                            />
                          </div>
                        </div>
                        <Button
                          color="red_A700"
                          size="7xl"
                          rightIcon={<X size={42} />}
                          className="mt-[15px] gap-[25px] min-w-[246px] rounded-[20px] text-white-A700"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button
                    color="gray_50_01"
                    size="7xl"
                    className="mt-[-38px] mr-8 gap-5 min-w-[246px] rounded-[20px]"
                    onClick={onCancel}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="flex flex-row justify-start items-center w-[30%] mt-[-19px] gap-5">
                  <Img
                    src="images/img_icon_people.svg"
                    alt="iconpeople_one"
                    className="h-[34px] w-[34px]"
                  />
                  <Text as="p" className="!text-gray-800_01">
                    2 people (Standard seating)
                  </Text>
                </div>
              </div>
              <Text
                as="p"
                className="bottom-[16%] left-[41%] m-auto !text-gray-800_01 absolute"
              >
                04:30 pm
              </Text>
              <div className="flex flex-col items-center justify-start h-[330px] w-[330px] bottom-0 left-[3%] m-auto absolute">
                <div className="flex flex-col items-center justify-start h-[330px] w-[330px] p-8 bg-deep_orange-200 rounded-[50%]">
                  <div className="flex flex-col items-center justify-start h-[265px] w-[265px] p-[27px] bg-deep_orange-200 rounded-[132px]">
                    <Img
                      src="images/img_unsplash.png"
                      alt="unsplash_one"
                      className="h-[210px] w-[210px] rounded-[50%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CancelReservation;
