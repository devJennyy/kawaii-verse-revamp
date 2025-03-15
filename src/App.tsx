import Homepage from './pages/Homepage';
import './styles/App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" replace />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  )
}

export default App
