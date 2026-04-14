import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/project", label: "Projects" },
  { to: "/contact", label: "Contact" },
  { to: "/collaboration", label: "Collaboration" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white text-xs font-bold tracking-wider">HL</span>
            </div>
            <span className="text-[17px] font-semibold text-gray-900">HireLabour</span>
          </Link>

          {/* Desktop Navigation Links - Centered */}
          <ul className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`text-sm px-5 py-2 rounded-xl transition-all duration-200 ${
                    pathname === to
                      ? "bg-indigo-100 text-indigo-700 font-semibold"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Right Side - Only Login */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <Link
              to="/login"
              className="text-sm font-medium text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-100 transition-all active:bg-gray-200"
            >
              Log in
            </Link>
          </div>

          {/* Mobile & Tablet Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-3 rounded-xl hover:bg-gray-100 transition-all"
            aria-label="Open menu"
          >
            <HiMenu size={26} className="text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile & Tablet Drawer (Right to Left) */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 bg-white border-l border-gray-200 z-50 md:hidden
          flex flex-col transform transition-transform duration-300 ease-out shadow-2xl
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Link 
            to="/" 
            className="flex items-center gap-2.5" 
            onClick={() => setIsOpen(false)}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white text-xs font-bold tracking-wider">HL</span>
            </div>
            <span className="text-[17px] font-semibold text-gray-900">HireLabour</span>
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-xl hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-all"
          >
            <HiX size={24} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 p-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={`text-[15px] px-5 py-3.5 rounded-2xl transition-all ${
                pathname === to
                  ? "bg-indigo-100 text-indigo-700 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Drawer Footer - Only Login (No Sign Up) */}
        <div className="p-6 border-t border-gray-100">
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center text-sm font-medium text-gray-700 py-3.5 rounded-2xl border border-gray-200 hover:bg-gray-50 transition-all"
          >
            Log in
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;