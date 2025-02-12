import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Film from "./pages/Film/Film";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/film/:id" element={<Film />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
