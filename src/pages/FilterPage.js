import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { DataContext } from "../components/DataProvider";

const FilterPage = () => {
  const [sort, setSort] = useState();
  const [list, setList] = useState([]);
  const context = useContext(DataContext);
  const { mediatype, setmediatype } = context;
  const getList = async () => {
    const option = {
      method: "GET",
      url: `https://api.themoviedb.org/3/discover/${mediatype}`,
      params: {
        api_key: "378d50517001a889a5e2eae0c9b45aaa",
        sort_by: sort || "popularity.desc",
      },
    };
    await axios.request(option).then((result) => {
      setList(result.data.results);
      console.log(result.data.results);
    });
  };

  useEffect(() => {
    getList();
  }, [, sort]);

  return (
    <div className="flex justify-center items-center py-5">
      <div className="max-w-[1440px] w-full flex flex-col  md:flex-row gap-10">
        <div className="flex flex-col items-center md:items-start gap-5 ">
          <div className="max-w-[258px] w-full shadow-lg p-3">
            <h3 className="text-lg font-bold">Sort</h3>
            <hr className="my-3" />
            <label className="font-light pb-1">Sort Results By</label> <br />
            <select
              name="sort"
              value={sort}
              onChange={(e) => {
                e.preventDefault();
                setSort(e.target.value);
              }}
              className="w-full py-1 text-sm p-2 focus:outline-none "
            >
              <option className="bg-white" value="popularity.desc">
                Popularity Descending
              </option>
              <option value="popularity.asc">Popularity Ascending</option>
              <option value="vote_average.desc">Rating Descending</option>
              <option value="vote_average.asc">Rating Ascending</option>
              <option value="release_date.desc">Release Date Descending</option>
              <option value="release_date.asc">Release Date Ascending</option>
              <option value="original_title.asc">Title (A-Z)</option>
              <option value="original_title.desc">Title (Z-A)</option>
            </select>
          </div>
          <div className="max-w-[258px] w-full shadow-lg p-3 mr-3">
            <h3 className="text-lg font-bold">Filters</h3>
            <hr className="my-3" />
            <label className="font-light">Release Dates</label> <br />
            <div className="flex justify-between p-1 ">
              <label className="text-[#a4a4a4] ">from</label>
              <input type="date" name="" id="" />
            </div>
            <div className="flex justify-between p-1">
              <label className="text-[#a4a4a4] ">to</label>
              <input type="date" name="" id="" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-start gap-5 min-h-[565px]">
            {list.map((result) => {
              return (
                <Card
                  key={result.id}
                  id={result.id}
                  coverImage={result.poster_path || result.backdrop_path}
                  title={result.title || result.original_name}
                  releaseDate={result.release_date || result.first_air_date}
                  media_type={mediatype}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
