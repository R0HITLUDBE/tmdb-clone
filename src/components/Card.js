import React, { useContext } from "react";
import Poster from "../assets/svgexport-13.svg";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./DataProvider";

const Card = ({ title, releaseDate, coverImage, id, media_type }) => {
  const context = useContext(DataContext);
  const { movieId, setmovieId, mediatype, setmediatype } = context;
  let navigate = useNavigate();
  return (
    <div
      className="h-full w-[150px] min-w-[150px]  "
      onClick={() => {
        setmovieId(id);
        setmediatype(media_type);
        navigate(`/movie`);
      }}
    >
      <img
        src={
          coverImage
            ? `https://image.tmdb.org/t/p/original/${coverImage} `
            : Poster
        }
        alt=""
        loading="lazy"
        className="rounded-md h-[225px] w-[150px] object-cover bg-[#dbdbdb]"
      />
      <h3 className="font-bold ">{title}</h3>
      <p className="text-[rgba(0,0,0,0.6)]">{releaseDate}</p>
    </div>
  );
};

export default Card;
