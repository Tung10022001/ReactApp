import { Link } from "react-router-dom";
import { useState } from "react";
import TopBar from "./TopBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const [showDropdown, setShowDropdown] = useState({
    courses: false,
    shortCourses: false,
  });
  let dropdownTimer;

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleMouseEnter = (menu) => {
    clearTimeout(dropdownTimer);
    setShowDropdown((prev) => ({ ...prev, [menu]: true }));
  };

  const handleMouseLeave = (menu) => {
    dropdownTimer = setTimeout(() => {
      setShowDropdown((prev) => ({ ...prev, [menu]: false }));
    }, 300); // Adjust the delay time as needed
  };

  return (
    <>
      <TopBar />
      <header className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://w.ladicdn.com/s550x350/61a046d06f6075006912857e/logo-ispace-20240114053146-ygln9.png"
              alt="Logo"
              className="h-12 md:h-16 lg:h-12 xl:h-24 mr-3"
            />
          </div>
          <nav className="hidden lg:flex gap-x-4 items-center">
            <Link
              to="/"
              className="text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200 hover:scale-105 transition-transform duration-200"
            >
              Trang chủ
            </Link>
            <div
              className="relative text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200 hover:scale-105 transition-transform duration-200"
              onMouseEnter={() => handleMouseEnter("courses")}
              onMouseLeave={() => handleMouseLeave("courses")}
            >
              <span className="cursor-pointer">Ngành học ▼</span>
              {showDropdown.courses && (
                <ul className="absolute bg-white dark:bg-gray-700 text-black dark:text-white shadow-lg rounded mt-2 w-48">
                  <li>
                    <Link
                      to="/software-development"
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      Phát triển phần mềm
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/e-commerce"
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      Thương mại điện tử
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/network-management"
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      Quản trị mạng
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/graphic-design"
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      Thiết kế đồ họa
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cyber-security"
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      An ninh mạng
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div
              className="relative text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200 hover:scale-105 transition-transform duration-200"
              onMouseEnter={() => handleMouseEnter("shortCourses")}
              onMouseLeave={() => handleMouseLeave("shortCourses")}
            >
              <span className="cursor-pointer">Khóa ngắn hạn ▼</span>
              {showDropdown.shortCourses && (
                <ul className="absolute bg-white dark:bg-gray-700 text-black dark:text-white shadow-lg rounded mt-2 w-48">
                  <li>
                    <Link
                      to="/aws"
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      AWS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ceh"
                      className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      CEH
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <Link
              to="/register"
              className="text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200 hover:scale-105 transition-transform duration-200"
            >
              Đăng ký ngay
            </Link>
            <Link
              to="/dashboard"
              className="text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200 hover:scale-105 transition-transform duration-200"
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
          className={`bg-white dark:bg-gray-800 lg:hidden flex flex-col gap-y-4 mt-4 duration-[0.4s] ease-in-out ${
            showMobileNavbar ? "h-full opacity-100" : "h-0 opacity-0"
          }`}
        >
          <Link
            to="/"
            className="text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200 hover:scale-105 transition-transform duration-200"
            onClick={() => setShowMobileNavbar(false)}
          >
            Trang chủ
          </Link>
          <div className="relative">
            <span
              className="text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200 hover:scale-105 transition-transform duration-200 cursor-pointer"
              onClick={() =>
                setShowDropdown((prev) => ({ ...prev, courses: !prev.courses }))
              }
            >
              Ngành học ▼
            </span>
            {showDropdown.courses && (
              <ul className="flex flex-col gap-y-2 mt-2">
                <li>
                  <Link
                    to="/software-development"
                    className="block text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200 hover:scale-105 transition-transform duration-200"
                    onClick={() => setShowMobileNavbar(false)}
                  >
                    Phát triển phần mềm
                  </Link>
                </li>
                <li>
                  <Link
                    to="/e-commerce"
                    className="block text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200 hover:scale-105 transition-transform duration-200"
                    onClick={() => setShowMobileNavbar(false)}
                  >
                    Thương mại điện tử
                  </Link>
                </li>
                <li>
                  <Link
                    to="/network-management"
                    className="block text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200 hover:scale-105 transition-transform duration-200"
                    onClick={() => setShowMobileNavbar(false)}
                  >
                    Quản trị mạng
                  </Link>
                </li>
                <li>
                  <Link
                    to="/graphic-design"
                    className="block text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200 hover:scale-105 transition-transform duration-200"
                    onClick={() => setShowMobileNavbar(false)}
                  >
                    Thiết kế đồ họa
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cyber-security"
                    className="block text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200 hover:scale-105 transition-transform duration-200"
                    onClick={() => setShowMobileNavbar(false)}
                  >
                    An ninh mạng
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div className="relative">
            <span
              className="text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200 hover:scale-105 transition-transform duration-200 cursor-pointer"
              onClick={() =>
                setShowDropdown((prev) => ({
                  ...prev,
                  shortCourses: !prev.shortCourses,
                }))
              }
            >
              Khóa ngắn hạn ▼
            </span>
            {showDropdown.shortCourses && (
              <ul className="flex flex-col gap-y-2 mt-2">
                <li>
                  <Link
                    to="/aws"
                    className="block text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200 hover:scale-105 transition-transform duration-200"
                    onClick={() => setShowMobileNavbar(false)}
                  >
                    AWS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ceh"
                    className="block text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200 hover:scale-105 transition-transform duration-200"
                    onClick={() => setShowMobileNavbar(false)}
                  >
                    CEH
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link
            to="/register"
            className="text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200 hover:scale-105 transition-transform duration-200"
            onClick={() => setShowMobileNavbar(false)}
          >
            Đăng ký ngay
          </Link>
          <Link
            to="/dashboard"
            className="text-xl font-semibold hover:text-gray-600 dark:hover:text-gray-200 hover:scale-105 transition-transform duration-200"
            onClick={() => setShowMobileNavbar(false)}
          >
            Dashboard
          </Link>
          <button
            onClick={toggleDarkMode}
            className="ml-4 bg-gray-200 dark:bg-gray-700 dark:text-white p-2 rounded text-lg font-semibold"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
