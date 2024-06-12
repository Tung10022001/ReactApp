import React from "react";
import SheetsForm from "../Components/SheetForm";

function Carousel() {
  return (
    <div className="">
      <div className="img-ech dark:bg-slate-600 dark:text-white">
        <span className="bg-opacity-50 "></span>
        <div className="container">
          <h1 className="text-white p-20 text-2xl">KHÓA HỌC CEH</h1>
        </div>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 dark:bg-slate-600 dark:text-white"
        style={{ width: "100%", margin: "0 auto" }}
      >
        <div className="p-8 rounded-lg md:col-span-4/6 md:border md:border-gray-300">
          <h1 className="text-3xl font-bold pb-4" style={{ color: "#f57e25" }}>
            THÔNG TIN KHÓA HỌC
          </h1>
          <ul className="list-disc ml-6 text-xl">
            <li>
              Tên khóa học: <b>CEH (V12) Certified Ethical Hacker</b>
            </li>
            <li>
              Giảng viên: thầy <b>Trương Phạm Hoài Thương</b>
            </li>
            <li>Thời lượng: 40h, mỗi buổi 2h</li>
            <li>Lịch học: Tối 2 – 4 – 6 từ 18h30 đến 20h30</li>
            <li>Hình thức: offline</li>
          </ul>
        </div>
        <div className="p-8 rounded-lg md:col-span-2/6 md:border md:border-gray-300">
          <img
            src="https://ispace.edu.vn/wp-content/uploads/2023/09/Group-91-2048x1774.jpg"
            alt="khoa-hoc-ceh"
            className={`object-cover ${
              window.innerWidth > 1024 ? "w-2/6" : "md:w-full"
            } h-auto`}
          />
        </div>
      </div>
    </div>
  );
}
function DoiTuong() {
  return (
    <section
      className="section section-boxed section-height-default section-height-default pt-10 pb-10 dark:bg-slate-700 dark:text-white"
      style={{ width: "100%", margin: "0 auto" }}
    >
      <h1
        className="text-4xl font-bold pb-4 text-center "
        style={{ color: "#f57e25" }}
      >
        ĐỐI TƯỢNG HỌC VIÊN
      </h1>
      <div className="container column-gap-default md:flex md:flex-col">
        <div
          className="column md:w-full top-column"
          data-id="bcf4630"
          data-element_type="column"
        >
          <div className="widget-wrap populated">
            <div className="widget widget-text-editor">
              <ul
                className="list-disc ml-6 text-xl"
                style={{ lineHeight: "40px" }}
              >
                <li>Nhân viên và học viên bảo mật mạng.</li>
                <li>Chuyên viên công nghệ thông tin.</li>
                <li>Chuyên viên quản trị hệ thống mạng + máy chủ.</li>
                <li>Người quản trị Website + Forum</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="column md:w-full top-column"
          data-id="c34a773"
          data-element_type="column"
        >
          <div className="widget-wrap populated">
            <div
              className="widget widget-text-editor"
              data-id="5b1385f"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <ul
                className="list-disc ml-6 text-xl"
                style={{ lineHeight: "40px" }}
              >
                <li>
                  Quản lý các doanh nghiệp, nhân viên kinh doanh, quản lý tài
                  chính có liên quan đến CNTT
                </li>
                <li>
                  Các đối tượng yêu thích công việc về bảo mật, an ninh mạng.
                </li>
                <li>
                  Người muốn lấy chứng chỉ để nâng cao cơ hội việc làm, tăng
                  lương.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function GiangVien() {
  return (
    <div className="pb-10 dark:bg-slate-800 dark:text-white">
      <h6
        className="text-3xl xl:text-3xl  md:leading-none xl:leading-tight text-center mb-5 mt-10 dark:bg-slate-800 dark:text-white"
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
            src="https://ispace.edu.vn/wp-content/uploads/2023/09/Group-96-543x1024.jpg"
            alt="giang-vien-khoa-CEH"
            srcSet="https://ispace.edu.vn/wp-content/uploads/2023/09/Group-96-543x1024.jpg 543w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-96-159x300.jpg 159w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-96-768x1449.jpg 768w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-96-814x1536.jpg 814w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-96-1086x2048.jpg 1086w, https://ispace.edu.vn/wp-content/uploads/2023/09/Group-96-scaled.jpg 1357w"
            sizes="(max-width: 543px) 100vw, 543px"
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/2 xl:w-1/2">
          <ul
            className="list-disc"
            style={{ width: "80%", margin: "0 auto", lineHeight: "40px" }}
          >
            <li>
              Thầy <strong>Trương Phạm Hoài Thương</strong> – giảng viên tại
              khoa An ninh mạng ở trường iSPACE, đảm nhận việc giảng dạy các môn
              học chuyên ngành về an toàn thông tin, chia sẻ kiến thức và kinh
              nghiệm thực tiễn cho sinh viên…
            </li>
            <li>
              05 năm kinh nghiệm trong lĩnh vực an ninh mạng và có các chứng chỉ
              bảo mật từ EC-council và CompTIA.
            </li>
            <li>
              Thầy Trường Phạm Hoài Thương đã tham gia vào nhiều dự án đánh giá
              an toàn thông tin, triển khai các giải pháp bảo mật hiệu quả và
              thực hiện ứng cứu sự cố bảo mật.
            </li>
            <li>
              Từ lúc còn là sinh viên, thầy Hoài Thương đã tham gia xây dựng và
              phát triển cộng đồng AdminVietNam – một blog chuyên về chia sẻ
              kiến thức an ninh mạng và quản trị mạng.
            </li>
            <li>
              Đạt loại giỏi trong cuộc thi tay nghề thành phố Hồ Chí Minh –
              WorldSkills Viet Nam 2018.
            </li>
          </ul>
        </div>
      </section>
      <div className="flex justify-center">
        <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
          <h6
            className="text-3xl xl:text-3xl  md:leading-none xl:leading-tight text-center mb-5 mt-10"
            style={{ color: "#ffb606", fontWeight: "bold" }}
          >
            HỌC PHÍ KHÓA HỌC
          </h6>
          <p className="text-center text-xl">
            Học phí trọn khóa: <strong>6.500.000 VND</strong> (chưa bao gồm lệ
            phí thi)
          </p>
        </div>
      </div>
    </div>
  );
}
function Giatri() {
  return (
    <div
      id="hero"
      className=" lg:flex px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 dark:bg-slate-600 dark:text-white"
    >
      <div className="px-5 sm:px-10 md:px-10 md:flex lg:block lg:w-1/2 lg:max-w-3xl lg:mr-8 lg:px-20">
        <div className="md:w-1/2 md:mr-10 lg:w-full lg:mr-0">
          <h6
            className="text-2xl xl:text-3xl  md:leading-none xl:leading-tight"
            style={{ color: "#ffb606", fontWeight: "bold" }}
          >
            GIÁ TRỊ NHẬN ĐƯỢC SAU KHÓA HỌC
          </h6>
          <p className="pt-7 xl:mt-2 ">
            Sử dụng thành thạo các công cụ và phương thức tấn công của các
            Hacker, có khả năng ngăn chặn, phòng chống các hành vi xâm nhập trái
            phép và phá hoại hệ thống mạng.{" "}
          </p>
          <p className="pt-7 xl:mt-2 ">
            Có kiến thức về quản trị việc đăng nhập nâng cao dùng cho việc đảm
            bảo thông tin và cho phép bạn quản lý bảo mật thông tin một cách rõ
            ràng hơn.
          </p>
          <p className="pt-7 xl:mt-2 ">
            Có đủ kiến thức và kỹ năng trở thành chuyên gia an toàn thông tin,
            kiểm toán hệ thống thông tin, tư vấn an toàn thông tin…cho các doanh
            nghiệp{" "}
          </p>
        </div>
      </div>
      <div className="mt-6  flex-1 lg:mt-0">
        <div />
        <img
          loading="lazy"
          decoding="async"
          width="640"
          height="489"
          src="https://ispace.edu.vn/wp-content/uploads/2021/05/Asset-5_op3.png"
          class="attachment-full size-full wp-image-10911"
          alt=""
          srcset="https://ispace.edu.vn/wp-content/uploads/2021/05/Asset-5_op3.png 640w, https://ispace.edu.vn/wp-content/uploads/2021/05/Asset-5_op3-300x229.png 300w"
          sizes="(max-width: 640px) 100vw, 640px"
        />
      </div>
    </div>
  );
}
function HocCEH() {
  return (
    <section
      className="section section-boxed section-height-default section-height-default pt-10 pb-10 dark:bg-slate-700 dark:text-white"
      style={{ width: "100%", margin: "0 auto" }}
    >
      <h1
        className="text-4xl font-bold pb-4 text-center"
        style={{ color: "#f57e25" }}
      >
        VÌ SAO BẠN NÊN HỌC CEH?
      </h1>
      <div className="container column-gap-default md:flex md:flex-col">
        <div
          className="column md:w-full top-column"
          data-id="bcf4630"
          data-element_type="column"
        >
          <div className="widget-wrap populated">
            <div className="widget widget-text-editor">
              <ul
                className="list-disc ml-6 text-xl"
                style={{ lineHeight: "40px" }}
              >
                <li>
                  CEH là chứng chỉ bảo mật thông tin hàng đầu thế giới, được
                  công nhận rộng rãi và có giá trị cao trên thị trường.
                </li>
                <li>
                  Giúp bạn hiểu rõ về các kỹ thuật tấn công và phòng thủ mạng,
                  trang bị cho bạn các kiến thức, kỹ năng cần thiết để bảo vệ
                  mạng của tổ chức, doanh nghiệp.
                </li>
                <li>
                  Chứng chỉ CEH được các tổ chức uy tín trên thế giới, như DoD
                  8570, ANSI và NICE, công nhận và đánh giá cao, giúp bạn nâng
                  cao cơ hội tìm kiếm việc làm, thăng tiến trong sự nghiệp.
                </li>
                <li>
                  Giúp bạn có thể phát triển mạng lưới quan hệ và kết nối với
                  các chuyên gia bảo mật thông tin khác trên toàn thế giới.
                </li>
                <li>
                  Giúp bạn nắm bắt được những xu hướng mới nhất trong lĩnh vực
                  bảo mật thông tin, từ đó giúp bạn trở thành một chuyên gia bảo
                  mật thông tin hàng đầu.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function LoiThe() {
  return (
    <div className="pb-10 dark:bg-slate-600 dark:text-white">
      <h1
        className="text-4xl font-bold pb-4 text-center dark:bg-slate-600 dark:text-white"
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
const Ceh = () => {
  return (
    <div>
      <Carousel />
      <DoiTuong />
      <GiangVien />
      <Giatri />
      <HocCEH />
      <LoiThe />
      <FormComponent />
    </div>
  );
};
export default Ceh;
