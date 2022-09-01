import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../components/DataProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passworderror, setpassworderror] = useState("");
  const context = useContext(DataContext);
  const { loggedin, setloggedin } = context;

  const submitHandler = () => {
    const passwordvalid = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
    if (password === "") {
    } else {
      if (!passwordvalid.test(password)) {
        setpassworderror(
          "Enter a valid password (password should contain at least one Capital letter, and one Numeric and should be a minimum 8 character) "
        );
      }
    }
    if (localStorage.getItem(email) == password) {
      setloggedin(true);
      navigate("/");
    } else {
      alert("invalid credentials");
    }
  };

  useEffect(() => {
    if (loggedin) {
      return navigate("/");
    }
  });

  useEffect(() => {
    const passwordvalid = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
    if (password === "") {
      setpassworderror("");
    } else {
      if (!passwordvalid.test(password)) {
        setpassworderror(
          "Enter a valid password (password should contain at least one Capital letter, and one Numeric and should be a minimum 8 character) "
        );
      } else {
        setpassworderror("");
      }
    }
  }, [password]);

  return (
    <div className="w-full  flex items-center justify-center h-screen bg-[#dbdbdb] ">
      <div className=" flex flex-col min-w-[388px] gap-5 bg-[#fefffe]  py-5 px-10 shadow-lg rounded-lg ">
        <h3 className="text-lg font-semibold">LOGIN</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler();
          }}
          className="p-2 flex flex-col gap-5"
        >
          <div>
            <label>Email</label> <br />
            <input
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="border w-full border-[#b7b7b7] rounded px-2 py-1 "
            />
          </div>
          <div>
            <label>Password</label> <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="border w-full border-[#b7b7b7] rounded px-2 py-1  "
            />
          </div>
          <span className="w-[292px] text-red-600">{passworderror}</span>
          <input
            type="submit"
            value="LOGIN"
            className="text-white bg-[#ee5885] rounded py-1 cursor-pointer"
          />
        </form>
        <p>
          Need an account?{" "}
          <Link to="/signup" className="underline">
            Sign Up
          </Link>
        </p>
        <p
          className="cursor-pointer text-center"
          onClick={() => {
            setloggedin(true);
            navigate("/");
          }}
        >
          Guest Login
        </p>
      </div>
    </div>
  );
};

export default Login;
