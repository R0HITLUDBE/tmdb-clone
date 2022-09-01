import React, { useContext, useEffect, useState } from "react";
import SearchIcon from "../assets/search.png";
import axios from "axios";
import SearchCard from "../components/SearchCard";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../components/DataProvider";

const SearchPage = () => {
  let navigate = useNavigate();
  const context = useContext(DataContext);
  const { search, setSearch, loggedin } = context;
  const [movies, setMovies] = useState([]);
  const [resultType, setresultType] = useState("movie");

  const APIKEY = process.env.APIKEY;

  useEffect(() => {
    if (!loggedin) {
      return navigate("/login");
    }
  });

  const GetSearch = async (e) => {
    var searchOptions = {
      method: "GET",
      url: `
      https://api.themoviedb.org/3/search/${resultType}`,
      params: {
        api_key: "378d50517001a889a5e2eae0c9b45aaa",
        query: search,
      },
    };

    await axios.request(searchOptions).then((result) => {
      setMovies(result.data.results);
      console.log(result.data);
    });
  };

  useEffect(() => {
    GetSearch();
  }, [resultType]);

  return (
    <div>
      <div className="border-b mb-10 flex flex-col justify-center items-center">
        <div className="w-full max-w-[1440px] relative ">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              GetSearch(e);
            }}
          >
            <input
              type="text"
              value={search}
              className="w-full focus:outline-none  px-10 py-2 relative"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <img
            src={SearchIcon}
            alt="Search..."
            className="h-6 w-6 absolute left-0 top-0 mt-2 ml-2"
          />
        </div>
      </div>
      <div className="flex justify-center px-10">
        <div className="flex flex-col md:flex-row gap-8 max-w-[1440px] w-full ">
          <div>
            <div className="w-[258px] border border-gray-300 rounded-md">
              <div className="bg-[#02b4e4] h-[63px]  px-3 text-white flex items-center">
                <h3 className="font-semibold  text-lg">Search Results</h3>
              </div>
              <input
                type="button"
                value="Movies"
                onClick={() => setresultType("movie")}
                className={
                  resultType === "movie"
                    ? "h-[41px] w-full px-3 flex items-center bg-[#ebebeb]"
                    : "h-[41px] w-full px-3 flex items-center"
                }
              />
              <input
                type="button"
                value="Tv Shows"
                onClick={() => setresultType("tv")}
                className={
                  resultType === "tv"
                    ? "h-[41px] w-full px-3 flex items-center bg-[#ebebeb]"
                    : "h-[41px] w-full px-3 flex items-center"
                }
              />
              <input
                type="button"
                value="People"
                onClick={() => setresultType("person")}
                className={
                  resultType === "person"
                    ? "h-[41px] w-full px-3 flex items-center bg-[#ebebeb]"
                    : "h-[41px] w-full px-3 flex items-center"
                }
              />
              <input
                type="button"
                value="Collections"
                onClick={() => setresultType("collection")}
                className={
                  resultType === "collection"
                    ? "h-[41px] w-full px-3 flex items-center bg-[#ebebeb]"
                    : "h-[41px] w-full px-3 flex items-center"
                }
              />
              <input
                type="button"
                value="Keywords"
                onClick={() => setresultType("keyword")}
                className={
                  resultType === "keyword"
                    ? "h-[41px] w-full px-3 flex items-center bg-[#ebebeb]"
                    : "h-[41px] w-full px-3 flex items-center"
                }
              />
              <input
                type="button"
                value="Networks"
                onClick={() => setresultType("company")}
                className={
                  resultType === "company"
                    ? "h-[41px] w-full px-3 flex items-center bg-[#ebebeb]"
                    : "h-[41px] w-full px-3 flex items-center"
                }
              />
            </div>
            <p className="my-10">
              Tip: You can use the 'y:' filter to narrow your results by year.
              Example: 'star wars y:1977'.
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center min-h-[524px] h-full overflow-y-scroll scrollbar-hidden">
            {movies.length
              ? movies.map((movie) => {
                  return (
                    <SearchCard
                      key={movie.id}
                      id={movie.id}
                      media_type={resultType}
                      coverImage={movie.poster_path || movie.backdrop_path}
                      title={movie.title || movie.original_name || movie.name}
                      releaseDate={
                        movie.release_date ||
                        movie.first_air_date ||
                        movie.known_for_department
                      }
                      overview={movie.overview}
                    />
                  );
                })
              : "There are no movies that matched your query."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
