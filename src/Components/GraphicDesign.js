// GraphicDesign.js
import React from "react";
import SheetsForm from "../Components/SheetForm";

function Carousel() {
  return (
    <div className="">
      <img
        fetchpriority="high"
        decoding="async"
        width="2560"
        height="1067"
        src="https://ispace.edu.vn/wp-content/uploads/2022/01/BANNER-4-NGANH_Mesa-de-trabajo-1-copy-1-scaled.jpg"
        class="attachment-full size-full wp-image-11750"
        alt=""
        srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/BANNER-4-NGANH_Mesa-de-trabajo-1-copy-1-scaled.jpg 2560w, https://ispace.edu.vn/wp-content/uploads/2022/01/BANNER-4-NGANH_Mesa-de-trabajo-1-copy-1-300x125.jpg 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/BANNER-4-NGANH_Mesa-de-trabajo-1-copy-1-1024x427.jpg 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/BANNER-4-NGANH_Mesa-de-trabajo-1-copy-1-768x320.jpg 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/BANNER-4-NGANH_Mesa-de-trabajo-1-copy-1-1536x640.jpg 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/BANNER-4-NGANH_Mesa-de-trabajo-1-copy-1-2048x853.jpg 2048w"
        sizes="(max-width: 2560px) 100vw, 2560px"
      />
    </div>
  );
}
const DiemVuotTroi = () => {
  return (
    <div>
      <div
        className="text-center p-8 dark:bg-slate-600 dark:text-white"
        style={{ width: "100%", margin: "0 auto" }}
      >
        <h6>
          <span className="text-orange-500 text-xl font-semibold dark:bg-slate-600 dark:text-white">
            Chương trình được xây dựng dựa trên chương trình học chuẩn quốc tế
            của các hãng nổi tiếng về công nghệ đồ họa như: Adobe, Autodesk,…
            Sinh viên được trực tiếp làm ra các ấn phẩm đồ họa theo từng giai
            đoạn năng lực chuyên môn.
          </span>
        </h6>
      </div>
      <section className="w-full h-full dark:bg-slate-600 dark:text-white">
        <div className="container mx-auto">
          <div className="text-center">
            <img
              decoding="async"
              width="1919"
              height="310"
              src="https://ispace.edu.vn/wp-content/uploads/2020/09/THIET-KE-DO-HOA.jpg"
              class="attachment-full size-full wp-image-11763"
              alt=""
              srcset="https://ispace.edu.vn/wp-content/uploads/2020/09/THIET-KE-DO-HOA.jpg 1919w, https://ispace.edu.vn/wp-content/uploads/2020/09/THIET-KE-DO-HOA-300x48.jpg 300w, https://ispace.edu.vn/wp-content/uploads/2020/09/THIET-KE-DO-HOA-1024x165.jpg 1024w, https://ispace.edu.vn/wp-content/uploads/2020/09/THIET-KE-DO-HOA-768x124.jpg 768w, https://ispace.edu.vn/wp-content/uploads/2020/09/THIET-KE-DO-HOA-1536x248.jpg 1536w"
              sizes="(max-width: 1919px) 100vw, 1919px"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
const Lotrinh = () => {
  return (
    <div>
      <div className="text-center p-8 text-3xl font-bold dark:bg-slate-700 dark:text-white">
        LỘ TRÌNH HỌC
      </div>
      <section className="w-full flex flex-wrap justify-center dark:bg-slate-700 dark:text-white">
        <div className="flex justify-center mx-4 my-4 dark:bg-white dark:text-white">
          <img
            src="https://ispace.edu.vn/wp-content/uploads/2020/04/TKHD_HK1.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="flex justify-center mx-4 my-4 dark:bg-white dark:text-white">
          <img
            src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK2.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="flex justify-center mx-4 my-4 dark:bg-white dark:text-white">
          <img
            src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK3.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="flex justify-center mx-4 my-4 dark:bg-white dark:text-white">
          <img
            src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK4.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="flex justify-center mx-4 my-4 dark:bg-white dark:text-white">
          <img
            src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK5.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="flex justify-center mx-4 my-4 dark:bg-white dark:text-white">
          <img
            src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK6.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="flex justify-center mx-4 my-4 dark:bg-white dark:text-white">
          <img
            src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK7.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
      </section>
      <section className="sm:w-full md:w-1/2 mx-auto">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <img
              src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-768x69.png"
              alt=""
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
const NoiDung = () => {
  return (
    <div
      className="mt-7 dark:bg-slate-600 dark:text-white"
      style={{ width: "100%", margin: "0 auto" }}
    >
      <div className="text-center p-8 text-3xl font-bold">
        NỘI DUNG CHƯƠNG TRÌNH HỌC
      </div>
      <section className=" flex flex-wrap justify-center items-center mt-2">
        <div className="w-full md:w-1/2">
          <img
            loading="lazy"
            decoding="async"
            width="640"
            height="124"
            src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1024x199.png"
            class="attachment-large size-large wp-image-11752 dark:bg-white"
            alt=""
            srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-2048x399.png 2048w"
            sizes="(max-width: 640px) 100vw, 640px"
          />
          <div className="flex">
            <div className="p-4 ">
              <p className="text-left">
                – Đồ họa căn bản
                <br />- Mỹ thuật đồ họa
                <br />- Khoa học màu sắc
              </p>
            </div>
            <div className="p-4">
              <p>
                – Photoshop cơ bản
                <br />– Trang trí đồ họa
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            loading="lazy"
            decoding="async"
            width="640"
            height="125"
            src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1024x200.png"
            class="attachment-large size-large wp-image-11753 dark:bg-white"
            alt=""
            srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-2048x399.png 2048w"
            sizes="(max-width: 640px) 100vw, 640px"
          />
          <div className="flex">
            <div className="p-4">
              <p>
                – Nguyên lý thị giác
                <br />– Kỹ thuật nhiếp ảnh
                <br />– Illustrator
              </p>
            </div>
            <div className="p-4">
              <p>
                <span style={{ fontSize: "16px" }}>– Photoshop nâng cao</span>

                <br />
                <span style={{ fontSize: "16px" }}>– Đồ án 1</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" flex flex-wrap justify-center items-center mt-2">
        <div className="w-full md:w-1/2">
          <img
            loading="lazy"
            decoding="async"
            width="640"
            height="125"
            src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1024x200.png"
            class="attachment-large size-large wp-image-11754 dark:bg-white"
            alt=""
            srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-2048x399.png 2048w"
            sizes="(max-width: 640px) 100vw, 640px"
          />
          <div className="flex">
            <div className="p-4 ">
              <p className="text-left">
                – In Design
                <br />– Kỹ thuật in
                <br />– Ý tưởng sáng tạo
              </p>
            </div>
            <div className="p-4">
              <p>
                – Digital Marketing
                <br />– Nghệ thuật chữ
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            loading="lazy"
            decoding="async"
            width="640"
            height="124"
            src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1024x199.png"
            class="attachment-large size-large wp-image-11755 dark:bg-white"
            alt=""
            srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-2048x399.png 2048w"
            sizes="(max-width: 640px) 100vw, 640px"
          />
          <div className="flex">
            <div className="p-4">
              <p>
                – Thiết kế bao bì
                <br />– Thiết kế nhận dạng thương hiệu
                <br />– Thiết kế giao diện Web
              </p>
            </div>
            <div className="p-4">
              <p>
                <span style={{ fontSize: "16px" }}>
                  – Nguyên lý thiết kế đồ họa
                </span>

                <br />
                <span style={{ fontSize: "16px" }}>– Đồ án 2</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" flex flex-wrap justify-center items-center mt-2">
        <div className="w-full md:w-1/2">
          <img
            loading="lazy"
            decoding="async"
            width="640"
            height="124"
            src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1024x199.png"
            class="attachment-large size-large wp-image-11756 dark:bg-white"
            alt=""
            srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-2048x399.png 2048w"
            sizes="(max-width: 640px) 100vw, 640px"
          />
          <div className="flex">
            <div className="p-4 ">
              <p className="text-left">
                – Kỹ năng nghề nghiệp
                <br />– Kỹ thuật quay phim
                <br />– Xử lý phim – Adobe Premier
              </p>
            </div>
            <div className="p-4">
              <p>
                – Nguyên lý thiết kế nội thất
                <br />– Autocad 2D
                <br />– Dựng phối cảnh nội thất 3D – SketchUp
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            loading="lazy"
            decoding="async"
            width="640"
            height="125"
            src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1024x200.png"
            class="attachment-large size-large wp-image-11757 dark:bg-white"
            alt=""
            srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-2048x399.png 2048w"
            sizes="(max-width: 640px) 100vw, 640px"
          />
          <div className="flex">
            <div className="p-4">
              <p>
                - Đồ án 3
                <br />- Thực tập tốt nghiệp
              </p>
            </div>
            <div className="p-4">
              <p>
                <span style={{ fontSize: "16px" }}>– Chuyên đề hãng CN/DN</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" flex flex-wrap justify-center items-center mt-2">
        <div className="w-full md:w-1/2">
          <img
            loading="lazy"
            decoding="async"
            width="640"
            height="125"
            src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1024x200.png"
            class="attachment-large size-large wp-image-11758 dark:bg-white"
            alt="rượu vang shop"
            srcset="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-07-2048x399.png 2048w"
            sizes="(max-width: 640px) 100vw, 640px"
          />
          <div className="flex">
            <div className="p-4 ">
              <p className="text-left">– Bảo vệ đồ án tốt nghiệp</p>
            </div>
            <div className="p-4"></div>
          </div>
        </div>

        <div className="w-full md:w-1/2"></div>
      </section>
    </div>
  );
};
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
const GraphicDesign = () => {
  return (
    <div>
      <Carousel />
      <DiemVuotTroi />
      <Lotrinh />
      <NoiDung />
      <FormComponent />
    </div>
  );
};

export default GraphicDesign;
