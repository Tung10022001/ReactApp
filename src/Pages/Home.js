// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faUserGraduate,
  faHandshake,
  faCogs,
  faLaptopCode,
  faUniversity,
  faFlask,
  faShieldAlt,
  faRedo,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import { getUser, getUsers } from "../utils/user.services";
import { useQuery } from "@tanstack/react-query";
import SheetsForm from "../Components/SheetForm";

const Home = () => {
  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: (id) => getUsers(id),
  });

  const userQueryById = useQuery({
    queryKey: ["user", 1],
    queryFn: () => getUser(1),
  });

  return (
    <div
      className="home min-h-screen w-full bg-cover bg-center  flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url(https://w.ladicdn.com/s1850x1300/61a046d06f6075006912857e/background-1-20240203053720-i8xgx.png)",
      }}
    >
      <main
        className="container mx-auto flex flex-col items`-center justify-center min-h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://w.ladicdn.com/s1850x1300/61a046d06f6075006912857e/background-1-20240203053720-i8xgx.png)",
        }}
      >
        <div className="text-center mt-8">
          <h2 className="text-4xl font-bold text-red-500">TUYỂN SINH 2024</h2>
          <h1 className="text-5xl font-bold text-white dark:text-black mt-4">
            VÀO iSPACE NHẬN iPHONE
          </h1>
          <p className="text-white dark:text-black mt-2">
            (09 iphone 15 pro dành tặng cho 09 bạn có điểm cao nhất mỗi đợt xét
            tuyển)
          </p>
          <img
            src="https://w.ladicdn.com/s550x550/61a046d06f6075006912857e/natural-iphone-15-pro-sku-header-120923-20240206060205-g-nx4.png"
            alt="iPhone 15 Pro"
            className="w-48 mt-4"
          />
        </div>
        <div className="mt-8 flex flex-wrap justify-center items-center w-full max-w-6xl">
          <div className="w-full md:w-1/2 p-4">
            <img
              src="https://w.ladicdn.com/s900x700/61a046d06f6075006912857e/6-20221012083142-vs4i2.jpg"
              alt="Group of students"
              className="w-full border-4 border-orange-500"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl dark:text-black font-bold">
                ĐĂNG KÝ NGAY
              </h3>
              <p className="text-orange-500  mt-2">NHẬN iPHONE 15 PRO</p>
              <p className="mt-2 dark:text-black">
                (Cam kết học phí không đổi, không phát sinh phụ phí, giới thiệu
                việc làm tại hơn 100 Doanh nghiệp khi ra trường)
              </p>
              <SheetsForm></SheetsForm>
            </div>
          </div>
        </div>
      </main>
      <div className="highlights bg-white dark:bg-slate-900 dark:text-white text-black py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-orange-600">
              iSPACE VÀ NHỮNG CON SỐ BIẾT NÓI
            </h2>
          </div>

          <div className="flex flex-wrap justify-center mb-12">
            <div className="w-full md:w-1/4 p-4 text-center">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="text-orange-600 text-4xl mb-2"
              />
              <div className="text-4xl font-bold text-orange-600">18</div>
              <p className="text-lg font-medium text-gray-700 dark:text-white">
                Năm phát triển
              </p>
            </div>
            <div className="w-full md:w-1/4 p-4 text-center">
              <FontAwesomeIcon
                icon={faUserGraduate}
                className="text-orange-600 text-4xl mb-2"
              />
              <div className="text-4xl font-bold text-orange-600">15000</div>
              <p className="text-lg font-medium text-gray-700 dark:text-white">
                Sinh viên được đào tạo
              </p>
            </div>
            <div className="w-full md:w-1/4 p-4 text-center">
              <FontAwesomeIcon
                icon={faHandshake}
                className="text-orange-600 text-4xl mb-2"
              />
              <div className="text-4xl font-bold text-orange-600">100%</div>
              <p className="text-lg font-medium text-gray-700 dark:text-white">
                Sinh viên có việc làm ngay
              </p>
            </div>
            <div className="w-full md:w-1/4 p-4 text-center">
              <FontAwesomeIcon
                icon={faCogs}
                className="text-orange-600 text-4xl mb-2"
              />
              <div className="text-4xl font-bold text-orange-600">70%</div>
              <p className="text-lg font-medium text-gray-700 dark:text-white">
                Thực hành
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-1/2 p-4">
              <div className="relative">
                <img
                  src="https://ispace.edu.vn/wp-content/uploads/2024/01/DSCF9681-768x512.jpg"
                  alt="Group of students"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500 to-transparent rounded-lg"></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <div className="bg-white dark:bg-gray-600 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">
                  ĐẶC QUYỀN KHI TRỞ THÀNH SINH VIÊN CAO ĐẲNG iSPACE
                </h3>
                <ul className="list-none space-y-4">
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-2">
                      01
                    </span>
                    <span className="dark:text-white">Hơn 300 CLB</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-2">
                      02
                    </span>
                    <span className="dark:text-white">
                      18 năm định hình và phát triển (since 2006)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-2">
                      03
                    </span>
                    <span className="dark:text-white">
                      100% có việc làm ngay khi tốt nghiệp
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-2">
                      04
                    </span>
                    <span className="dark:text-white">
                      Cơ sở vật chất hiện đại
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-2">
                      05
                    </span>
                    <span className="dark:text-white">
                      70% thời gian thực hành
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold text-xl mr-2">
                      06
                    </span>
                    <span className="dark:text-white">
                      Liên thông đại học công top đầu
                    </span>
                  </li>
                </ul>
                <div className="mt-8 text-center">
                  <Link
                    to="/register"
                    className="bg-orange-500 text-white py-2 px-4 rounded-md font-bold animate-floating"
                  >
                    Đăng ký ngay
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-orange-600">
              HÀNH TRÌNH 18 NĂM PHÁT TRIỂN CAO ĐẲNG iSPACE
            </h2>
            <div className="flex flex-wrap justify-center items-center mt-8">
              <div className="w-1/2 md:w-1/6 p-4 text-center">
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  className="text-orange-600 text-4xl mb-2"
                />
                <div className="text-xl font-bold">2006</div>
                <p className="text-sm">
                  Trung tâm Dạy nghề Tin học CNTT Không gian
                </p>
              </div>
              <div className="w-1/2 md:w-1/6 p-4 text-center">
                <FontAwesomeIcon
                  icon={faUniversity}
                  className="text-orange-600 text-4xl mb-2"
                />
                <div className="text-xl font-bold">2008</div>
                <p className="text-sm">Trường cao đẳng nghề CNTT iSPACE</p>
              </div>
              <div className="w-1/2 md:w-1/6 p-4 text-center">
                <FontAwesomeIcon
                  icon={faFlask}
                  className="text-orange-600 text-4xl mb-2"
                />
                <div className="text-xl font-bold">2015</div>
                <p className="text-sm">Ra mắt viện nghiên cứu & huấn luyện</p>
              </div>
              <div className="w-1/2 md:w-1/6 p-4 text-center">
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  className="text-orange-600 text-4xl mb-2"
                />
                <div className="text-xl font-bold">2017</div>
                <p className="text-sm">Trường cao đẳng An ninh mạng iSPACE</p>
              </div>
              <div className="w-1/2 md:w-1/6 p-4 text-center">
                <FontAwesomeIcon
                  icon={faRedo}
                  className="text-orange-600 text-4xl mb-2"
                />
                <div className="text-xl font-bold">2021</div>
                <p className="text-sm">Đổi mới toàn diện Trường</p>
              </div>
              <div className="w-1/2 md:w-1/6 p-4 text-center">
                <FontAwesomeIcon
                  icon={faChalkboardTeacher}
                  className="text-orange-600 text-4xl mb-2"
                />
                <div className="text-xl font-bold">2023</div>
                <p className="text-sm">
                  Trường cao đẳng An ninh mạng iSPACE có PGS, TS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white dark:bg-slate-600 dark:text-white py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-2xl font-bold text-orange-600 mb-8 text-center">
            GIẢNG VIÊN TIÊU BIỂU CỦA ISAPCE
          </h2>
          <div class="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            <div class="bg-white  dark:bg-slate-600 dark:text-white shadow-md overflow-hidden mb-8">
              <img
                src="https://ispace.edu.vn/wp-content/uploads/2024/01/format-giang-vien-edit-option-2-10-730x1024.png"
                alt="Uploaded Graphic"
                class="w-auto h-auto rounded-full mx-auto mt-4"
              />
              <div class="p-4">
                <p class="text-gray-700   dark:text-white text-center">
                  Nguyễn Duy Hàm
                </p>
                <p class="text-gray-700    dark:text-white text-center">
                  Thầy Hiệu Trưởng - Tiến Sỹ
                </p>
                <div class="flex justify-center">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mr-4"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 " />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faSquareInstagram}
                      className="w-6 h-6"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="bg-white  dark:bg-slate-600 shadow-md overflow-hidden mb-8">
              <img
                src="https://ispace.edu.vn/wp-content/uploads/2024/01/format-giang-vien-edit-option-2-11-730x1024.png"
                alt="Uploaded Graphic"
                class="w-auto h-auto rounded-full mx-auto mt-4"
              />
              <div class="p-4">
                <p class="text-gray-700  dark:text-white text-center">
                  Lê Hoàng Bình Nguyên
                </p>
                <p class="text-gray-700  dark:text-white text-center">
                  Ths. Phó Khoa CNTT
                </p>
                <div class="flex justify-center">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mr-4"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 " />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faSquareInstagram}
                      className="w-6 h-6"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="bg-white  dark:bg-slate-600 shadow-md overflow-hidden mb-8">
              <img
                src="https://ispace.edu.vn/wp-content/uploads/2024/01/format-giang-vien-edit-option-2-12-730x1024.png"
                alt="Uploaded Graphic"
                class="w-auto h-auto rounded-full mx-auto mt-4"
              />
              <div class="p-4">
                <p class="text-gray-700  dark:text-white text-center">
                  Thương Phạm Hoài Thương
                </p>
                <p class="text-gray-700  dark:text-white text-center">
                  Giảng viên Khoa An Ninh Mạng
                </p>
                <div class="flex justify-center">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mr-4"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 " />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faSquareInstagram}
                      className="w-6 h-6"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="bg-white  dark:bg-slate-600 shadow-md overflow-hidden mb-8">
              <img
                src="https://ispace.edu.vn/wp-content/uploads/2021/11/NguyenThePhuong_GV.png"
                alt="Uploaded Graphic"
                class="w-auto h-auto rounded-full mx-auto mt-4"
              />
              <div class="p-4">
                <p class="text-gray-700  dark:text-white text-center">
                  Nguyễn Thế Phương
                </p>
                <p class="text-gray-700  dark:text-white text-center">
                  Ths. Giảng viên cơ hữu
                </p>
                <div class="flex justify-center">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mr-4"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 " />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faSquareInstagram}
                      className="w-6 h-6"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
