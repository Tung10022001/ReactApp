import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-orange-500 dark:bg-gray-700 dark:text-white text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-8">
          <div className="text-center md:text-left md:w-1/3 mb-4 md:mb-0">
            <img
              src="https://w.ladicdn.com/s550x350/61a046d06f6075006912857e/logo-ispace-20240114053146-ygln9.png"
              alt="Logo"
              className="mx-auto md:mx-0 mb-2"
            />
            <p>
              eLearning là giải pháp giúp người học phá bỏ rào cản về không gian
              thời gian.
            </p>
          </div>
          <div className="text-center md:text-left md:w-1/3 mb-4 md:mb-0">
            <h4 className="font-bold mb-2">LIÊN HỆ</h4>
            <p className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              Địa chỉ: 240 Võ Văn Ngân, phường Bình Thọ, TP Thủ Đức, TPHCM
            </p>
            <p className="flex items-center">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              Hotline: 0938 205 966
            </p>
            <p className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Email: lienhe@ispace.edu.vn
            </p>
            <p className="flex items-center">
              <FontAwesomeIcon icon={faGlobe} className="mr-2" />
              Website:{" "}
              <a
                href="http://ispace.edu.vn"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://ispace.edu.vn
              </a>
            </p>
          </div>
          <div className="text-center md:text-left md:w-1/3 mb-4 md:mb-0 flex flex-col justify-start">
            <h4 className="font-bold mb-2">TRANG XÃ HỘI</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/ispace.vn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
              </a>
              <a
                href="https://www.youtube.com/user/ispacechannel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2023 Website Tuyển Sinh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
