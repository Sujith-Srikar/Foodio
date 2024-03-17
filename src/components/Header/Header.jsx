import React from "react";
import { Button, Img } from "../../components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


function Header() {
  return (
    <>
      <header className="flex flex-row justify-between items-center w-full">
        <Link to="/">
          <Img src="images/img_logo.svg" alt="logo_one" className="h-[51px]" />
        </Link>

        <div className="flex flex-row justify-between items-start w-[52%]">
          <NavLink
            to="/"
            size="s"
            as="p"
            className={({ isActive }) =>
              `block pr-4 pl-3 duration-200 ${
                isActive
                  ? "text-red-400 border-b border-red-400"
                  : "text-gray-700"
              }  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            size="s"
            as="p"
            className={({ isActive }) =>
              `block pr-4 pl-3 duration-200 ${
                isActive
                  ? "text-red-400 border-b border-red-400"
                  : "text-gray-700"
              }  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/AboutUs"
            size="s"
            as="p"
            className={({ isActive }) =>
              `block pr-4 pl-3 duration-200 ${
                isActive
                  ? "text-red-400 border-b border-red-400"
                  : "text-gray-700"
              }  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            About us
          </NavLink>
          <NavLink
            to="/order"
            size="s"
            as="p"
            className={({ isActive }) =>
              `block pr-4 pl-3 duration-200 ${
                isActive
                  ? "text-red-400 border-b border-red-400"
                  : "text-gray-700"
              }  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Order online
          </NavLink>
          <NavLink
            to="/reservation"
            size="s"
            as="p"
            className={({ isActive }) =>
              `block pr-4 pl-3 duration-200 ${
                isActive
                  ? "text-red-400 border-b border-red-400"
                  : "text-gray-700"
              }  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
            }
          >
            Reservation
          </NavLink>
          {/* <div className="flex flex-row justify-center">
            <NavLink
              to="/contact"
              size="s"
              as="p"
              className={({ isActive }) =>
                `block pr-4 pl-3 duration-200 ${
                  isActive
                    ? "text-red-400 border-b border-red-400"
                    : "text-gray-700"
                }  lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Contact us
            </NavLink>
          </div> */}
        </div>
        <NavLink
        to="/login">
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
        </NavLink>
      </header>
    </>
  );
}

export default Header;
