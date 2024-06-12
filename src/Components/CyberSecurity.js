import React from "react";
import SheetsForm from "../Components/SheetForm";

function Carousel() {
  return (
    <div className="">
      <img
        fetchpriority="high"
        decoding="async"
        width="2500"
        height="1042"
        src="https://ispace.edu.vn/wp-content/uploads/2020/09/Bo-Banner-5-nganh-web_Mesa-de-trabajo-1.jpg"
        className="attachment-full size-full wp-image-13979"
        alt=""
        srcSet="https://ispace.edu.vn/wp-content/uploads/2020/09/Bo-Banner-5-nganh-web_Mesa-de-trabajo-1.jpg 2500w, https://ispace.edu.vn/wp-content/uploads/2020/09/Bo-Banner-5-nganh-web_Mesa-de-trabajo-1-300x125.jpg 300w, https://ispace.edu.vn/wp-content/uploads/2020/09/Bo-Banner-5-nganh-web_Mesa-de-trabajo-1-1024x427.jpg 1024w, https://ispace.edu.vn/wp-content/uploads/2020/09/Bo-Banner-5-nganh-web_Mesa-de-trabajo-1-768x320.jpg 768w, https://ispace.edu.vn/wp-content/uploads/2020/09/Bo-Banner-5-nganh-web_Mesa-de-trabajo-1-1536x640.jpg 1536w, https://ispace.edu.vn/wp-content/uploads/2020/09/Bo-Banner-5-nganh-web_Mesa-de-trabajo-1-2048x854.jpg 2048w"
        sizes="(max-width: 2500px) 100vw, 2500px"
      />
    </div>
  );
}

