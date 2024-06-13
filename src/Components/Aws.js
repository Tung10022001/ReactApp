import React from "react";
import SheetsForm from "../Components/SheetForm";

function Carousel() {
  return (
    <div className="">
      <div className="img-ech dark:bg-slate-600 dark:text-white">
        <img
          fetchpriority="high"
          decoding="async"
          width="2400"
          height="1042"
          src="https://ispace.edu.vn/wp-content/uploads/2021/12/banner-1920x550-Template-scaled.jpeg"
          className="attachment-full size-full wp-image-13979"
          alt=""
          sizes="(max-width: 2500px) 100vw, 2500px"
        />
        <span className="bg-opacity-50"></span>
        <div className="container">
          <h1 className="text-white p-20 text-2xl">KHÓA HỌC AWS</h1>
        </div>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 dark:bg-slate-600 dark:text-white"
        style={{ width: "100%", margin: "0 auto" }}
      >
        <div className="p-8 rounded-lg md:col-span-4/6 md:border md:border-gray-300">
          <h1 className="text-3xl font-bold pb-4" style={{ color: "#f57e25" }}>
            THÔNG TIN KHÓA HỌC AWS CLOUD FOUNDATION
          </h1>
          <ul className="list-disc ml-6 text-xl">
            <li>
              Tên khóa học: <b> AWS Cloud Foundation</b>
            </li>
            <li>
              Giảng viên: <b>Ths. Lê Hoàng Bình Nguyên</b>
            </li>
            <li>Thời lượng: 20h, mỗi buổi 2h</li>
            <li>Lịch học: Tối 2 – 4 – 6 từ 18h30 đến 20h30</li>
            <li>
              Yêu cầu học viên: Có kiến thức CNTT cơ bản, có máy tính hoặc
              laptop
            </li>
            <li>Hình thức: online/offline </li>
          </ul>
        </div>
        <div className="p-8 rounded-lg md:col-span-2/6 md:border md:border-gray-300">
          <img
            fetchpriority="high"
            decoding="async"
            width="640"
            height="473"
            src="https://ispace.edu.vn/wp-content/uploads/2023/08/Group-62-1024x757.jpg"
            class="attachment-large size-large wp-image-12991"
            alt="thong-tin-khoa-ngan-han"
            srcset="https://ispace.edu.vn/wp-content/uploads/2023/08/Group-62-1024x757.jpg 1024w, https://ispace.edu.vn/wp-content/uploads/2023/08/Group-62-300x222.jpg 300w, https://ispace.edu.vn/wp-content/uploads/2023/08/Group-62-768x568.jpg 768w, https://ispace.edu.vn/wp-content/uploads/2023/08/Group-62-1536x1136.jpg 1536w, https://ispace.edu.vn/wp-content/uploads/2023/08/Group-62-2048x1515.jpg 2048w"
            sizes="(max-width: 640px) 100vw, 640px"
          />
        </div>
      </div>
    </div>
  );
}
function GiangVien() {
  return (
    <div className="pb-10 dark:bg-slate-700 dark:text-white">
      <h6
        className="text-3xl xl:text-3xl  md:leading-none xl:leading-tight text-center mb-5 mt-10 "
        style={{ color: "#ffb606", fontWeight: "bold" }}
      >
        THÔNG TIN GIẢNG VIÊN
      </h6>

      <section className="flex flex-wrap items-center justify-center">
        <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 flex justify-center">
          <img
            loading="lazy"
            decoding="async"
            width="300" // Đặt kích thước mong muốn cho hình ảnh nhỏ
            height="566"
            src="https://ispace.edu.vn/wp-content/uploads/2023/08/Group-66-768x1491.jpg"
            class="attachment-medium_large size-medium_large wp-image-12996"
            alt="giang-vien-AWS"
            srcset="https://ispace.edu.vn/wp-content/uploads/2023/08/Group-66-768x1491.jpg 768w, https://ispace.edu.vn/wp-content/uploads/2023/08/Group-66-155x300.jpg 155w, https://ispace.edu.vn/wp-content/uploads/2023/08/Group-66-528x1024.jpg 528w, https://ispace.edu.vn/wp-content/uploads/2023/08/Group-66-791x1536.jpg 791w, https://ispace.edu.vn/wp-content/uploads/2023/08/Group-66-1055x2048.jpg 1055w, https://ispace.edu.vn/wp-content/uploads/2023/08/Group-66-scaled.jpg 1319w"
            sizes="(max-width: 640px) 100vw, 640px"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2">
          <ul
            className="list-disc"
            style={{ width: "80%", margin: "0 auto", lineHeight: "40px" }}
          >
            <li>
              Thầy <strong>Ths Lê Hoàng Bình Nguyên</strong>
            </li>
            <li>Phó trưởng khoa Công nghệ thông tin</li>
            <li>
              Có hơn 5 năm giảng dạy tại nhiều trường Đại học danh tiếng ở Việt
              Nam.
            </li>
            <li>
              Là huấn luyện viên của nhiều cuộc thi chuyên môn uy tín dành cho
              sinh viên.
            </li>
            <li>
              Sở hữu chứng chỉ AWS Certified Solutions Architect và AWS
              Certified Developer – Associate về điện toán đám mây.
            </li>
            <li>
              Từng chiến thắng các cuộc thi chuyên môn uy tín như từ khi còn là
              sinh viên: Olympic Tin học sinh viên Việt Nam, Lập trình sinh viên
              quốc tế ICPC,…
            </li>
            <li>
              Giảng dạy điện toán đám mây AWS cho gần một ngàn sinh viên, giảng
              viên các trường đại học, cao đẳng của Việt Nam và hiện là giảng
              viên chính thức của chương trình AWS/ReStart Việt Nam.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
function LoiThe() {
  return (
    <div className="pb-10 pt-10 dark:bg-slate-600 dark:text-white">
      <h1
        className="text-4xl font-bold pb-4 text-center"
        style={{ color: "#f57e25" }}
      >
        LỢI THẾ KHI HỌC CEH TẠI iSPACE CENTER
      </h1>
      <div className="flex justify-center">
        <div>
          <img
            decoding="async"
            width="640"
            height="242"
            src="https://ispace.edu.vn/wp-content/uploads/2023/09/CEH-2-768x290.jpg"
            className=""
            alt=""
            srcset="https://ispace.edu.vn/wp-content/uploads/2023/09/CEH-2-768x290.jpg 768w, https://ispace.edu.vn/wp-content/uploads/2023/09/CEH-2-300x113.jpg 300w, https://ispace.edu.vn/wp-content/uploads/2023/09/CEH-2-1024x386.jpg 1024w, https://ispace.edu.vn/wp-content/uploads/2023/09/CEH-2-1536x580.jpg 1536w, https://ispace.edu.vn/wp-content/uploads/2023/09/CEH-2.jpg 1786w"
            sizes="(max-width: 640px) 100vw, 640px"
          />
          <img
            decoding="async"
            width="640"
            height="238"
            src="https://ispace.edu.vn/wp-content/uploads/2023/09/Group-95-768x285.jpg"
            className="pt-5"
            alt="loi-the-khi-hoc-CEH-tai-iSPACE"
            srcset="https://ispace.edu.vn/wp-content/uploads/2023/09/Group-95-768x285.jpg 768w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-95-300x111.jpg 300w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-95-1024x379.jpg 1024w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-95-1536x569.jpg 1536w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-95-2048x759.jpg 2048w"
            sizes="(max-width: 640px) 100vw, 640px"
          />
        </div>
      </div>
    </div>
  );
}
function Noidung() {
  return (
    <div className="pb-10 pt-10 dark:bg-slate-800 dark:text-white">
      <h1
        className="text-4xl font-bold pb-4 text-center dark:bg-slate-800 dark:text-white"
        style={{ color: "#f57e25" }}
      >
        NỘI DUNG CHƯƠNG TRÌNH HỌC{" "}
        <div style={{ width: "80%", margin: "0 auto" }}>
          <img
            loading="lazy"
            decoding="async"
            width="300" // Đặt kích thước mong muốn cho hình ảnh nhỏ
            height="566"
            src="https://ispace.edu.vn/wp-content/uploads/2023/09/Group-67-scaled.jpg"
            class="attachment-full size-full wp-image-13010"
            alt="noi-dung-khoa-hoc-CEH"
            srcset="https://ispace.edu.vn/wp-content/uploads/2023/09/Group-67-scaled.jpg 947w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-67-111x300.jpg 111w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-67-379x1024.jpg 379w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-67-768x2075.jpg 768w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-67-568x1536.jpg 568w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-67-758x2048.jpg 758w"
            sizes="(max-width: 547px) 100vw, 947px"
          />
        </div>
      </h1>
    </div>
  );
}
function Thongtin() {
  return (
    <div
      style={{ width: "100%", margin: "0 auto" }}
      className="pt-10 pb-10 dark:bg-slate-600 dark:text-white"
    >
      <section className="flex md:flex-row flex-col items-center">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-2xl font-bold pb-4 " style={{ color: "#f57e25" }}>
            ĐỐI TƯỢNG HỌC VIÊN
          </h1>
          <ul className="list-disc text-lg">
            <li className="text-justify">
              Sinh viên muốn học thêm về điện toán đám mây để nâng cao kiến thức
              và lấy chứng chỉ.
            </li>
            <li className="text-justify">
              Những người yêu thích và muốn tìm hiểu về Cloud (AWS)
            </li>
            <li className="text-justify">
              Người muốn học để nâng cao kiến thức.
            </li>
            <li className="text-justify">
              Những người làm về dịch vụ Cloud (Sale, tư vấn viên, marketing,
              chủ doanh nghiệp…)
            </li>
            <li className="text-justify">
              Người muốn lấy chứng chỉ để nâng cao cơ hội việc làm, tăng lương.
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-2xl font-bold pb-4 " style={{ color: "#f57e25" }}>
            VÌ SAO NÊN HỌC AWS
          </h1>
          <ul className="list-disc text-lg">
            <li className="text-justify">
              Là một trong những dịch vụ cloud computing lớn nhất thế giới hiện
              nay.
            </li>
            <li className="text-justify">
              Cung cấp cái nhìn tổng quan về các dịch vụ, những điều nên làm (và
              không nên làm) để xây dựng một hệ thống tốt trên cloud
            </li>
            <li className="text-justify">
              Các doanh nghiệp dịch chuyển dần lên Cloud với tốc độ chóng mặt.
            </li>
            <li style={{ opacity: 0 }}></li>
            <li style={{ opacity: 0 }}></li>
          </ul>
        </div>
      </section>
    </div>
  );
}
const FormComponent = () => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://img4.thuthuatphanmem.vn/uploads/2020/12/26/background-mau-cam-cho-powerpoint_052542327.jpg')",
      }}
    >
      <div className="mt-8 flex flex-wrap justify-center items-center w-full max-w-6xl px-4">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 relative">
          <img
            src="https://w.ladicdn.com/s900x700/61a046d06f6075006912857e/6-20221012083142-vs4i2.jpg"
            alt="Group of students"
            className="w-full border-4 border-orange-500"
          />
        </div>
        <div className="bg-blue-900 text-white p-8 rounded-lg shadow-md w-full md:max-w-md md:mt-8">
          <h3 className="text-2xl font-bold">ĐĂNG KÝ NGAY</h3>
          <p className="text-orange-500 mt-2">NHẬN iPHONE 15 PRO</p>
          <p className="mt-2">
            (Cam kết học phí không đổi, không phát sinh phụ phí, giới thiệu việc
            làm tại hơn 100 Doanh nghiệp khi ra trường)
          </p>
          <SheetsForm></SheetsForm>
        </div>
      </div>
    </div>
  );
};

const Aws = () => {
  return (
    <div>
      <Carousel />
      <GiangVien />
      <LoiThe />
      <Noidung />
      <Thongtin />
      <FormComponent />
    </div>
  );
};
export default Aws;
