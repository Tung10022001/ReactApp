// src/components/Home.js
import React from "react";
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
            style={{ backgroundImage: "url(/background.png)" }}
        >
            <main
                className="container mx-auto flex flex-col items`-center justify-center min-h-screen w-full bg-cover bg-center"
                style={{ backgroundImage: "url(/background.png)" }}
            >
                <div className="text-center mt-8">
                    <h2 className="text-xl font-bold text-red-500">
                        TUYỂN SINH 2024
                    </h2>
                    <h1 className="text-5xl font-bold text-white mt-4">
                        VÀO iSPACE NHẬN iPHONE
                    </h1>
                    <p className="text-white mt-2">
                        (09 iphone 15 pro dành tặng cho 09 bạn có điểm cao nhất
                        mỗi đợt xét tuyển)
                    </p>
                    <img
                        src="/iphone.png"
                        alt="iPhone 15 Pro"
                        className="w-48 mt-4"
                    />
                </div>
                <div className="mt-8 flex flex-wrap justify-center items-center w-full max-w-6xl">
                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src="/group-photo.jpg"
                            alt="Group of students"
                            className="w-full border-4 border-orange-500"
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold">ĐĂNG KÝ NGAY</h3>
                            <p className="text-orange-500 mt-2">
                                NHẬN iPHONE 15 PRO
                            </p>
                            <p className="mt-2">
                                (Cam kết học phí không đổi, không phát sinh phụ
                                phí, giới thiệu việc làm tại hơn 100 Doanh
                                nghiệp khi ra trường)
                            </p>
                            <form className="mt-4 space-y-4">
                                <input
                                    type="text"
                                    placeholder="Họ và tên"
                                    className="w-full p-2 rounded-md text-black"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-2 rounded-md text-black"
                                />
                                <input
                                    type="tel"
                                    placeholder="Số điện thoại"
                                    className="w-full p-2 rounded-md text-black"
                                />
                                <select className="w-full p-2 rounded-md text-black">
                                    <option>Ngành đào tạo</option>
                                    <option>An ninh mạng</option>
                                    <option>Lập trình máy tính</option>
                                    <option>Thiết kế đồ họa</option>
                                    <option>Thương mại điện tử</option>
                                    <option>Quản trị mạng</option>
                                </select>
                                <input
                                    type="date"
                                    placeholder="Ngày tháng năm sinh"
                                    className="w-full p-2 rounded-md text-black"
                                />
                                <button
                                    type="submit"
                                    className="w-full p-2 bg-orange-500 rounded-md"
                                >
                                    Đăng ký
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <div className="highlights bg-white py-16">
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
                            <div className="text-4xl font-bold text-orange-600">
                                18
                            </div>
                            <p className="text-lg font-medium text-gray-700">
                                Năm phát triển
                            </p>
                        </div>
                        <div className="w-full md:w-1/4 p-4 text-center">
                            <FontAwesomeIcon
                                icon={faUserGraduate}
                                className="text-orange-600 text-4xl mb-2"
                            />
                            <div className="text-4xl font-bold text-orange-600">
                                15000
                            </div>
                            <p className="text-lg font-medium text-gray-700">
                                Sinh viên được đào tạo
                            </p>
                        </div>
                        <div className="w-full md:w-1/4 p-4 text-center">
                            <FontAwesomeIcon
                                icon={faHandshake}
                                className="text-orange-600 text-4xl mb-2"
                            />
                            <div className="text-4xl font-bold text-orange-600">
                                100%
                            </div>
                            <p className="text-lg font-medium text-gray-700">
                                Sinh viên có việc làm ngay
                            </p>
                        </div>
                        <div className="w-full md:w-1/4 p-4 text-center">
                            <FontAwesomeIcon
                                icon={faCogs}
                                className="text-orange-600 text-4xl mb-2"
                            />
                            <div className="text-4xl font-bold text-orange-600">
                                70%
                            </div>
                            <p className="text-lg font-medium text-gray-700">
                                Thực hành
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center items-center">
                        <div className="w-full lg:w-1/2 p-4">
                            <div className="relative">
                                <img
                                    src="/group-photo.jpg"
                                    alt="Group of students"
                                    className="w-full rounded-lg shadow-lg"
                                />
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500 to-transparent rounded-lg"></div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 p-4">
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <h3 className="text-2xl font-bold text-orange-600 mb-4">
                                    ĐẶC QUYỀN KHI TRỞ THÀNH SINH VIÊN CAO ĐẲNG
                                    iSPACE
                                </h3>
                                <ul className="list-none space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-orange-600 font-bold text-xl mr-2">
                                            01
                                        </span>
                                        <span>Hơn 300 CLB</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-orange-600 font-bold text-xl mr-2">
                                            02
                                        </span>
                                        <span>
                                            18 năm định hình và phát triển
                                            (since 2006)
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-orange-600 font-bold text-xl mr-2">
                                            03
                                        </span>
                                        <span>
                                            100% có việc làm ngay khi tốt nghiệp
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-orange-600 font-bold text-xl mr-2">
                                            04
                                        </span>
                                        <span>Cơ sở vật chất hiện đại</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-orange-600 font-bold text-xl mr-2">
                                            05
                                        </span>
                                        <span>70% thời gian thực hành</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-orange-600 font-bold text-xl mr-2">
                                            06
                                        </span>
                                        <span>
                                            Liên thông đại học công top đầu
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-8 text-center">
                                    <button className="bg-orange-500 text-white py-2 px-4 rounded-md font-bold">
                                        Đăng ký ngay
                                    </button>
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
                                <p className="text-sm">
                                    Trường cao đẳng nghề CNTT iSPACE
                                </p>
                            </div>
                            <div className="w-1/2 md:w-1/6 p-4 text-center">
                                <FontAwesomeIcon
                                    icon={faFlask}
                                    className="text-orange-600 text-4xl mb-2"
                                />
                                <div className="text-xl font-bold">2015</div>
                                <p className="text-sm">
                                    Ra mắt viện nghiên cứu & huấn luyện
                                </p>
                            </div>
                            <div className="w-1/2 md:w-1/6 p-4 text-center">
                                <FontAwesomeIcon
                                    icon={faShieldAlt}
                                    className="text-orange-600 text-4xl mb-2"
                                />
                                <div className="text-xl font-bold">2017</div>
                                <p className="text-sm">
                                    Trường cao đẳng An ninh mạng iSPACE
                                </p>
                            </div>
                            <div className="w-1/2 md:w-1/6 p-4 text-center">
                                <FontAwesomeIcon
                                    icon={faRedo}
                                    className="text-orange-600 text-4xl mb-2"
                                />
                                <div className="text-xl font-bold">2021</div>
                                <p className="text-sm">
                                    Đổi mới toàn diện Trường
                                </p>
                            </div>
                            <div className="w-1/2 md:w-1/6 p-4 text-center">
                                <FontAwesomeIcon
                                    icon={faChalkboardTeacher}
                                    className="text-orange-600 text-4xl mb-2"
                                />
                                <div className="text-xl font-bold">2023</div>
                                <p className="text-sm">
                                    Trường cao đẳng An ninh mạng iSPACE có PGS,
                                    TS
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
