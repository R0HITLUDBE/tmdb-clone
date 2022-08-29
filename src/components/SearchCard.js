import React, { lazy } from "react";

const SearchCard = ({ title, releaseDate, overview, coverImage }) => {
  const url = "";

  return (
    <div className="w-4/5 shadow-lg flex rounded-lg overflow-hidden border border-gray-200 min-h-[150px] ">
      <img
        src={`https://image.tmdb.org/t/p/original/${coverImage} `}
        alt={title}
        loading={lazy}
        className="  max-w-[94px] object-fill w-auto h-auto  "
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
