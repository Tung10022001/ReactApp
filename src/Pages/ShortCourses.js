import React from "react";
import { Link } from "react-router-dom";

const ShortCourse = () => {
  return (
    <div className="short-course">
      <header className="bg-gradient-to-r from-gray-800 to-orange-500 text-white p-8 text-center relative">
        <h1 className="text-4xl font-bold">KHÓA HỌC NGẮN HẠN</h1>
        <p className="text-xl mt-2">70% thực hành</p>
      </header>
      <div className="flex flex-wrap dark:bg-slate-600 dark:text-white justify-center p-8">
        <div className="course bg-white border dark:bg-slate-500 dark:text-white border-gray-200 rounded-lg m-8 p-6 w-full md:w-1/3 lg:w-1/4 shadow-lg text-center">
          <img
            src="https://ispace.edu.vn/wp-content/uploads/2023/08/Group-62-768x568.jpg"
            alt="AWS Course"
            className="w-48 h-48 object-cover mx-auto mb-6 mt-6"
          />
          <h2 className="text-2xl text-orange-500 font-semibold mb-2">
            KHÓA HỌC AWS
          </h2>
          <p className="text-gray-700 dark:text-white">
            Introduction to AWS services and cloud management.
          </p>
          <br></br>
          <Link
            to="/register"
            className="bg-orange-500 text-white py-2 px-4 rounded-md font-bold"
          >
            Đăng ký ngay
          </Link>
        </div>
        <div className="course bg-white border dark:bg-slate-500 dark:text-white border-gray-200 rounded-lg m-8 p-6 w-full md:w-1/3 lg:w-1/4 shadow-lg text-center">
          <img
            src="https://ispace.edu.vn/wp-content/uploads/2023/09/Group-91-768x665.jpg"
            alt="CEH Course"
            className="w-48 h-48 object-cover mx-auto mb-6 mt-6"
          />
          <h2 className="text-2xl text-orange-500 font-semibold mb-2">
            KHÓA HỌC CEH (V12)
          </h2>
          <p className="text-gray-700 dark:text-white">
            Learn ethical hacking and network security fundamentals.
          </p>
          <br></br>
          <Link
            to="/register"
            className="bg-orange-500 text-white py-2 px-4 rounded-md font-bold"
          >
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShortCourse;
