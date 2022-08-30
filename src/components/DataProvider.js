import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [movieId, setmovieId] = useState("");
  const [mediatype, setmediatype] = useState("");
  const [loggedin, setloggedin] = useState(false);
  const [coverImage, setcoverImage] = useState();
  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        movieId,
        setmovieId,
        mediatype,
        setmediatype,
        loggedin,
        setloggedin,
        coverImage,
        setcoverImage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
