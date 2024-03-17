import './Login.css'
import React, { useEffect, useState } from "react";
import Signup from "../SignUp/Signup.jsx";
import { Text,Input } from "../../components";
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <>
      <form>
        <div className="flex h-screen w-full flex-col">
          <div className="relative flex h-full w-full flex-col items-center justify-around">
            <div
              id="card"
              className="flex h-full w-[50%] flex-col items-center justify-between bg-[#f5f5f5] p-20"
            >
              <div className="flex w-full max-w-[550px] flex-col items-start">
                <h3 className="mb-4 text-3xl font-semibold">Login</h3>
                <Text
                  size="s"
                  as="p"
                  className="mb-2 text-black-900 !text-gray-900_cc"
                >
                  Welcome Back! Please enter your details.
                </Text>
              </div>

              <div className="flex w-full flex-col">
                <Input
                  type="email"
                  placeholder="Email"
                  className="my-2 w-full border-b border-black bg-transparent py-4 text-black-900 outline-none focus:outline-none"
                />
              </div>

              <div className="flex w-full flex-col">
                <Input
                  type="password"
                  placeholder="Password"
                  className="my-2 w-full border-b border-black bg-transparent py-4 text-black outline-none focus:outline-none"
                />
              </div>

              <div className="flex w-full items-center justify-between">
                <div className="flex w-full items-center">
                  <input type="checkbox" className="mr-2 h-4 w-4" />
                  <p className="text-sm">Remember Me</p>
                </div>
              </div>

              <p className="cursor-pointer whitespace-nowrap text-sm font-medium underline-offset-2">
                Forgot Password ?
              </p>

              <div className="flex w-full items-center justify-center">
                <p>
                  Don't have an account?{" "}
                  <span className="cursor-pointer font-semibold underline underline-offset-2">
                    Sign up for free
                  </span>
                </p>
              </div>

              <div className="my-4 flex w-full flex-col">
                <NavLink
                to="/">
                  <button
                    type="submit"
                    className="my-2 flex w-full items-center justify-center rounded-md bg-[#060606] p-4 text-center text-[#ffffff]"
                  >
                    Log in
                  </button>
                </NavLink>
                <NavLink to="/signup">
                  <button className="my-2 flex w-full items-center justify-center rounded-md border-2 border-black bg-white p-4 text-center text-[#060606]">
                    Sign Up
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;