import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import AnimeOverview from "./components/shared/AnimeOverview";
import Characters from "./pages/Characters";
import Homepage from "./pages/Homepage";
import Movies from "./pages/Movies";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" replace />} />
        <Route path="/homepage" element={<Homepage /> } />
        <Route path="/movies" element={<Movies />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/anime-overview" element={<AnimeOverview />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
