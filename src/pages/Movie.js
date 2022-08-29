import React, { useContext, useEffect, useState } from "react";
import IndiPoster from "../assets/posterimage-individual.jpg";
import SliderContent from "../components/SliderContent";
import axios from "axios";
import { DataContext } from "../components/DataProvider";
import IndividualMovie from "../components/IndividualMovie";
import Castcard from "../components/CastCard";

const Movie = () => {
  const [moviedata, setMovieData] = useState();
  const [castdata, setCastData] = useState();
  const context = useContext(DataContext);
  const { movieId, setmovieId, mediatype } = context;

  const getData = async () => {
    const trendingOption = {
      method: "GET",
      url: `https://api.themoviedb.org/3/${mediatype}/${movieId}`,
      params: {
        api_key: "378d50517001a889a5e2eae0c9b45aaa",
      },
    };

    const people = {
      method: "GET",
      url: `
      https://api.themoviedb.org/3/${mediatype}/${movieId}/credits`,
      params: {
        api_key: "378d50517001a889a5e2eae0c9b45aaa",
      },
    };
    await axios.request(people).then((result) => {
      setCastData(result.data.cast.slice(0, 12));
      // console.log(result.data.cast.slice(0, 8));
    });

    await axios.request(trendingOption).then((result) => {
      setMovieData(result.data);
      console.log(result.data);
    });
  };
  useEffect(() => {
    getData();
  }, [, movieId]);

  return (
    <div className="w-full h-full">
      <div className="flex py-3 gap-10 items-center justify-center">
        <p>Overview</p>
        <p>Media</p>
        <p>Fandom</p>
        <p>Share</p>
      </div>
      <div className=" flex flex-col items-center ">
        {moviedata && (
          <IndividualMovie
            posterImage={`https://image.tmdb.org/t/p/original/${moviedata.poster_path}`}
            backgroundImage={`https://image.tmdb.org/t/p/original/${moviedata.backdrop_path}`}
            title={moviedata.title || moviedata.original_name}
            releaseDate={moviedata.release_date || moviedata.first_air_date}
            overview={moviedata.overview}
            tagline={moviedata.tagline}
            createdBy={moviedata.created_by}
            genres={moviedata.genres}
            episode_run_time={moviedata.episode_run_time}
            rating={moviedata.vote_average}
          />
        )}

        <div className="max-w-[1440px] w-full mt-8 px-5  ">
          <div className="flex gap-5 items-center">
            <h2 className="text-2xl font-semibold">Cast</h2>
          </div>
          <div className="relative">
            <div className="p-3 gap-3 flex overflow-x-scroll ">
              {castdata &&
                castdata.map((result) => {
                  return (
                    <Castcard
                      key={result.id}
                      id={result.id}
                      coverImage={result.profile_path}
                      title={result.name || result.original_name}
                      character={result.character}
                    />
                  );
                })}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#fff] h-full w-[5%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
