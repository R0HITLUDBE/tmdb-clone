import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Movie from "./pages/Movie";
import SearchPage from "./pages/SearchPage";
import FilterPage from "./pages/FilterPage";

import { DataProvider } from "./components/DataProvider";
import Register from "./pages/Register";

function App() {
  const MainLayout = () => {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/filter" element={<FilterPage />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
        <Footer />
      </>
    );
  };

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="*" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
