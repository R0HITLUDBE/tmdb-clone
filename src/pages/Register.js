import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../components/DataProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const context = useContext(DataContext);
  const { loggedin, setloggedin } = context;
  const [passworderror, setpassworderror] = useState("");

  const submitHandler = () => {
    const passwordvalid = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/;
    if (password === "") {
    } else {
      if (!passwordvalid.test(password)) {
        setpassworderror(
          "Enter a valid password (password should contain at least one Capital letter, and one Numeric and should be a minimum 8 character) "
        );
      } else {
        if (localStorage.getItem(email)) {
          alert("User already exists");
        } else {
          localStorage.setItem(email, password);
          setloggedin(true);
          navigate("/");
        }
      }
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
    <div className="w-full  flex items-center justify-center h-screen bg-[#dbdbdb]">
      <div className=" flex flex-col gap-5 min-w-[388px] bg-[#fefffe]  py-5 px-10 shadow-lg rounded-lg ">
        <h3 className="text-lg font-semibold">SIGN UP</h3>
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
            value="SIGNUP"
            className="text-white bg-[#ee5885] rounded py-1 cursor-pointer"
          />
        </form>
        <p>
          Already a user?
          <Link to="/login" className="underline">
            LOGIN
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
