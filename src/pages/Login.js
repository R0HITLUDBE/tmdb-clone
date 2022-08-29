import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#6b9bc4]">
      <div className=" flex flex-col gap-5 bg-[#fefffe]  py-5 px-10 shadow-lg rounded-lg ">
        <h3 className="text-lg font-semibold">LOGIN</h3>
        <div>
          <label>Email</label> <br />
          <input
            type="text"
            className="border border-[#b7b7b7] rounded px-2 py-1 "
          />
        </div>
        <div>
          <label>Password</label> <br />
          <input
            type="text"
            className="border border-[#b7b7b7] rounded px-2 py-1  "
          />
        </div>
        <input
          type="button"
          value="LOGIN"
          className="text-white bg-[#ee5885] rounded py-1 cursor-pointer"
        />
        <p>
          Need an account?{" "}
          <Link to="/signup" className="underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
