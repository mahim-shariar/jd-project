/* eslint-disable react/no-unescaped-entities */
import { IoPersonOutline } from "react-icons/io5";

const About = () => {
  return (
    <div style={{ padding: "50px" }} id="about" className="section">
      <button className="my-10 header-button">
        {" "}
        <IoPersonOutline />
        ABOUT{" "}
      </button>
      <h1 className="text-5xl text-white" style={{ lineHeight: "1.1" }}>
        Every great design begin with <br /> an even{" "}
        <span className="text-[#14c5fd]">better story</span>
      </h1>
      <p className="text-[#999999] mt-7 text-lg  w-2/3">
        Throughout my career as a video editor, I've specialized in tools like
        Premiere Pro, DaVinci Resolve, and Final Cut Pro to craft videos that
        are not only visually captivating but also aligned with your message. I
        make it a priority to understand your vision and collaborate closely,
        ensuring that every project feels authentic and true to your brand.
      </p>
    </div>
  );
};

export default About;
