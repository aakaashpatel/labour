import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Content ke liye top space (navbar fixed hai) */}
      <div className="">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
