import React, { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

import axios from "axios";
import { DataContext } from "../components/DataProvider";

const Home = () => {
  const context = useContext(DataContext);

  const { search, setSearch, loggedin, coverImage, setcoverImage } = context;
  const [selected, setSelected] = useState(28);
  const [selectedWatch, setSelectedWatch] = useState("movie");
  const [selectedTrend, setSelectedTrend] = useState("day");
  const [popular, setpopular] = useState([]);
  const [trend, setTrend] = useState([]);
  const [freeToWatch, setFreeToWatch] = useState([]);

  let navigate = useNavigate();

  const SubmitSearch = (e) => {
    navigate("/search");
  };

  const getGenresData = async () => {
    const Option = {
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/movie`,
      params: {
        api_key: "378d50517001a889a5e2eae0c9b45aaa",
        with_genres: selected,
      },
    };
    await axios.request(Option).then((result) => {
      setpopular(result.data.results);
      // console.log(result.data.results);
    });
  };

  const getTrendingData = async () => {
    const trendingOption = {
      method: "GET",
      url: `https://api.themoviedb.org/3/trending/all/${selectedTrend}`,
      params: {
        api_key: "378d50517001a889a5e2eae0c9b45aaa",
        // time_window: selectedTrend,
        // media_type: "all",
      },
    };
    await axios.request(trendingOption).then((result) => {
      setTrend(result.data.results);
      // console.log(result.data.results);
    });
  };

  const getFreeData = async () => {
    const Option = {
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/${selectedWatch}`,
      params: {
        api_key: "378d50517001a889a5e2eae0c9b45aaa",
        with_watch_monetization_types: "free",
        watch_region: "US",
        sort_by: "popularity.desc",
      },
    };
    await axios.request(Option).then((result) => {
      setFreeToWatch(result.data.results);
      // console.log(result.data.results);
    });
  };

  // useEffect(() => {
  //   if (!loggedin) {
  //     return navigate("/login");
  //   }
  // });

  useEffect(() => {
    setcoverImage(
      `https://image.tmdb.org/t/p/original/${
        popular[Math.floor(Math.random() * popular.length)]?.backdrop_path
      }`
    );
  }, [popular]);

  useEffect(() => {
    getGenresData();
  }, [selected]);

  useEffect(() => {
    getTrendingData();
  }, [selectedTrend]);

  useEffect(() => {
    getFreeData();
  }, [selectedWatch]);

  return (
    <div className="w-full flex items-center flex-col -z-10">
      <header
        className="max-w-[1440px] w-full flex flex-col items-center justify-center  py-40 text-white gap-16  bg-no-repeat bg-cover max-h-[360px] min-h-[300px] background"
        style={{
          backgroundImage: `linear-gradient(to left,rgba(3, 37, 65, 0%),rgba(3, 37, 65, 100%)),url(${coverImage})`,
        }}
      >
        <div className="p-10 flex flex-col gap-10">
          <div>
            <h2 className="text-5xl font-bold ">Welcome.</h2>
            <h3 className="text-4xl font-bold">
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
          </div>

          <form
            className="max-w-[90%] w-full relative"
            onSubmit={(e) => SubmitSearch(e)}
          >
            <input
              name="query"
              type="text"
              placeholder="Search for a movie, tv show, person......"
              value={search}
              className="w-full h-12 text-lg text-black/50 border-none rounded-3xl pl-5 focus:outline-none -z-20"
              onChange={(e) => setSearch(e.target.value)}
            />
            <input
              type="submit"
              value="Search"
              className="inline-flex justify-center items-center  py-3 px-7 border-none rounded-3xl absolute top-0 right-[-24px] bg-gradient-to-r from-[#1ed5a9]/100 to-[#1ed5a9]"
              style={{
                background:
                  "linear-gradient to right,rgba(30, 213, 169, 1) 0%,rgba(30, 213, 169, 1) 100%)",
              }}
            />
          </form>
        </div>
      </header>
      <div className="max-w-[1440px] w-full mt-10 px-5  ">
        <div className="flex md:gap-5 gap-0 items-center">
          <h2 className="md:text-2xl text-xl font-semibold ">What's Popular</h2>
          <div className="border border-black flex rounded-3xl  ">
            <input
              type="button"
              onClick={() => setSelected(28)}
              value="Action"
              className={
                selected === 28
                  ? " inline-block px-2  hover:cursor-pointer bg-[#032541] text-[#62cbbc] rounded-3xl "
                  : "inline-block px-2 hover:cursor-pointer"
              }
            />

            <input
              type="button"
              onClick={() => setSelected(35)}
              value="Comedy"
              className={
                selected === 35
                  ? " inline-block px-2  hover:cursor-pointer bg-[#032541] text-[#62cbbc] rounded-3xl  "
                  : "inline-block px-2 hover:cursor-pointer"
              }
            />

            <input
              type="button"
              onClick={() => setSelected(27)}
              value="Horror"
              className={
                selected === 27
                  ? " inline-block px-2  hover:cursor-pointer bg-[#032541] text-[#62cbbc] rounded-3xl "
                  : "inline-block px-2 hover:cursor-pointer"
              }
            />

            <input
              type="button"
              value="Romance"
              onClick={() => setSelected(10749)}
              className={
                selected === 10749
                  ? " inline-block px-2  hover:cursor-pointer bg-[#032541] text-[#62cbbc] rounded-3xl "
                  : "inline-block px-2 hover:cursor-pointer"
              }
            />
          </div>
        </div>
        <div className="relative">
          <div className="p-3 gap-3 flex overflow-x-scroll scroll-bar ">
            {popular &&
              popular.map((result) => {
                return (
                  <Card
                    key={result.id}
                    id={result.id}
                    coverImage={result.poster_path || result.backdrop_path}
                    title={result.title || result.original_name}
                    releaseDate={result.release_date || result.first_air_date}
                    media_type={selectedWatch}
                  />
                );
              })}
          </div>
          <div className="absolute top-0 right-0 bg-gradient-to-l from-[#fff] h-full w-[5%]" />
        </div>
      </div>
      <div className="max-w-[1440px] w-full mt-8 px-5  ">
        <div className="flex gap-5 items-center">
          <h2 className="md:text-2xl text-xl font-semibold">Free to Watch</h2>
          <div className="border border-black flex rounded-3xl  overflow-hidden">
            <input
              type="button"
              onClick={() => setSelectedWatch("movie")}
              value="Movies"
              className={
                selectedWatch === "movie"
                  ? " inline-block px-3  hover:cursor-pointer bg-[#032541] text-[#62cbbc] rounded-3xl "
                  : "inline-block px-3 hover:cursor-pointer"
              }
            />

            <input
              type="button"
              onClick={() => setSelectedWatch("tv")}
              value=" TV"
              className={
                selectedWatch === "tv"
                  ? " inline-block px-3  hover:cursor-pointer bg-[#032541] text-[#62cbbc] rounded-3xl "
                  : "inline-block px-3 hover:cursor-pointer"
              }
            />
          </div>
        </div>
        <div className="relative">
          <div className="p-3 gap-3 flex overflow-x-scroll ">
            {freeToWatch &&
              freeToWatch.map((result) => {
                return (
                  <Card
                    key={result.id}
                    id={result.id}
                    coverImage={result.poster_path || result.backdrop_path}
                    title={result.title || result.original_name}
                    releaseDate={result.release_date || result.first_air_date}
                    media_type={selectedWatch}
                  />
                );
              })}
          </div>
          <div className="absolute top-0 right-0 bg-gradient-to-l from-[#fff] h-full w-[5%]" />
        </div>
      </div>
      <div className="max-w-[1440px] w-full my-8 px-5  ">
        <div className="flex gap-5 items-center">
          <h2 className="md:text-2xl text-xl font-semibold">Trending</h2>
          <div className="border border-black flex rounded-l-3xl rounded-r-3xl overflow-hidden rounded-3xl ">
            <input
              type="button"
              onClick={() => setSelectedTrend("day")}
              value="Today"
              className={
                selectedTrend === "day"
                  ? " inline-block px-3  hover:cursor-pointer bg-[#032541] text-[#62cbbc] rounded-3xl "
                  : "inline-block px-3 hover:cursor-pointer"
              }
            />
            <input
              type="button"
              onClick={() => setSelectedTrend("week")}
              value="This Week"
              className={
                selectedTrend === "week"
                  ? " inline-block px-3  hover:cursor-pointer bg-[#032541] text-[#62cbbc] rounded-3xl "
                  : "inline-block px-3 hover:cursor-pointer"
              }
            />
          </div>
        </div>
        <div className="relative">
          <div className="p-3 gap-3 flex overflow-x-scroll  ">
            {trend &&
              trend.map((result) => {
                return (
                  <Card
                    key={result.id}
                    id={result.id}
                    coverImage={result.poster_path || result.backdrop_path}
                    title={result.title || result.original_name}
                    releaseDate={result.release_date || result.first_air_date}
                    media_type={result.media_type}
                  />
                );
              })}
          </div>
          <div className="absolute top-0 right-0 bg-gradient-to-l from-[#fff] h-full w-[5%]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
