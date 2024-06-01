// src/components/Header.js
import { Link } from "react-router-dom";
import { useState } from "react";
import TopBar from "./TopBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <TopBar />
      <header className="bg-white dark:bg-black text-black dark:text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 md:h-16 lg:h-12 xl:h-24 mr-3"
            />
          </div>
          <nav className="hidden lg:flex gap-x-4 items-center">
            <Link
              to="/"
              className="text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200"
            >
              Trang chủ
            </Link>
            <Link
              to="/courses"
              className="text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200"
            >
              Ngành học
            </Link>
            <Link
              to="/short-courses"
              className="text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200"
            >
              Khóa ngắn hạn
            </Link>
            <Link
              to="/register"
              className="text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200"
            >
              Đăng ký ngay
            </Link>
            <Link
              to="/dashboard"
              className="text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200"
            >
              Dashboard
            </Link>
            <button
              onClick={toggleDarkMode}
              className="ml-4 bg-gray-200 dark:bg-gray-700 dark:text-white p-2 rounded text-lg font-semibold"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </nav>
          <div
            className="lg:hidden"
            onClick={() => setShowMobileNavbar((prev) => !prev)}
          >
            <FontAwesomeIcon className="w-6 h-6" icon={faEllipsisVertical} />
          </div>
        </div>

        <div
          className={`bg-white lg:hidden flex flex-col gap-y-4 mt-4 duration-[0.4s] ease-in-out ${
            showMobileNavbar ? "h-full opacity-100" : "h-0 opacity-0"
          }`}
        >
          <Link
            to="/"
            className="text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200"
            onClick={() => setShowMobileNavbar(false)}
          >
            Trang chủ
          </Link>
          <Link
            to="/courses"
            className="text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200"
            onClick={() => setShowMobileNavbar(false)}
          >
            Ngành học
          </Link>
          <Link
            to="/short-courses"
            className="text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200"
            onClick={() => setShowMobileNavbar(false)}
          >
            Khóa ngắn hạn
          </Link>
          <Link
            to="/register"
            className="text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200"
            onClick={() => setShowMobileNavbar(false)}
          >
            Đăng ký ngay
          </Link>
          <Link
            to="/dashboard"
            className="text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200"
            onClick={() => setShowMobileNavbar(false)}
          >
            Dashboard
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
