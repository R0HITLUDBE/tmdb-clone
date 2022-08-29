import React, { useContext, useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";
import SearchCard from "../components/SearchCard";
import { useLocation } from "react-router-dom";
import { DataContext } from "../components/DataProvider";

const SearchPage = () => {
  const context = useContext(DataContext);
  const { search, setSearch } = context;
  const [movies, setMovies] = useState([]);
  const APIKEY = process.env.APIKEY;

  const GetSearch = async (e) => {
    var searchOptions = {
      method: "GET",
      url: `
      https://api.themoviedb.org/3/search/multi`,
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
  }, []);

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
          <BiSearchAlt className="h-6 w-6 absolute left-0 top-0 mt-2 ml-2" />
        </div>
      </div>
      <div className="flex justify-center px-10">
        <div className="flex gap-8 max-w-[1440px] w-full ">
          <div>
            <div className="w-[258px] border border-gray-300 rounded-md">
              <div className="bg-[#02b4e4] h-[63px]  px-3 text-white flex items-center">
                <h3 className="font-semibold text-lg">Search Results</h3>
              </div>
              <div className="h-[41px] px-3 flex items-center">
                <p className="">Movies</p>
              </div>
              <div className="h-[41px]  px-3 flex items-center">
                <p>Tv Shows</p>
              </div>
              <div className="h-[41px]  px-3 flex items-center">
                <p>People</p>
              </div>
              <div className="h-[41px]  px-3 flex items-center">
                <p>Collections</p>
              </div>
              <div className="h-[41px]  px-3 flex items-center">
                <p>Keywords</p>
              </div>
              <div className="h-[41px]  px-3 flex items-center">
                <p>Networks</p>
              </div>
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
                      coverImage={movie.poster_path || movie.backdrop_path}
                      title={movie.title || movie.original_name}
                      releaseDate={movie.release_date || movie.first_air_date}
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
