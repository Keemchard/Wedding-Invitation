import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page/MainPage";
import { motion, useScroll } from "framer-motion";
import GuestList from "./pages/guest-page/GuestList";
import AdminAuthPage from "./pages/auth-page/AdminAuthPage";
import PageNotFound from "./pages/_page-not-found/PageNotFound";

//TODO: create route for invalid link/url
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
          <Route path="/admin_auth" element={<AdminAuthPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
