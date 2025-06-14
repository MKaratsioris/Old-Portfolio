import {
  About,
  Contact,
  Home,
  Resume,
  Skills,
} from "../pages/AllPages";

import React from "react";
import { Route, Routes } from "react-router-dom";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
};
