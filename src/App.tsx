import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page/MainPage";
import { motion, useScroll } from "framer-motion";
import GuestList from "./pages/_mock_/GuestList";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/guest_list" element={<GuestList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
