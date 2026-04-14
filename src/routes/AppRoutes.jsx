import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About.jsx";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Collaboration from "../pages/Collaboration";
import Signup from "../features/auth/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/collaboration" element={<Collaboration />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;
