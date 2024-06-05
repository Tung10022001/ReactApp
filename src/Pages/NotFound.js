// src/pages/NotFound.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom if you're using React Router

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <img
        src="https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png"
        alt="Page not found"
        className="mb-8"
      />
      <h1 className="text-4xl mb-2">404 - Trang không tồn tại</h1>
      <p className="text-lg mb-4">
        Xin lỗi, trang bạn đang tìm kiếm không tồn tại.
      </p>
      <Link to="/" className="text-blue-500 hover:underline">
        Trở về trang chủ
      </Link>
    </div>
  );
};

export default NotFound;
