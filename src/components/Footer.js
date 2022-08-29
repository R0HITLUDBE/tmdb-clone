import React from "react";
import FooterLogo from "../assets/footer-logo-tmdb.svg";
const Footer = () => {
  return (
    <footer className="bg-[#032541] text-white flex justify-center p-11  mt-10 w-full">
      <div className="flex md:flex-row flex-col max-w-[1440px] w-full gap-10 items-center justify-center">
        <div className="flex flex-col md:items-end items-center justify-center gap-11">
          <img
            src={FooterLogo}
            height="94"
            width="130"
            className="footer-logo"
            alt="logo"
          />
          <button
            style={{
              color: "#1fa9d0",
              backgroundColor: "#fff",
              fontWeight: "700",
              fontSize: "19px",
            }}
            className="text-[#1fa9d0] bg-white font-bold text-lg py-2 rounded-md px-3 "
          >
            JOIN THE COMMUNITY
          </button>
        </div>
        <div className="md:flex md:gap-12 hidden ">
          <div className="">
            <h2 className="text-xl font-bold">THE BASICS</h2>
            <p>About TMDB</p>
            <p>Contact Us</p>
            <p>Support Forums</p>
            <p>API</p>
            <p>System Status</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">GET INVOLVED</h2>
            <p>Contribution Bible</p>
            <p>Add New Movie</p>
            <p>Add New TV Show</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">COMMUNITY</h2>
            <p>Guidelines</p>
            <p>Discussions</p>
            <p>Leaderboard</p>
            <p>Twitter</p>
          </div>
          <div>
            <h2 className="text-xl font-bold">LEGAL</h2>
            <p>Terms of Use</p>
            <p>API Terms of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
