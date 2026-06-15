import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  console.log("darkMode:", darkMode);

  return (
    <div
    className={
    darkMode
      ? "app dark"
      : "app"
    }
    style={{
      backgroundColor: darkMode
        ? "#111827"
        : "white",
    }}
    >
    <h1>
      {darkMode ? "DARK" : "LIGHT"}
    </h1>

      <Navbar 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>

      <Footer />
    </div >
  );
}

export default App;