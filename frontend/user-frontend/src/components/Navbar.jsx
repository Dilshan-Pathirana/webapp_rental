import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
// Replace these with your actual logo assets or imports
const blackLogo = "/logo-black.png";
const whiteLogo = "/logo-white.png";

function Navbar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const location = useLocation();
  const navRef = useRef(null);

  const darkMode = false; // For demo, replace with your dark mode state/context if any

  const menuItems = [
    { key: "photography", name: "Photography", path: "/photography" },
    { key: "provideo", name: "Pro Video", path: "/pro-video" },
    { key: "lighting", name: "Lighting", path: "/lighting" },
    { key: "audio", name: "Audio", path: "/audio" },
    { key: "drones", name: "Drones", path: "/drones" },
    { key: "optics", name: "Optics", path: "/optics" },
    { key: "other", name: "Other", path: "/other" },
  ];

  // Update active menu based on current path
  useEffect(() => {
    const currentPath = location.pathname.toLowerCase();
    const found = menuItems.find((item) => currentPath.startsWith(item.path));
    if (found) {
      setActiveMenu(found.key);
    } else if (currentPath === "/") {
      setActiveMenu("home");
    } else {
      setActiveMenu("");
    }
    // Close mobile menu on navigation change
    setIsToggleOpen(false);
  }, [location.pathname]);

  // Close mobile menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsToggleOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-20 w-full shadow-md border-b border-gray-300 bg-gradient-to-r from-pink-100 to-fuchsia-100 dark:bg-gray-900 dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-6">
        <nav
          ref={navRef}
          className="flex h-16 items-center justify-between font-medium text-gray-700 dark:text-gray-200"
          aria-label="Primary Navigation"
        >
          {/* Logo & Company Name */}
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={() => setActiveMenu("home")}
          >
            <img
              src={darkMode ? whiteLogo : blackLogo}
              alt="Company Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-xl select-none">YourCompany</span>
          </Link>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="relative block h-10 w-10 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isToggleOpen ? "true" : "false"}
            onClick={() => setIsToggleOpen((open) => !open)}
          >
            <div
              className="absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-2 bg-gray-900 dark:bg-gray-200 transition-transform duration-300"
              style={{
                transformOrigin: "center",
                transform: isToggleOpen
                  ? "translateX(-50%) translateY(0) rotate(45deg)"
                  : "translateX(-50%) translateY(-0.5rem) rotate(0deg)",
              }}
            />
            <div
              className={`absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 bg-gray-900 dark:bg-gray-200 transition-opacity duration-300 ${
                isToggleOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              className="absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 translate-y-2 bg-gray-900 dark:bg-gray-200 transition-transform duration-300"
              style={{
                transformOrigin: "center",
                transform: isToggleOpen
                  ? "translateX(-50%) translateY(0) rotate(-45deg)"
                  : "translateX(-50%) translateY(0.5rem) rotate(0deg)",
              }}
            />
          </button>

          {/* Desktop Menu */}
          <ul className="hidden space-x-8 lg:flex">
            {menuItems.map(({ key, name, path }) => (
              <li key={key}>
                <Link
                  to={path}
                  className={`relative inline-block px-2 py-2 transition-colors duration-300 hover:text-pink-600 dark:hover:text-pink-400 ${
                    activeMenu === key
                      ? "text-pink-600 dark:text-pink-400 font-semibold before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-full before:bg-pink-600 dark:before:bg-pink-400"
                      : ""
                  }`}
                  onClick={() => setActiveMenu(key)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu */}
          <div
            className={`fixed inset-x-0 top-16 z-30 origin-top rounded-b-md bg-white/95 p-6 backdrop-blur-md shadow-md dark:bg-gray-900/95 lg:hidden transition-transform duration-300 ${
              isToggleOpen ? "scale-y-100" : "scale-y-0 pointer-events-none"
            }`}
            style={{ transformOrigin: "top" }}
          >
            <ul className="flex flex-col space-y-4">
              {menuItems.map(({ key, name, path }) => (
                <li key={key}>
                  <Link
                    to={path}
                    className={`block w-full rounded-md px-4 py-2 text-center text-lg font-medium transition-colors duration-300 hover:bg-pink-100 hover:text-pink-700 dark:hover:bg-pink-900 dark:hover:text-pink-300 ${
                      activeMenu === key
                        ? "bg-pink-200 dark:bg-pink-800 text-pink-700 dark:text-pink-300"
                        : "text-gray-700 dark:text-gray-200"
                    }`}
                    onClick={() => setActiveMenu(key)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
