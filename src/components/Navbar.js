import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/navbar-logo-tmdb.svg";
import { DataContext } from "../components/DataProvider";
const Navbar = () => {
  const context = useContext(DataContext);
  const { mediatype, setmediatype } = context;
  return (
    <nav className="bg-[#032541] w-full flex justify-center text-white h-auto">
      <div className="flex justify-between items-center max-w-[1440px] w-full px-5 py-5">
        <div className="flex items-center gap-8">
          <Link to="/">
            <img src={Logo} alt="logo" height="20" width="154" />
          </Link>
          <Link to="/filter" onClick={() => setmediatype("movie")}>
            <p className="font-semibold text-base cursor-pointer">Movies</p>
          </Link>
          <Link to="/filter" onClick={() => setmediatype("tv")}>
            <p className="font-semibold text-base cursor-pointer">Tv Shows</p>
          </Link>
        </div>
        <div className="right-container">
          <p className="font-semibold text-base cursor-pointer">Log out</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
