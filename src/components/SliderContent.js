import React from "react";

import Poster from "../assets/posterimage.jpg";
const Card = () => {
  return (
    <div className="h-full w-[150px] min-w-[150px]">
      <img
        src={Poster}
        alt=""
        loading="lazy"
        className="rounded-md h-[225px] w-[150px] object-cover"
      />
      <h3 className="font-bold ">Day Shift</h3>
      <p className="text-[rgba(0,0,0,0.6)]">Aug 10, 2022</p>
    </div>
  );
};

const SliderContent = () => {
  return (
    <div className="max-w-[1440px] w-full my-10 px-5  ">
      <div>
        <h2 className="text-2xl font-semibold">What's Popular</h2>
      </div>
      <div className="relative">
        <div className="p-3 gap-3 flex overflow-x-scroll scrollbar-hidden ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="absolute top-0 right-0 bg-gradient-to-l from-[#fff] h-full w-[5%]" />
      </div>
    </div>
  );
};

export default SliderContent;
