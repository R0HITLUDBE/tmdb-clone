import React, { useState } from "react";

import Netflix from "../assets/svgexport-1.svg";

import icon1 from "../assets/svgexport-7.svg";
import icon2 from "../assets/svgexport-8.svg";
import icon3 from "../assets/svgexport-9.svg";
import icon4 from "../assets/svgexport-10.svg";
const IndividualMovie = ({
  posterImage,
  backgroundImage,
  title,
  releaseDate,
  overview,
  tagline,
  createdBy,
  genres,
  episode_run_time,
  rating,
}) => {
  return (
    <div
      className=" p-8 w-full  min-h-[571px] flex justify-center bg-cover  bg-[right -200px top] bg-no-repeat  "
      // style={{ backgroundImage: `url(${})` }}
      style={{
        backgroundImage: `linear-gradient(to left,rgba(0, 0, 0, 60%),rgba(60, 60, 60, 100%)),url(${backgroundImage})`,
      }}
    >
      <div>
        <div
          className={`flex md:flex-row flex-col text-white max-w-[1440px] w-full `}
        >
          <div className="">
            <img
              src={posterImage}
              alt="poster"
              loading="lazy"
              srcset=""
              className="rounded-t-lg md:h-[450px] h-[147px] min-w-[98px] md:min-w-[300px] object-cover"
            />
            <div className="py-2 md:flex gap-3 justify-center bg-[#032541] rounded-b-lg hidden ">
              <img src={Netflix} className="w-[59px] h-auto" alt="netflix" />
              <p>
                Now Streaming <br /> <span className="m-0">Watch Now</span>
              </p>
            </div>
          </div>
          <div className="p-5 flex flex-col md:gap-5 gap-2 items-center md:items-start">
            <h2 className="md:text-4xl font-bold text-2xl">
              {title}
              <span className="font-normal text-white/50 ">
                ({releaseDate.substring(0, 4)})
              </span>
            </h2>
            <p>
              {releaseDate} (US) &#8226;{" "}
              {genres.map((res) => {
                return <span>{res.name}, </span>;
              })}
              &#8226; {episode_run_time} min
            </p>
            <div className="flex gap-5">
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold">
                  {Math.ceil(rating * 10)}%
                </h2>
                <p className="text-sm">Ratings</p>
              </div>
              <div className="rounded-full bg-[rgb(3,37,65)] h-[46px] w-[46px] flex items-center justify-center ">
                <img src={icon1} className="h-[1em] w-[1em]" alt="" />
              </div>
              <div className="rounded-full bg-[rgb(3,37,65)] h-[46px] w-[46px] flex items-center justify-center ">
                <img src={icon2} className="h-[1em] w-[1em]" alt="" />
              </div>
              <div className="rounded-full bg-[rgb(3,37,65)] h-[46px] w-[46px] flex items-center justify-center ">
                <img src={icon3} className="h-[1em] w-[1em]" alt="" />
              </div>
              <div className="rounded-full bg-[rgb(3,37,65)] h-[46px] w-[46px] flex items-center justify-center ">
                <img src={icon4} className="h-[1em] w-[1em]" alt="" />
              </div>
            </div>
            <div>
              <p className=" italic text-lg text-white/70">{tagline}</p>
              <h3 className="font-semibold text-xl">Overview</h3>
              <p className="">{overview}</p>
            </div>
            <div className="flex justify-start gap-10">
              {createdBy &&
                createdBy.map((res) => {
                  return (
                    <div>
                      <p className="font-bold">{res.name}</p>
                      <p className="text-sm">Creator</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualMovie;
