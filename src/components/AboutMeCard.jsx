import jayedimg from "../assets/jayed-vhai.jpg";
import JayedLogo from "../assets/JYD.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { TiSocialYoutube } from "react-icons/ti";
import { MdCall } from "react-icons/md";

const AboutMeCard = () => {
  return (
    <div className="container my-5">
      <div
        style={{ border: "1px solid #565656" }}
        className="p-10 border-gray-600 rounded-3xl border-1"
      >
        <div className="flex items-center justify-between">
          {/* <h1 className="text-5xl text-white">JYD</h1> */}
          <img className="w-20 h-20" src={JayedLogo} alt="" />
          <p className="font-semibold text-white"> Video Editor </p>
        </div>

        <div className="mt-10">
          <img
            className="mx-auto rounded-3xl filter grayscale"
            src={jayedimg}
            alt=""
          />
        </div>

        <div className="mt-10">
          <h1 className="my-3 text-xl text-center text-white">
            jayedbinkirbria@gmail.com
          </h1>
          <h1 className="text-2xl text-center text-white">
            Mirpur 2, Dhaka, Bangladesh
          </h1>

          <p className="text-[#999999] text-center mt-7 text-sm font-semibold">
            © 2024 JYD. All Rights Reserved
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <a
            href="https://www.instagram.com/jayedbinkibria/"
            target="_blank"
            className="social-btnStyle"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/Talukderjayed"
            target="_blank"
            className="social-btnStyle"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/jayed-bin-kibria-233570254/"
            target="_blank"
            className="social-btnStyle"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.youtube.com/@jtcinematography3771"
            target="_blank"
            className="social-btnStyle"
          >
            <TiSocialYoutube />
          </a>
        </div>

        {/* Button to open phone book */}
        <div className="flex justify-center mt-8">
          <a
            href="tel:+8801906979013"
            className="flex items-center justify-center contact-me-btn "
          >
            <MdCall className="mr-2 text-2xl" />
            Contact Me!
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
