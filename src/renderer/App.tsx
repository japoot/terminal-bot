import TermBot from "../components/TermBot";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const Hello = () => {
  return <TermBot />;
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
