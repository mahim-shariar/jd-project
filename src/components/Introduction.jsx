/* eslint-disable react/no-unescaped-entities */
import { IoHomeOutline } from "react-icons/io5";

const Introduction = () => {
  return (
    <div style={{ padding: "50px" }}>
      <button className="header-button">
        {" "}
        <IoHomeOutline />
        INTRODUCE{" "}
      </button>
      <h1 className="text-7xl text-white" style={{ lineHeight: "1.1" }}>
        Hi, I'm <span className="text-[#14c5fd]">Jayed</span> <br /> Video
        Editor and <br /> Cinematographer
      </h1>
      <p className="  text-[#999999] mt-7 text-lg">
        I design and code beautifully simple things, and I love what I do. Just
        simple like that!
      </p>

      <div className="experience-section mt-12 flex items-center gap-10">
        <div className="experience-item">
          <h2 className="text-6xl text-[#14c5fd]">1+</h2>
          <p className="text-[#999999] mt-7 text-sm font-semibold">
            Years of Experience
          </p>
        </div>
        <div className="projects-item ">
          <h2 className="text-6xl text-[#14c5fd]">10+</h2>
          <p className="text-[#999999] mt-7 text-sm font-semibold">
            Projects Completed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
