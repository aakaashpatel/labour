import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./features/auth/authSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      dispatch(loginSuccess(JSON.parse(user)));
    }
  }, [dispatch]);

  return (
    <div>
      <Navbar />

      {/* Content */}
      <div>
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;