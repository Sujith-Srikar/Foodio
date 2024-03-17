import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Heading, RatingBar, Text } from "../../components";
import Footer from "../../components/Footer/Footer";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import Header from "components/Header/Header";

export default function MenuPage() {
  return (
    <>
      <Helmet>
        <title>Foodio</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[51px] gap-[139px] bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[92px] max-w-[1300px]">
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
              <div className="flex flex-col items-start justify-start w-[9%] gap-[3px]">
                <Text size="s" as="p" className="!text-red-400 !font-opensans">
                  Menu
                </Text>
                <div className="h-px w-full bg-red-400" />
              </div>
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
              <Text
                size="s"
                as="p"
                className="mt-px !text-gray-900_cc !font-opensans"
              >
                Reservation
              </Text>
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
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[70px]">
              <Heading
                size="3xl"
                as="h1"
                className="!font-opensans text-center"
              >
                Our Popular Menu
              </Heading>
              <Tabs
                className="flex flex-col items-center justify-start w-full gap-[50px]"
                selectedTabClassName="!text-white-A700 bg-red-400 rounded-[16px] pr-2 pl-2"
                selectedTabPanelClassName="relative tab-panel--selected"
              >
                <TabList className="flex flex-row justify-between w-full gap-[146px] p-[19px]">
                  <Tab className="mt-1 ml-[35px] text-gray-900 text-xl font-normal">
                    All catagory
                  </Tab>
                  <Tab className="text-gray-900 text-xl font-normal">
                    Dinner
                  </Tab>
                  <Tab className="text-gray-900 text-xl font-normal">Lunch</Tab>
                  <Tab className="text-gray-900 text-xl font-normal">
                    Dessert
                  </Tab>
                  <Tab className="mr-[51px] text-gray-900 text-xl font-normal">
                    Drink
                  </Tab>
                </TabList>
                <div className="flex flex-col items-center justify-start w-full gap-12">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full gap-10">
                      {[...Array(5)].map((_, index) => (
                        <TabPanel
                          key={`tab-panel${index}`}
                          className="justify-center w-full absolute"
                        >
                          <div className="flex flex-row justify-center w-full">
                            <div className="flex flex-row justify-start w-full gap-[35px]">
                              <div className="flex flex-col items-center justify-center w-[32%] gap-[34px] p-[30px] bg-white-A700 rounded-[40px]">
                                <Img
                                  src="images/img_pngitem_41084.png"
                                  alt="pngitem41084"
                                  className="w-[270px] mt-1.5 object-cover"
                                />
                                <div className="flex flex-col items-center justify-start w-full mb-1.5">
                                  <div className="flex flex-col items-center justify-start w-full gap-[11px]">
                                    <Heading
                                      size="lg"
                                      as="h2"
                                      className="text-center"
                                    >
                                      Spaghetti
                                    </Heading>
                                    <Text
                                      size="xs"
                                      as="p"
                                      className="!text-gray-800_02 text-center"
                                    >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Egestas consequat mi eget
                                      auctor aliquam, diam.{" "}
                                    </Text>
                                  </div>
                                  <RatingBar
                                    value={5}
                                    isEditable={true}
                                    color="#f54748"
                                    activeColor="#f54748"
                                    size={24}
                                    className="flex justify-between w-[140px] mt-[13px] rounded-[1px]"
                                  />
                                  <div className="flex flex-row justify-between items-center w-[95%] mt-[30px]">
                                    <Heading as="h3">$12.05</Heading>
                                    <Button
                                      size="xl"
                                      className="font-semibold min-w-[158px] rounded-lg"
                                    >
                                      Order now
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center w-[32%] gap-[30px] p-[30px] bg-white-A700 rounded-[40px]">
                                <Img
                                  src="images/img_pngitem_1447549.png"
                                  alt="pngitem1447549"
                                  className="w-[270px] mt-1.5 object-cover"
                                />
                                <div className="flex flex-col items-center justify-start w-full mb-1.5">
                                  <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                                    <Heading
                                      size="lg"
                                      as="h4"
                                      className="text-center"
                                    >
                                      Gnocchi
                                    </Heading>
                                    <Text
                                      size="xs"
                                      as="p"
                                      className="!text-gray-800_02 text-center"
                                    >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Egestas consequat mi eget
                                      auctor aliquam, diam.{" "}
                                    </Text>
                                  </div>
                                  <RatingBar
                                    value={5}
                                    isEditable={true}
                                    color="#f54748"
                                    activeColor="#f54748"
                                    size={24}
                                    className="flex justify-between w-[140px] mt-[13px] rounded-[1px]"
                                  />
                                  <div className="flex flex-row justify-between items-center w-[95%] mt-[30px]">
                                    <Heading as="h5">$12.05</Heading>
                                    <Button
                                      size="xl"
                                      className="font-semibold min-w-[158px] rounded-lg"
                                    >
                                      Order now
                                    </Button>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-center w-[32%] gap-[30px] p-[30px] bg-white-A700 rounded-[40px]">
                                <Img
                                  src="images/img_pngegg.png"
                                  alt="pngegg_one"
                                  className="w-[270px] mt-1.5 object-cover"
                                />
                                <div className="flex flex-col items-center justify-start w-full mb-1.5">
                                  <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                                    <Heading
                                      size="lg"
                                      as="h6"
                                      className="text-center"
                                    >
                                      Rovioli
                                    </Heading>
                                    <Text
                                      size="xs"
                                      as="p"
                                      className="!text-gray-800_02 text-center"
                                    >
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Egestas consequat mi eget
                                      auctor aliquam, diam.{" "}
                                    </Text>
                                  </div>
                                  <RatingBar
                                    value={5}
                                    isEditable={true}
                                    color="#f54748"
                                    activeColor="#f54748"
                                    size={24}
                                    className="flex justify-between w-[140px] mt-[13px] rounded-[1px]"
                                  />
                                  <div className="flex flex-row justify-between items-center w-[95%] mt-[30px]">
                                    <Heading as="h4">$12.05</Heading>
                                    <Button
                                      size="xl"
                                      className="font-semibold min-w-[158px] rounded-lg"
                                    >
                                      Order now
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TabPanel>
                      ))}
                      <div className="flex flex-row w-full gap-[35px]">
                        <div className="flex flex-col items-center justify-center w-full gap-[31px] p-[30px] bg-white-A700 rounded-[40px]">
                          <Img
                            src="images/img_pngwing.png"
                            alt="penne_alla"
                            className="w-[95%] mt-1.5 object-cover"
                          />
                          <div className="flex flex-col items-center justify-start w-full mb-1.5">
                            <div className="flex flex-col items-center justify-start w-full gap-3.5">
                              <Heading
                                size="lg"
                                as="h3"
                                className="text-center"
                              >
                                Penne Alla Vodak
                              </Heading>
                              <Text
                                size="xs"
                                as="p"
                                className="!text-gray-800_02 text-center"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.{" "}
                              </Text>
                            </div>
                            <RatingBar
                              value={5}
                              isEditable={true}
                              color="#f54748"
                              activeColor="#f54748"
                              size={24}
                              className="flex justify-between w-[140px] mt-[13px] rounded-[1px]"
                            />
                            <div className="flex flex-row justify-between items-center w-[95%] mt-[30px]">
                              <Heading as="h4">$12.05</Heading>
                              <Button
                                size="xl"
                                className="font-semibold min-w-[158px] rounded-lg"
                              >
                                Order now
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full gap-[30px] p-[30px] bg-white-A700 rounded-[40px]">
                          <Img
                            src="images/img_pngitem_5290903.png"
                            alt="pngitem5290903"
                            className="w-[270px] mt-1.5 object-cover"
                          />
                          <div className="flex flex-col items-center justify-start w-full mb-1.5">
                            <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                              <Heading
                                size="lg"
                                as="h3"
                                className="text-center"
                              >
                                Risoto
                              </Heading>
                              <Text
                                size="xs"
                                as="p"
                                className="!text-gray-800_02 text-center"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.{" "}
                              </Text>
                            </div>
                            <RatingBar
                              value={5}
                              isEditable={true}
                              color="#f54748"
                              activeColor="#f54748"
                              size={24}
                              className="flex justify-between w-[140px] mt-[13px] rounded-[1px]"
                            />
                            <div className="flex flex-row justify-between items-center w-[95%] mt-[30px]">
                              <Heading as="h4">$12.05</Heading>
                              <Button
                                size="xl"
                                className="font-semibold min-w-[158px] rounded-lg"
                              >
                                Order now
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full gap-[34px] p-[30px] bg-white-A700 rounded-[40px]">
                          <Img
                            src="images/img_pngwing_270x270.png"
                            alt="pngwing_one"
                            className="w-[270px] mt-1.5 object-cover"
                          />
                          <div className="flex flex-col items-center justify-start w-full mb-1.5">
                            <div className="flex flex-col items-center justify-start w-full gap-[11px]">
                              <Heading
                                size="lg"
                                as="h3"
                                className="text-center"
                              >
                                Splitza Signature
                              </Heading>
                              <Text
                                size="xs"
                                as="p"
                                className="!text-gray-800_02 text-center"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.{" "}
                              </Text>
                            </div>
                            <RatingBar
                              value={5}
                              isEditable={true}
                              color="#f54748"
                              activeColor="#f54748"
                              size={24}
                              className="flex justify-between w-[140px] mt-[13px] rounded-[1px]"
                            />
                            <div className="flex flex-row justify-between items-center w-[95%] mt-[30px]">
                              <Heading as="h4">$12.05</Heading>
                              <Button
                                size="xl"
                                className="font-semibold min-w-[158px] rounded-lg"
                              >
                                Order now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-center w-[22%] gap-2.5">
                    <Img
                      src="images/img_arrow_left.svg"
                      alt="arrowleft_one"
                      className="h-[15px] w-[15px]"
                    />
                    <div className="flex flex-row justify-between w-[71%]">
                      <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                        <Button
                          color="gray_900"
                          size="sm"
                          className="tracking-[-0.50px] font-inter font-semibold min-w-[35px] rounded"
                        >
                          1
                        </Button>
                      </div>
                      <div className="flex flex-row w-[48%] gap-2.5">
                        <div className="flex flex-col items-center justify-start h-[35px] w-full">
                          <Button
                            color="gray_200"
                            size="sm"
                            className="tracking-[-0.50px] font-inter font-semibold min-w-[35px] rounded"
                          >
                            2
                          </Button>
                        </div>
                        <div className="flex flex-col items-center justify-start h-[35px] w-full">
                          <Button
                            color="gray_200"
                            size="sm"
                            className="tracking-[-0.50px] font-inter font-semibold min-w-[35px] rounded"
                          >
                            3
                          </Button>
                        </div>
                      </div>
                      <Button
                        color="gray_200"
                        size="xs"
                        className="w-[35px] rounded"
                      >
                        <Img src="images/img_bx_bx_dots_horizontal_rounded.svg" />
                      </Button>
                    </div>
                    <Img
                      src="images/img_akar_icons_chevron_left.svg"
                      alt="akaricons_one"
                      className="h-[15px] w-[15px]"
                    />
                  </div>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
