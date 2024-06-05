// src/components/Register.js
import React from "react";
import SheetsForm from "../Components/SheetForm";

const Register = () => {
  return (
    <div
      className="register min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage:
          "url(https://w.ladicdn.com/s1850x1300/61a046d06f6075006912857e/background-1-20240203053720-i8xgx.png)",
      }}
    >
      {/* Main content */}
      <main className="flex flex-col items-center w-full flex-1 p-5">
        <div className="text-center mt-8">
          <h2 className="text-3xl font-bold text-red-500">
            QUY TRÌNH TUYỂN SINH 2024
          </h2>
        </div>

        {/* Quy trình tuyển sinh section */}
        <div className="flex flex-col items-center w-full max-w-6xl">
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold text-white dark:text-black">
              Bạn đã sẵn sàng trở thành sinh viên iSPACE?
            </h2>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-center items-center w-full">
            <div className="flex flex-col items-center md:w-1/3 p-4">
              <div
                className="bg-gradient-to-r from-blue-300 to-orange-300 bg-opacity-50 p-4 rounded-lg shadow-md"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
              >
                <h3 className="text-xl font-bold">1. NỘP HỒ SƠ XÉT TUYỂN</h3>
              </div>
            </div>
            <div className="flex flex-col items-center md:w-1/3 p-4">
              <div
                className="bg-gradient-to-r from-blue-300 to-orange-300 bg-opacity-50 p-4 rounded-lg shadow-md"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
              >
                <h3 className="text-xl font-bold">
                  2. NHẬN GIẤY BÁO / EMAIL NHẬP HỌC
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-center md:w-1/3 p-4">
              <div
                className="bg-gradient-to-r from-blue-300 to-orange-300 bg-opacity-50 p-4 rounded-lg shadow-md"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
              >
                <h3 className="text-xl font-bold">3. HOÀN TẤT HỌC PHÍ</h3>
              </div>
            </div>
          </div>

          <div className="mt-8 w-full text-center">
            <h2 className="text-2xl font-bold text-white dark:text-black">
              CÁC CỘT MỐC XÉT TUYỂN 2024
            </h2>
            <div
              className="bg-gradient-to-r from-blue-300 to-orange-300 bg-opacity-50 p-4 rounded-lg shadow-md"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
            >
              <ul className="list-disc list-inside text-black font-bold">
                <li>ĐỢT 4: TỪ NGÀY 20/05/2024 - 07/07/2024</li>
                <li>ĐỢT 5: TỪ NGÀY 08/07/2024 - 04/08/2024</li>
                <li>ĐỢT 6: TỪ NGÀY 05/08/2024 - 18/08/2024</li>
                <li>ĐỢT 7: TỪ NGÀY 19/08/2024 - 01/09/2024</li>
                <li>ĐỢT 8: TỪ NGÀY 02/09/2024 - 22/09/2024</li>
                <li>ĐỢT 9: TỪ NGÀY 23/09/2024 - 24/11/2024</li>
              </ul>
            </div>
          </div>

          {/* Form đăng ký section */}
          <div className="dang-ky-section py-20 w-full max-w-6xl flex justify-center items-center">
            <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md w-full max-w-md">
              <h3 className="text-2xl font-bold">ĐĂNG KÝ NGAY</h3>
              <p className="text-orange-500 mt-2">NHẬN iPHONE 15 PRO</p>
              <p className="mt-2">
                (Cam kết học phí không đổi, không phát sinh phụ phí, giới thiệu
                việc làm tại hơn 100 Doanh nghiệp khi ra trường)
              </p>
              <SheetsForm></SheetsForm>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
