import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DataContext } from "../components/DataProvider";
import IndividualMovie from "../components/IndividualMovie";
import Castcard from "../components/CastCard";
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/svgexport-14.svg";
import logo2 from "../assets/svgexport-15.svg";
import logo3 from "../assets/svgexport-16.svg";
import logo4 from "../assets/svgexport-17.svg";
import logo5 from "../assets/svgexport-18.svg";
import Card from "../components/Card";
import Poster from "../assets/svgexport-13.svg";

const Movie = () => {
  let navigate = useNavigate();
  const [moviedata, setMovieData] = useState();
  const [castdata, setCastData] = useState();
  const [keyword, setKeyword] = useState();
  const [recommendation, setRecommendation] = useState();
  const context = useContext(DataContext);
  const { movieId, setmovieId, mediatype, loggedin } = context;

  useEffect(() => {
    if (!loggedin) {
      return navigate("/login");
    }
    console.log(`https://api.themoviedb.org/3/${mediatype}/${movieId}`);
  });

  const getData = async () => {
    const trendingOption = {
      method: "GET",
      url: `https://api.themoviedb.org/3/${mediatype}/${movieId}`,
      params: {
        api_key: "378d50517001a889a5e2eae0c9b45aaa",
      },
    };
    const recommendations = {
      method: "GET",
      url: `
      https://api.themoviedb.org/3/${mediatype}/${movieId}/recommendations`,
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

    const keywords = {
      method: "GET",
      url: `
      https://api.themoviedb.org/3/${mediatype}/${movieId}/keywords`,
      params: {
        api_key: "378d50517001a889a5e2eae0c9b45aaa",
      },
    };

    await axios.request(recommendations).then((result) => {
      setRecommendation(result.data.results);
      console.log(result.data.results);
    });

    await axios.request(keywords).then((result) => {
      setKeyword(result.data.keywords || result.data.results);
      // console.log(result.data.keywords);
    });

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
            key={movieId}
            posterImage={
              moviedata.poster_path
                ? `https://image.tmdb.org/t/p/original/${moviedata.poster_path}`
                : Poster
            }
            backgroundImage={`https://image.tmdb.org/t/p/original/${moviedata.backdrop_path}`}
            title={moviedata.title || moviedata.original_name}
            releaseDate={moviedata.release_date || moviedata.first_air_date}
            overview={moviedata.overview}
            tagline={moviedata.tagline}
            createdBy={moviedata.created_by}
            genres={moviedata.genres}
            episode_run_time={
              mediatype === "movie"
                ? moviedata.runtime
                : moviedata.episode_run_time
            }
            rating={moviedata.vote_average}
          />
        )}

        <div className="max-w-[1440px] w-full mt-8 px-8 flex gap-5 md:flex-row flex-col  ">
          <div className="md:max-w-[75%]">
            <div className="flex gap-5 items-center">
              <h2 className="text-2xl font-semibold">Cast</h2>
            </div>
            <div>
              <div className="relative ">
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
              <div className="relative ">
                <div className="flex gap-5 items-center">
                  <h2 className="text-2xl font-semibold">Recommendation</h2>
                </div>
                <div className="p-3 gap-3 flex overflow-x-scroll ">
                  {recommendation &&
                    recommendation.map((result) => {
                      return (
                        <Card
                          key={result.id}
                          id={result.id}
                          coverImage={
                            result.poster_path || result.backdrop_path
                          }
                          title={result.original_title || result.original_name}
                          releaseDate={
                            result.release_date || result.first_air_date
                          }
                          media_type={result.media_type}
                        />
                      );
                    })}
                </div>
                <div className="absolute top-0 right-0 bg-gradient-to-l from-[#fff] h-full w-[5%]" />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 px-5">
            <div className="md:flex gap-3 hidden ">
              <img className="cursor-pointer" src={logo1} alt="" />
              <img className="cursor-pointer" src={logo2} alt="" />
              <img className="cursor-pointer" src={logo3} alt="" />
              <img className="cursor-pointer" src={logo4} alt="" />
              <img className="cursor-pointer" src={logo5} alt="" />
            </div>
            <h3 className="font-semibold text-xl">Facts</h3>
            <div>
              <h3 className="font-semibold">Status</h3>
              <p>{moviedata?.status}</p>
            </div>
            {moviedata?.networks && (
              <div>
                <h3 className="font-semibold">Network</h3>
                <img
                  src={`https://image.tmdb.org/t/p/original/${moviedata?.networks[0].logo_path}`}
                  alt=""
                  className="max-h-[20px] w-auto object-cover h-auto"
                />
              </div>
            )}
            <div>
              <h3 className="font-semibold">Original language</h3>
              <p>{moviedata?.original_language}</p>
            </div>
            {moviedata?.type ? (
              <div>
                <h3 className="font-semibold">Type</h3>
                <p>{moviedata?.type}</p>
              </div>
            ) : (
              <div>
                <h3 className="font-semibold">budget</h3>
                <p>
                  $
                  {moviedata?.budget
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </div>
            )}
            {moviedata?.revenue ? (
              <div>
                <h3 className="font-semibold">Revenue</h3>
                <p>
                  $
                  {moviedata?.revenue
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </div>
            ) : (
              ""
            )}
            <div>
              <h3 className="font-semibold">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {keyword &&
                  keyword.map((res) => {
                    return (
                      <p className=" inline bg-[#dfdfdf] text-black py-1 px-2 rounded border border-[#dfdfdf]">
                        {res.name}
                      </p>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
