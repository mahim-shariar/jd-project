/* eslint-disable react/no-unescaped-entities */
import { FaFilm, FaApple } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { SiAdobe } from "react-icons/si";

const Specializations = () => {
  return (
    <div style={{ padding: "50px" }}>
      <button className="header-button">
        <MdOutlineDesignServices />
        Services
      </button>
      <h1 className="text-5xl text-white" style={{ lineHeight: "1.1" }}>
        My <span className="text-[#14c5fd]">Specializations</span>
      </h1>
      <div className="specialization-cards mt-12 flex flex-col gap-4">
        {/* Card 1 - DaVinci Resolve */}
        <div className="specialization-card p-10 border border-[#999999] rounded-3xl hover:border-[#14c5fd] transition duration-300">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">
              DaVinci Resolve
            </h2>
            <FaFilm className="text-4xl text-[#14c5fd]" />
          </div>
          <p className="text-[#999999] mt-4 text-sm">
            Professional video editing, color grading, and visual effects for
            high-quality results.
          </p>
        </div>

        {/* Card 2 - After Effects */}
        <div className="specialization-card p-10 border border-[#999999] rounded-3xl hover:border-[#14c5fd] transition duration-300">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">Final cut pro</h2>
            <FaApple className="text-4xl text-[#14c5fd]" />
          </div>
          <p className="text-[#999999] mt-4 text-sm">
            High-performance video editing optimized for Apple's ecosystem,
            ideal for professional projects.
          </p>
        </div>

        {/* Card 3 - Premiere Pro */}
        <div className="specialization-card p-10 border border-[#999999] rounded-3xl hover:border-[#14c5fd] transition duration-300">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">Premiere Pro</h2>
            <SiAdobe className="text-4xl text-[#14c5fd]" />
          </div>
          <p className="text-[#999999] mt-4 text-sm">
            Efficient and powerful video editing software for creating
            professional projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Specializations;
