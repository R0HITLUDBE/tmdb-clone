import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./components/DataProvider";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import IndividualMovie from "./components/IndividualMovie";
import Login from "./pages/Login";
import Movie from "./pages/Movie";
import SearchPage from "./pages/SearchPage";
import FilterPage from "./pages/FilterPage";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/movie" element={<Movie />} />
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/filter" element={<FilterPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
