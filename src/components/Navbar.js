import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/navbar-logo-tmdb.svg";
import { DataContext } from "../components/DataProvider";
import More from "../assets/more.png";
import Close from "../assets/close.png";
const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  const context = useContext(DataContext);
  const { mediatype, setmediatype, loggedin, setloggedin } = context;
  return (
    <nav className="bg-[#032541] w-full flex justify-center text-white h-auto">
      <div className="flex justify-between items-center max-w-[1440px] w-full px-5 py-5">
        <div className="flex items-center gap-8">
          <Link to="/">
            <img src={Logo} alt="logo" height="20" width="154" />
          </Link>
          <Link to="/filter" onClick={() => setmediatype("movie")}>
            <p className="font-semibold text-base cursor-pointer md:flex hidden">
              Movies
            </p>
          </Link>
          <Link to="/filter" onClick={() => setmediatype("tv")}>
            <p className="font-semibold text-base cursor-pointer md:flex hidden">
              Tv Shows
            </p>
          </Link>
        </div>
        <div className="right-container">
          {loggedin ? (
            <p
              className="font-semibold text-base cursor-pointer md:flex hidden"
              onClick={() => setloggedin(false)}
            >
              Log out
            </p>
          ) : (
            <Link to="/login">
              <p className="font-semibold text-base cursor-pointer md:flex hidden">
                Sign In
              </p>
            </Link>
          )}
          {nav === false ? null : (
            <img
              src={More}
              alt=""
              srcset=""
              className="h-5 cursor-pointer md:hidden"
              onClick={handleNav}
            />
          )}
        </div>
      </div>
      <div
        className={
          nav === false
            ? "fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-[#032541] text-white ease-in-out duration-500 md:hidden  z-10 max-h-[100vh]"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex items-center justify-between px-5 border-b border-gray-600">
          <Link to="/">
            <img src={Logo} alt="logo" height="20" width="154" className="" />
          </Link>
          <div
            onClick={handleNav}
            className="block md:hidden cursor-pointer p-5 "
          >
            {nav === false ? (
              <img
                src={Close}
                alt=""
                srcset=""
                className="h-5 cursor-pointer "
                onClick={() => {
                  handleNav();
                }}
              />
            ) : null}
          </div>
        </div>

        <Link
          to="/filter"
          onClick={() => {
            setmediatype("movie");
            handleNav();
          }}
        >
          <p className="font-semibold p-4 border-b border-gray-600 text-center cursor-pointer">
            Movies
          </p>
        </Link>
        <Link
          to="/filter"
          onClick={() => {
            setmediatype("tv");
            handleNav();
          }}
        >
          <p className="font-semibold p-4 border-b border-gray-600 text-center cursor-pointer ">
            Tv Shows
          </p>
        </Link>
        {loggedin ? (
          <p
            className="font-semibold text-base cursor-pointer text-center p-4 border-b border-gray-600"
            onClick={() => {
              setloggedin(false);
              handleNav();
            }}
          >
            Log out
          </p>
        ) : (
          <Link to="/login">
            <p className="font-semibold text-base cursor-pointer text-center  p-4 border-b border-gray-600">
              Sign In
            </p>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
