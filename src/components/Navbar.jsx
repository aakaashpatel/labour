import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX, HiLogout, HiHome, HiInformationCircle, HiCollection, HiMail, HiUserGroup } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";

const NAV_LINKS = [
  { to: "/", label: "Home", icon: HiHome },
  { to: "/about", label: "About", icon: HiInformationCircle },
  { to: "/project", label: "Projects", icon: HiCollection },
  { to: "/contact", label: "Contact", icon: HiMail },
  { to: "/collaboration", label: "Partners", icon: HiUserGroup },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    localStorage.removeItem("onboardingData");
    setIsOpen(false);
    navigate("/");
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
        ? "py-3 px-4" 
        : "py-6 px-6"
      }`}>
        <div className={`max-w-7xl mx-auto transition-all duration-500 rounded-[2rem] flex items-center justify-between px-6 sm:px-10 h-20 shadow-2xl relative overflow-hidden group ${
          scrolled 
          ? "bg-white/80 backdrop-blur-2xl border border-white/40 shadow-slate-200/50" 
          : "bg-white border border-slate-100 shadow-slate-100/30"
        }`}>
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 left-1/4 w-1/2 h-full bg-indigo-50/20 blur-[80px] -z-10 group-hover:bg-indigo-100/30 transition-colors duration-700"></div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 relative z-10 group/logo">
            <div className="w-11 h-11 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 group-hover/logo:rotate-[10deg] transition-transform duration-500">
               <span className="text-white text-sm font-black tracking-tighter">HL</span>
            </div>
            <div className="flex flex-col">
               <span className="text-xl font-black text-slate-900 tracking-tighter leading-none">HireLabour</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden xl:flex items-center bg-slate-50/50 p-1.5 rounded-2xl border border-slate-100/50 mx-4">
            {NAV_LINKS.map(({ to, label }) => {
              const isActive = pathname === to;
              return (
                <li key={to}>
                  <Link
                    to={to}
                    className={`text-[13px] px-6 py-2.5 rounded-xl font-black transition-all duration-300 relative overflow-hidden flex items-center gap-2 ${
                      isActive
                        ? "text-indigo-600 bg-white shadow-sm ring-1 ring-slate-100"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop Right Side - Auth Action */}
          <div className="hidden lg:flex items-center gap-2 sm:gap-4 relative z-10 shrink-0">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                 <div className="flex flex-col items-end mr-2">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active session</span>
                    <span className="text-xs font-black text-slate-700 truncate max-w-[100px]">{user?.name || "Member"}</span>
                 </div>
                 <button
                    onClick={handleLogout}
                    className="h-12 px-6 bg-red-50 text-red-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-sm hover:shadow-xl hover:shadow-red-200 flex items-center gap-2 group/logout"
                 >
                    <HiLogout className="text-lg group-hover/logout:rotate-12 transition-transform" /> 
                    Sign Out
                 </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="h-12 px-10 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100 flex items-center gap-2"
              >
                Log In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-600 transition-all border border-slate-100"
            aria-label="Open menu"
          >
            <HiMenuAlt3 size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xl z-[150] lg:hidden animate-in fade-in duration-500"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Premium Mobile Drawer */}
      <div
        className={`fixed top-4 right-4 bottom-4 w-full max-w-[340px] bg-white rounded-[3rem] z-[200] lg:hidden
          flex flex-col transform transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) shadow-2xl border border-slate-100
          ${isOpen ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0 pointer-events-none"}`}
      >
        {/* Drawer Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full -mr-20 -mt-20 blur-3xl opacity-50 -z-10"></div>

        <div className="flex items-center justify-between p-8">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xs font-black">HL</span>
             </div>
             <span className="text-xl font-black text-slate-900 tracking-tighter">HireLabour</span>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:text-red-500 transition-all border border-slate-50"
          >
            <HiX size={20} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 px-6 py-4 flex flex-col gap-3 overflow-y-auto custom-scrollbar">
          <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] ml-4 mb-2">Navigation</div>
          {NAV_LINKS.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-5 p-5 rounded-3xl transition-all duration-300 ${
                pathname === to
                  ? "bg-indigo-600 text-white shadow-xl shadow-indigo-100"
                  : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${pathname === to ? "bg-white/20" : "bg-slate-100"}`}>
                 <Icon size={20} />
              </div>
              <span className="font-black tracking-tight">{label}</span>
            </Link>
          ))}
        </div>

        {/* Drawer Footer Action */}
        <div className="p-8 border-t border-slate-50 bg-slate-50/30 rounded-b-[3rem]">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-4 p-5 bg-red-50 text-red-600 rounded-3xl font-black text-sm transition-all hover:bg-red-600 hover:text-white"
            >
              <HiLogout size={22} /> Sign Out Account
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="w-full h-16 flex items-center justify-center bg-indigo-600 text-white rounded-3xl font-black text-sm shadow-xl shadow-indigo-100 transition-all"
            >
              Log In to Portal
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;