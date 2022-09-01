import React, { lazy, useContext } from "react";
import Poster from "../assets/svgexport-13.svg";
import { DataContext } from "./DataProvider";
import { useNavigate } from "react-router-dom";
const SearchCard = ({
  title,
  releaseDate,
  overview,
  coverImage,
  id,
  media_type,
}) => {
  const context = useContext(DataContext);
  const { setmovieId, setmediatype } = context;
  let navigate = useNavigate();
  return (
    <div
      onClick={() => {
        if (media_type === "movie" || media_type === "tv") {
          setmovieId(id);
          setmediatype(media_type);
          navigate(`/movie`);
        }
      }}
      className="md:w-4/5 shadow-lg flex rounded-lg overflow-hidden border border-gray-200 min-h-[150px] w-full cursor-pointer "
    >
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
