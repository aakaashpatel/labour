import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About.jsx";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Collaboration from "../pages/Collaboration";
import Signup from "../features/auth/Register";
import FindLabour from "../components/FindLabour";
import Login from "./pages/Login";
import OtpVerify from "./pages/OtpVerify";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/collaboration" element={<Collaboration />} />
      <Route path="/signup" element={<Signup />} />

      {/* find labour */}
      <Route path="/find-labour" element={<FindLabour />} />

      {/* login / signUp /onborading page */}
      <Route path="/login" element={<Login />} />
      <Route path="/verify-otp" element={<OtpVerify />} />
    </Routes>
  );
};

export default AppRoutes;
