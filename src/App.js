import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import HelmetProvider from "react-helmet"

const styles = {
  main_header: {
    backgroundColor: "white",
    display: "flex",
    alignItems: "center", // Corrected spelling to alignItems
    justifyContent: "center",
    boxShadow: "rgba(17, 17, 26, 0.1) 0px 2px 0px",
  },

  header: {
    padding: "0.6rem",
    width: "85rem",
    display: "flex",
    alignItems: "center", // Corrected spelling to alignItems
    justifyContent: "center",
  },

  navbar: {
    display: "flex",
    alignItems: "center", // Corrected spelling to alignItems
    justifyContent: "center",
  },

  nav_link: {
    textDecoration: "none",
    color: "white",
    background: "rgb(239, 83, 102)",
    fontSize: "1.2rem",
    padding: "0.3rem 1.6rem",
    margin: "5px",
    border: "1px solid white",
    borderRadius: "0.3rem",
  },
};

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
 
  );
};

export default App;