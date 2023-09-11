import { SearchProvider } from "./context/SearchContext";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Movie from "./pages/Movie";
import { DetailsProvider } from "./context/DetailsContext";

function App() {
  return (
    <SearchProvider>
      <DetailsProvider>
        <Routes>
          <Route path="/streamy" element={<Home />} />
          <Route path="/streamy/search" element={<Search />} />
          <Route path="/streamy/search/:query" element={<Search />} />
          <Route path="/streamy/movie/:id" element={<Movie />} />
        </Routes>
      </DetailsProvider>
    </SearchProvider>
  );
}

export default App;
