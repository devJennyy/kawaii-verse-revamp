import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Homepage from "./pages/Homepage";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" replace />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
