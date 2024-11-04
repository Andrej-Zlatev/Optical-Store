import { ImFacebook } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";
import AppContainer from "../layout/AppContainer";
import { FiMapPin } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { FaRegClock } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-black py-2">
      <AppContainer>
        <div className="text-lightGray flex justify-between">
          <div className=" flex  items-center gap-x-8">
            <ul className="flex gap-x-3  ">
              <li>
                <a
                  href="https://www.facebook.com/optikaalfavision/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/alfavisionoptika/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImInstagram />
                </a>
              </li>
            </ul>
            <div>
              <a
                href="mailto:alfavisionmk@gmail.com"
                target="_self"
                className="text-lightGray flex gap-x-2 items-center"
              >
                <span>
                  <TfiEmail />
                </span>
                <span>alfavisionmk@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="flex gap-x-6">
            <div>
              <a
                href="https://www.google.com/maps/place/Optika+Alfa+Vision/@41.9152976,22.413339,15z/data=!4m6!3m5!1s0x1355939c25181bc5:0x4e1d308cab970fc2!8m2!3d41.9152976!4d22.413339!16s%2Fg%2F11ts3dt564?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
                className="text-lightGray flex gap-x-2 items-center"
                target="_blank"
              >
                <span>
                  <FiMapPin />
                </span>
                <span>Тодосија Паунов 9/А Кочани, Северна Македонија</span>
              </a>
            </div>
            <div>
              <a className="text-lightGray flex gap-x-2 items-center">
                <span>
                  <ImMobile />
                </span>
                <span>+389 71 305 786</span>
              </a>
            </div>
            <div>
              <a className="text-lightGray flex gap-x-2 items-center">
                <span>
                  <FaRegClock />
                </span>
                <span>Пон-Пет: 11:00 – 18:00ч</span>
              </a>
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};

export default Contact;