const DiemVuotTroi = () => {
  return (
    <div>
      <div
        className="text-center p-8  dark:bg-slate-600 dark:text-white"
        style={{ width: "100%", margin: "0 auto" }}
      >
        <h6>
          <span className="text-orange-500 text-xl font-semibold dark:bg-slate-600 dark:text-white">
            Điểm vượt trội của iSPACE là luôn chắt lọc và cập nhật kiến thức,
            nền tảng mới kết hợp với thực hành thao luyện trên THAO TRƯỜNG MẠNG
            – Cyber Range. Học viên được trực tiếp trải nghiệm các tình huống
            tấn công mạng thực tế, giúp học viên thành thạo và có kinh nghiệm
            thực tiễn ngay khi còn ngồi trên ghế nhà trường.
          </span>
        </h6>
        <h6 className="mt-4">
          <span className="text-orange-500 text-xl font-semibold dark:bg-slate-600 dark:text-white">
            Chương trình đào tạo “Vệ sĩ mạng” của iSPACE sẽ giúp sinh viên học
            được cách rà soát và khắc phục tất cả các lỗ hổng/nguy cơ tiềm ẩn
            gây mất ATTT trong hạ tầng CNTT của các doanh nghiệp/ tổ chức.
          </span>
        </h6>
      </div>
      <section className="w-full h-full dark:bg-slate-600">
        <div className="container mx-auto">
          <div className="text-center ">
            <img
              src="https://ispace.edu.vn/wp-content/uploads/2020/09/AN-NINH-MANG.jpg"
              alt=""
              className="w-full"
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
      <section className="w-full flex flex-wrap justify-center dark:bg-slate-600 dark:text-white">
        <div className="flex justify-center mx-4 my-4 dark:bg-white dark:text-white">
          <img
            src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HK1.png"
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
      <section className="sm:w-full md:w-1/2 mx-auto  ">
        <div className="container mx-auto px-4 dark:bg-white dark:text-white">
          <div className="text-center dark:bg-white dark:text-white">
            <img
              src="https://ispace.edu.vn/wp-content/uploads/2020/09/ANM_HKSS@2x-768x69.png"
              alt=""
              className="w-full h-auto "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const NoiDung = () => {
  return (
    <div className="mt-7">
      <div className="text-center p-8 text-3xl font-bold dark:bg-slate-600 dark:text-white">
        NỘI DUNG CHƯƠNG TRÌNH HỌC
      </div>
      <section className=" flex flex-wrap justify-center items-center mt-2 dark:bg-slate-600 dark:text-white">
        <div className="w-full md:w-1/2 flex flex-col items-center ">
          <img
            loading="lazy"
            decoding="async"
            width="640"
            height="124"
            src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1024x199.png"
            className="attachment-large size-large wp-image-11752 dark:bg-white"
            alt=""
            srcSet="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1024x199.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-300x58.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-768x149.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-1536x299.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-01-2048x399.png 2048w"
            sizes="(max-width: 640px) 100vw, 640px"
          />
          <div className="flex flex-grow">
            <div className="p-4 flex-grow">
              <p className="text-left">
                – Đại cương về CNTT
                <br />– Cơ sở lập trình
              </p>
            </div>
            <div className="p-4 flex-grow">
              <p>
                – Kiến trúc máy tính và Hệ điều hành
                <br />– Toán ứng dụng cho Tin học
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            width="640"
            height="125"
            src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1024x200.png"
            className="attachment-large size-large wp-image-11753 dark:bg-white"
            alt=""
            srcSet="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-02-2048x400.png 2048w"
            sizes="(max-width: 640px) 100vw, 640px"
          />
          <div className="flex flex-grow">
            <div className="p-4 flex-grow">
              <p className="text-left">
                – Mạng máy tính
                <br />– Cơ sở dữ liệu
              </p>
            </div>
            <div className="p-4 flex-grow">
              <p>
                – Lập trình nâng cao
                <br />– Hệ điều hành nâng cao
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            width="640"
            height="125"
            src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1024x200.png"
            className="attachment-large size-large wp-image-11754 dark:bg-white"
            alt=""
            srcSet="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-03-2048x400.png 2048w"
            sizes="(max-width: 640px) 100vw, 640px"
          />
          <div className="flex flex-grow">
            <div className="p-4 flex-grow">
              <p className="text-left">
                – Quản trị mạng
                <br />– Phân tích và thiết kế HTTT
              </p>
            </div>
            <div className="p-4 flex-grow">
              <p>
                – Chuyên đề quản trị mạng
                <br />– Triển khai và quản trị Web server
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            width="640"
            height="125"
            src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-04-1024x199.png?fbclid=IwZXh0bgNhZW0CMTAAAR0V_8yDF92J_KWzcFfNZoDxJkq2-LTb7s6hMOM_MOc6hmLn3yzTm42Vlsk_aem_AVpdReppQsJZ6B7Ortrx6ZuqlS7aQDY7Gq4dKIzrKjSX_ASg1d2WxPerExhh4ebob4T7p6X0opiEw0ifka213mfQ"
            className="attachment-large size-large wp-image-11755 dark:bg-white"
            alt=""
            sizes="(max-width: 640px) 100vw, 640px"
          />
          <div className="flex flex-grow">
            <div className="p-4 flex-grow">
              <p className="text-left">
                – Nhập môn an ninh mạng
                <br />– Lập trình và khai thác lỗ hổng bảo mật
              </p>
            </div>
            <div className="p-4 flex-grow">
              <p>
                – Kiểm thử và đánh giá an ninh mạng
                <br />– Chuyên đề an ninh mạng
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            width="640"
            height="125"
            src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-05-768x149.png?fbclid=IwZXh0bgNhZW0CMTAAAR19r2MOJc2YPgTNIbAZtUELvM5wZ48mDseRfiFFmAHu1HzfxF6_iiUF2L0_aem_AVpzY42uowj0YMlOMpgIx_q9XWUZhREocgJzXET9nzuODgYbUakQVZndjLppwMX579XvcSHy-U9RmQJAAB_fuP4x"
            className="attachment-large size-large wp-image-11756 dark:bg-white"
            alt=""
            sizes="(max-width: 640px) 100vw, 640px"
          />
          <div className="flex flex-grow">
            <div className="p-4 flex-grow">
              <p className="text-left">
                – Hệ thống thông tin và an ninh mạng
                <br />– Điều tra tội phạm công nghệ cao
              </p>
            </div>
            <div className="p-4 flex-grow">
              <p>
                – Phân tích mã độc
                <br />– Chuyên đề an ninh mạng
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            loading="lazy"
            decoding="async"
            width="640"
            height="125"
            src="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1024x200.png"
            className="attachment-large size-large wp-image-11757 dark:bg-white"
            alt=""
            srcSet="https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1024x200.png 1024w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-300x59.png 300w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-768x150.png 768w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-1536x300.png 1536w, https://ispace.edu.vn/wp-content/uploads/2022/01/ICON-HOC-KY-06-2048x400.png 2048w"
            sizes="(max-width: 640px) 100vw, 640px"
          />
          <div className="flex flex-grow">
            <div className="p-4 flex-grow">
              <p className="text-left">
                – Thực tập doanh nghiệp
                <br />– Thi tốt nghiệp
              </p>
            </div>
            <div className="p-4 flex-grow">
              <p>
                – Bảo vệ dự án tốt nghiệp
                <br />– Lập nghiệp cùng doanh nghiệp
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
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
          <div className="flex flex-grow">
            <div className="p-4 flex-grow">
              <p className="text-left">
                – Thực tập tốt nghiệp
                <br />– Bảo vệ đồ án tốt nghiệp
              </p>
            </div>
            <div className="p-4 flex-grow"></div>
          </div>
        </div>
      </section>

      <div className="w-full md:w-1/2"></div>
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

const CyberSecurity = () => {
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

export default CyberSecurity;
