import React, { lazy } from "react";
import Poster from "../assets/svgexport-13.svg";
const SearchCard = ({ title, releaseDate, overview, coverImage }) => {
  return (
    <div className="md:w-4/5 shadow-lg flex rounded-lg overflow-hidden border border-gray-200 min-h-[150px] ">
      <img
        src={
          coverImage
            ? `https://image.tmdb.org/t/p/original/${coverImage}`
            : Poster
        }
        alt={title}
        loading={lazy}
        className="  max-w-[94px] object-fill w-auto h-auto  bg-[#dbdbdb] "
      />
      <div className="p-3 flex flex-col gap-4">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-[#999999]">{releaseDate}</p>
        </div>
        <p className="max-h-[46px] overflow-hidden">{overview}</p>
      </div>
    </div>
  );
};

export default SearchCard;
