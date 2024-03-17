import { NavLink } from "react-router-dom";
import { Text, Input } from "../../components";

function Signup() {
  return (
    <form onSubmit="user.php">
      <div className="flex h-screen w-full flex-col">
        <div className="relative flex h-full w-full flex-col items-center justify-around">
          <div
            id="card"
            className="flex h-full w-[50%] flex-col items-center justify-between bg-[#f5f5f5] p-20"
          >
            <div className="flex w-full max-w-[550px] flex-col items-start">
              <h3 className="mb-4 text-3xl font-semibold">Sign Up</h3>
              <p className="mb-2 text-sm">
                Welcome ! Please enter your details.
              </p>
            </div>

            <div className="flex w-full flex-col">
              <Input
                type="email"
                placeholder="Email"
                className="my-2 w-full border-b border-black bg-transparent py-4 text-black outline-none focus:outline-none"
              />
            </div>

            <div className="flex w-full flex-col">
              <Input
                type="password"
                placeholder="Password"
                className="my-2 w-full border-b border-black bg-transparent py-4 text-black outline-none focus:outline-none"
              />
            </div>

            <div className="flex w-full flex-col">
              <Input
                type="text"
                placeholder="First Name"
                className="my-2 w-full border-b border-black bg-transparent py-4 text-black outline-none focus:outline-none"
              />
            </div>

            <div className="flex w-full flex-col">
              <Input
                type="text"
                placeholder="Last Name"
                className="my-2 w-full border-b border-black bg-transparent py-4 text-black outline-none focus:outline-none"
              />
            </div>

            <div className="my-4 flex w-full flex-col items-center">
            <NavLink
            to="/">
                <button
                  type="submit"
                  className="my-2 flex w-full items-center justify-center rounded-md bg-[#060606] p-4 text-center text-[#ffffff]"
                >
                  Create Account
                </button>
            </NavLink>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Signup;
