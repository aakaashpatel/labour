import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./features/auth/authSlice";
import { useLocation } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      dispatch(loginSuccess(JSON.parse(user)));
    }
  }, [dispatch]);

  const hideNavbarOn = ["/dashboard"];
  const shouldHideNavbar = hideNavbarOn.includes(location.pathname);

  return (
    <div>
      {!shouldHideNavbar && <Navbar />}

      {/* Content */}
      <div className={shouldHideNavbar ? "" : "pt-0"}>
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;