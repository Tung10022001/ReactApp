import React from "react";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <div className="course bg-gray-100 dark:bg-slate-600 dark:text-white py-16">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-12 ">
          <h2 className="text-2xl font-bold text-orange-600">
            ĐÀO TẠO 5 NGÀNH ĐƯỢC SĂN ĐÓN NHẤT HIỆN NAY
          </h2>
          <p className="text-lg font-medium text-gray-700 dark:text-white">
            NGÀNH HOT LƯƠNG CAO CHÓT VÓT
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full md:w-1/3 bg-white dark:bg-slate-500 p-4 rounded-lg shadow-lg">
            <img
              src="https://admin.yersin.edu.vn//Uploads/images/nen-hoc-ky-thuat-phan-mem-hay-cong-nghe-thong-tin-1.jpg"
              alt="Phát triển phần mềm"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-bold text-orange-600 mt-4">
              PHÁT TRIỂN PHẦN MỀM
            </h3>
            <ul className="list-disc list-inside mt-2">
              <li>Frontend Developer</li>
              <li>Backend Developer</li>
              <li>Fullstack Developer</li>
              <li>Mobile Developer</li>
            </ul>
            <div className="text-center mt-4">
              <Link
                to="/register"
                className="bg-orange-500 text-white py-2 px-4 rounded-md font-bold animate-pulse"
              >
                Đăng ký ngay
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/3 bg-white dark:bg-slate-500 p-4 rounded-lg shadow-lg">
            <img
              src="https://huflit.edu.vn/wp-content/uploads/2023/05/1-4.png"
              alt="Thương mại điện tử"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-bold text-orange-600 mt-4">
              THƯƠNG MẠI ĐIỆN TỬ
            </h3>
            <ul className="list-disc list-inside mt-2">
              <li>Digital Marketing</li>
              <li>KEY ACCOUNT EXECUTIVE</li>
              <li>Business Analyst</li>
              <li>E-commerce Executive</li>
            </ul>
            <div className="text-center mt-4">
              <Link
                to="/register"
                className="bg-orange-500 text-white py-2 px-4 rounded-md font-bold animate-pulse"
              >
                Đăng ký ngay
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/3 bg-white dark:bg-slate-500 p-4 rounded-lg shadow-lg">
            <img
              src="https://cmcts.com.vn/media/data/users/SEO_phase_2/SEOMD/quan-ly-trai-nghiem-khach-hang-cxm/quan-tri-he-thong-mang_%281%29.jpg"
              alt="Quản trị mạng"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-bold text-orange-600 mt-4">
              QUẢN TRỊ MẠNG
            </h3>
            <ul className="list-disc list-inside mt-2">
              <li> IT SERVICE SPEACILIS</li>
              <li>System Admin</li>
              <li>Chuyên gia bảo mật mạng và hệ thống</li>
              <li>IT Technical Support</li>
            </ul>
            <div className="text-center mt-4">
              <Link
                to="/register"
                className="bg-orange-500 text-white py-2 px-4 rounded-md font-bold animate-pulse"
              >
                Đăng ký ngay
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/3 bg-white dark:bg-slate-500 p-4 rounded-lg shadow-lg">
            <img
              src="https://d35y3h46sw2vsm.cloudfront.net/w/wp-content/uploads/2023/06/Graphic-Design.jpg"
              alt="Thiết kế đồ họa"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-bold text-orange-600 mt-4">
              THIẾT KẾ ĐỒ HỌA
            </h3>
            <ul className="list-disc list-inside mt-2">
              <li>Thiết kế bao bì</li>
              <li>Thiết kế quảng cáo và Marketing </li>
              <li>Thiết kế đồ họa giao diện người dùng</li>
              <li>Đồ họa chuyển động</li>
              <li>Thiết kế Game và hoạt hình 2D</li>
            </ul>
            <div className="text-center mt-4">
              <Link
                to="/register"
                className="bg-orange-500 text-white py-2 px-4 rounded-md font-bold animate-pulse"
              >
                Đăng ký ngay
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/3 bg-white dark:bg-slate-500 p-4 rounded-lg shadow-lg">
            <img
              src="https://file3.qdnd.vn/data/images/0/2023/06/13/tominhngoc/baiphu21140831pm.png?dpi=150&quality=100&w=870"
              alt="Quản trị mạng"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-bold text-orange-600 mt-4">
              AN NINH MẠNG
            </h3>
            <ul className="list-disc list-inside mt-2">
              <li>SECURITY OPERATION CENTER(SOC)</li>
              <li>Chuyên gia cơ sở hạ tầng và an ninh </li>
              <li>Kiểm thử xâm nhập hệ thống</li>
              <li>Bảo mật hệ thống thông tin và quản lý rủi ro</li>
            </ul>
            <div className="text-center mt-4">
              <Link
                to="/register"
                className="bg-orange-500 text-white py-2 px-4 rounded-md font-bold animate-pulse"
              >
                Đăng ký ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
