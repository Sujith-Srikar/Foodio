import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img, RatingBar } from "../../components";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { Link } from "react-router-dom";

export default function HomepagePage() {
  return (
    <>
      <Helmet>
        <title>Foodio</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[129px] bg-gray-50">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[70px] p-[50px] bg-gradient">
            <Header />
            {/* <header className="flex flex-row justify-between items-center w-full">
              <Img src="images/img_logo.svg" alt="logo_one" className="h-[51px]" />
              <div className="flex flex-row justify-between items-start w-[52%]">
                <div className="flex flex-col items-center justify-start w-[9%] gap-[3px]">
                  <Text size="s" as="p" className="!text-red-400 !font-opensans">
                    Home
                  </Text>
                  <div className="h-px w-full bg-red-400" />
                </div>
                <Text size="s" as="p" className="mt-px !text-gray-900_cc !font-opensans">
                  Menu
                </Text>
                <Text size="s" as="p" className="!text-gray-900_cc !font-opensans">
                  About us
                </Text>
                <Text size="s" as="p" className="!text-gray-900_cc !font-opensans">
                  Order online
                </Text>
                <Text size="s" as="p" className="mt-px !text-gray-900_cc !font-opensans">
                  Reservation
                </Text>
                <div className="flex flex-row justify-center">
                  <a href="#">
                    <Text size="s" as="p" className="!text-gray-900_cc !font-opensans">
                      Contact us
                    </Text>
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-[25px]">
                <Button color="white_A700" size="lg" className="w-[50px]">
                  <Img src="images/img_group_103.svg" />
                </Button>
                <Button size="md" shape="round" className="font-semibold min-w-[112px]">
                  Log in
                </Button>
              </div>
            </header> */}
            <div className="flex flex-row justify-between items-center w-full mb-5 max-w-[1240px]">
              <div className="flex flex-row justify-center w-[47%]">
                <div className="flex flex-col items-start justify-start w-full">
                  <Heading
                    size="4xl"
                    as="h1"
                    className="!text-gray-900_02 !font-opensans"
                  >
                    <span className="text-gray-900_02">
                      Best Restaurant
                      <br />
                      In{" "}
                    </span>
                    <span className="text-red-400">Town.</span>
                  </Heading>
                  <Text as="p" className="w-[91%] mt-[15px] !text-gray-800">
                    We provide best food in town, we provide home delivery and
                    dine in services.
                  </Text>
                  <div className="flex flex-row justify-start mt-9 gap-6">
                    <Button
                      size="5xl"
                      shape="round"
                      className="font-semibold min-w-[232px]"
                    >
                      Order now
                    </Button>
                    <Link to="/reservation">
                      <Button
                        color="red_400_19"
                        size="5xl"
                        shape="round"
                        className="font-semibold min-w-[232px]"
                      >
                        Reservation
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_illustration.png"
                alt="illustration"
                className="w-[48%] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-center items-start w-full gap-[13px] p-3.5 bg-green-50">
            <div className="h-[646px] w-[48%] ml-[149px] relative">
              <div className="flex flex-col items-end justify-start w-[89%] bottom-0 left-0 m-auto absolute">
                <div className="flex flex-row justify-end items-center w-full">
                  <Img
                    src="images/img_kisspng_leaf_pe.png"
                    alt="kisspngleafpe"
                    className="w-[32%] z-[1] object-cover"
                  />
                  <Img
                    src="images/img_kindpng_3443995.png"
                    alt="kindpng3443995"
                    className="w-[96%] ml-[-160px] object-cover"
                  />
                </div>
                <Img
                  src="images/img_kisspng_leaf_pe_117x110.png"
                  alt="kisspngleafpe"
                  className="w-[19%] mt-[-74px] mr-[217px] object-cover"
                />
              </div>
              <Img
                src="images/img_kisspng_leaf_pe_158x154.png"
                alt="kisspngleafpe"
                className="h-[158px] w-[24%] right-0 top-0 m-auto object-cover absolute"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-[31%] mt-[91px] mr-[149px] gap-[35px]">
              <div className="flex flex-col items-start justify-start w-full gap-4">
                <Heading
                  size="3xl"
                  as="h2"
                  className="w-4/5 !text-red-400 !font-tinos !leading-[110%]"
                >
                  <span className="text-gray-900_02 font-opensans">
                    Our Most <br />
                    Popular{" "}
                  </span>
                  <span className="text-red-400 font-opensans">Dish.</span>
                </Heading>
                <Text as="p" className="!text-gray-800_01">
                  This dish is full of flavor and nutrition! Quinoa is a
                  complete protein, providing all the essential amino acids your
                  body needs, and is also a good source of fiber.
                </Text>
              </div>
              <Button
                size="5xl"
                shape="round"
                className="font-semibold min-w-[232px]"
              >
                Order now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-[70px] max-w-[1112px]">
          <Heading size="3xl" as="h2" className="!font-opensans text-center">
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
              <Tab className="text-gray-900 text-xl font-normal">Dinner</Tab>
              <Tab className="text-gray-900 text-xl font-normal">Lunch</Tab>
              <Tab className="text-gray-900 text-xl font-normal">Dessert</Tab>
              <Tab className="mr-[51px] text-gray-900 text-xl font-normal">
                Drink
              </Tab>
            </TabList>
            <div className="flex flex-col items-center justify-start w-full gap-12">
              {[...Array(5)].map((_, index) => (
                <TabPanel
                  key={`tab-panel${index}`}
                  className="items-center w-full absolute"
                >
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="justify-center w-full gap-[35px] grid-cols-3 grid min-h-[auto]">
                        <div className="flex flex-col items-center justify-center w-full gap-[34px] p-[30px] bg-white-A700 rounded-[40px]">
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
                        <div className="flex flex-col items-center justify-center w-full gap-[30px] p-[30px] bg-white-A700 rounded-[40px]">
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
                        <div className="flex flex-col items-center justify-center w-full gap-[30px] p-[30px] bg-white-A700 rounded-[40px]">
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
                        <div className="flex flex-col items-center justify-center w-full gap-[31px] p-[30px] bg-white-A700 rounded-[40px]">
                          <Img
                            src="images/img_pngwing.png"
                            alt="pngwing_one"
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
                </TabPanel>
              ))}
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
        <div className="flex flex-row justify-center w-full max-w-[1112px]">
          <div className="flex flex-col items-center justify-start w-full">
            <Heading size="3xl" as="h2" className="!font-opensans text-center">
              Our Popular Chef
            </Heading>
            <div className="flex flex-row w-full mt-[53px] gap-10">
              <div className="flex flex-col items-center justify-start w-full gap-[43px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full bg-gray-900_04 rounded-[50px]">
                    <Img
                      src="images/img_image_1.png"
                      alt="imageone_one"
                      className="w-full object-cover rounded-[50px]"
                    />
                  </div>
                </div>
                <Heading as="h3">Betran Komar</Heading>
                <Text size="lg" as="p" className="!text-gray-500_01">
                  Head chef
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[43px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full pt-2 bg-gradient1 rounded-[50px]">
                      <Img
                        src="images/img_image_3.png"
                        alt="imagethree_one"
                        className="w-full object-cover rounded-[50px]"
                      />
                    </div>
                  </div>
                </div>
                <Heading as="h4">Ferry Sauwi</Heading>
                <Text size="lg" as="p" className="!text-gray-500_01">
                  Chef
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[43px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full bg-lime-900 rounded-[50px]">
                    <Img
                      src="images/img_image_2.png"
                      alt="imagetwo_one"
                      className="w-full object-cover rounded-[50px]"
                    />
                  </div>
                </div>
                <Heading as="h5">Iswan Dracho</Heading>
                <Text size="lg" as="p" className="!text-gray-500_01">
                  Chef
                </Text>
              </div>
            </div>
            <Button
              size="5xl"
              shape="round"
              className="mt-[89px] font-semibold min-w-[235px]"
            >
              View all
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-[55%] gap-[43px]">
          <div className="flex flex-row justify-center w-full max-w-[648px]">
            <Heading size="3xl" as="h2" className="!font-opensans text-center">
              What Our Customers Say
            </Heading>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-center items-center w-full">
              <div className="flex flex-col items-center justify-start h-[60px] w-[60px] z-[1]">
                <Button color="white_A700" className="w-[60px] shadow-xs">
                  <Img src="images/img_group_30.svg" />
                </Button>
              </div>
              <div className="flex flex-row justify-center items-center w-[97%] ml-[-30px]">
                <div className="flex flex-row justify-center w-[97%]">
                  <div className="flex flex-col items-center justify-start w-full gap-4 p-[50px] bg-white-A700 rounded-[16px]">
                    <div className="flex flex-row justify-center w-[97%]">
                      <div className="flex flex-row justify-center w-full">
                        <div className="h-[198px] w-full relative">
                          <Img
                            src="images/img_group_7730.svg"
                            alt="image"
                            className="justify-center h-[198px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <Text
                            as="p"
                            className="w-[87%] bottom-[16%] right-0 left-0 m-auto !text-gray-800_01 text-center absolute"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Facilisis ultricies at eleifend proin. Congue
                            nibh nulla malesuada ultricies nec quam{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[43%] gap-2">
                      <Img
                        src="images/img_ellipse_28.png"
                        alt="circleimage"
                        className="h-20 w-20 rounded-[50%]"
                      />
                      <div className="flex flex-col items-center justify-start w-[67%] gap-2">
                        <Heading size="s" as="h2" className="text-center">
                          Starla Virgoun
                        </Heading>
                        <Text
                          size="s"
                          as="p"
                          className="!text-gray-800_01 text-center"
                        >
                          Financial advisor
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start h-[60px] w-[60px] ml-[-30px]">
                  <Button color="white_A700" className="w-[60px] shadow-sm">
                    <Img src="images/img_group_32.svg" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full px-14 py-[93px] bg-red-100 max-w-[1112px] rounded-[24px]">
          <div className="flex flex-col items-center justify-start w-[71%] mt-[7px] gap-10 mx-[109px]">
            <Heading size="3xl" as="h2" className="!font-opensans text-center">
              Hungry? We are open now..
            </Heading>
            <div className="flex flex-row justify-start w-[70%] gap-6">
              <Button
                size="5xl"
                shape="round"
                className="font-semibold min-w-[232px]"
              >
                Order now
              </Button>
              <Link to="/reservation">
                <Button
                  color="white_A700_7f"
                  size="5xl"
                  shape="round"
                  className="font-semibold min-w-[232px]"
                >
                  Reservation
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
