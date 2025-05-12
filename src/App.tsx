import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AnimeOverview from "./components/shared/AnimeOverview";
import Characters from "./pages/Characters";
import Homepage from "./pages/Homepage";
import NewestSeason from "./pages/NewestSeason";
import Popular from "./pages/Popular";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import Search from "./pages/Search";
import Manga from "./pages/Manga";
import CharacterInfo from "./components/characters/CharacterInfo";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" replace />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/anime-overview" element={<AnimeOverview />} />
        <Route path="/character-info" element={<CharacterInfo />} />
        <Route path="/newest-season" element={<NewestSeason />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
