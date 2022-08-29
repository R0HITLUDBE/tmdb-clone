import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [movieId, setmovieId] = useState("");
  const [mediatype, setmediatype] = useState("");

  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        movieId,
        setmovieId,
        mediatype,
        setmediatype,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
