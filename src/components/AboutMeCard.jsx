import jayedimg from "../assets/jayed-vhai.jpg";
import JayedLogo from "../assets/JYD.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { TiSocialYoutube } from "react-icons/ti";
import { CiMail } from "react-icons/ci";

const AboutMeCard = () => {
  return (
    <div className="container my-5">
      <div
        style={{ border: "1px solid #565656" }}
        className="p-10 rounded-3xl border-1 border-gray-600"
      >
        <div className="flex justify-between items-center">
          {/* <h1 className="text-5xl text-white">JYD</h1> */}
          <img className="w-20 h-20" src={JayedLogo} alt="" />
          <p className="text-white font-semibold"> Video Editor </p>
        </div>

        <div className="mt-10">
          <img
            className="rounded-3xl filter grayscale mx-auto"
            src={jayedimg}
            alt=""
          />
        </div>

        <div className="mt-10">
          <h1 className="text-white text-xl text-center my-3">
            jayedbinkirbria@gmail.com
          </h1>
          <h1 className="text-white text-2xl text-center">
            Mirpur 2, Dhaka, Bangladesh
          </h1>

          <p className="text-[#999999] text-center mt-7 text-sm font-semibold">
            © 2022 Drake. All Rights Reserved
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <a href="" target="_blank" className="social-btnStyle">
            <FaInstagram />
          </a>
          <a href="" target="_blank" className="social-btnStyle">
            <FaFacebookF />
          </a>
          <a href="" target="_blank" className="social-btnStyle">
            <FaLinkedinIn />
          </a>
          <a href="" target="_blank" className="social-btnStyle">
            <TiSocialYoutube />
          </a>
        </div>

        {/* Button to open phone book */}
        <div className="flex justify-center mt-8">
          <a
            href="tel:+8801906979013"
            className="contact-me-btn flex justify-center items-center "
          >
            <CiMail className="mr-2 text-2xl" />
            Contact Me!
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
