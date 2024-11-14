import { GoProjectSymlink } from "react-icons/go";

const Projects = () => {
  return (
    <div
      style={{ padding: "50px", marginTop: "100px" }}
      id="projects"
      className="section"
    >
      <button className="header-button">
        {" "}
        <GoProjectSymlink />
        Projects{" "}
      </button>
      <h1 className="text-5xl text-white" style={{ lineHeight: "1.1" }}>
        My <span className="text-[#14c5fd]">Projects</span>
      </h1>

      {/* YouTube Video Section */}
      <div className="grid grid-cols-1 gap-10 mt-12 youtube-section sm:grid-cols-2 lg:grid-cols-4">
        <div className="youtube-video">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/agg0hF4IeRo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="youtube-video">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/7GwXQTVjvQ4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="youtube-video">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/J_00_qLy84c"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="youtube-video">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/Tiqe5sAVPaM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="youtube-video">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/vhcHNXJ2bdo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="youtube-video">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/f2bbfMmS19Y"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* YouTube Channel Section */}
      <div className="mt-12 channel-section">
        <h2 className="text-3xl text-white">Check Out My YouTube Channel</h2>
        <p className="text-[#999999] mt-4 text-lg">
          Explore more content and videos from me on my YouTube channel.
        </p>
        <button
          className="mt-5 px-6 py-2 border-2 border-[#14c5fd] bg-[#14c5fd] text-[#1a1a1a] font-semibold hover:bg-[#1a1a1a] hover:border-[#14c5fd] hover:border-2 hover:text-[#14c5fd] rounded-3xl  transition duration-300"
          onClick={() =>
            window.open(
              "https://www.youtube.com/@jtcinematography3771",
              "_blank"
            )
          }
        >
          Visit My YouTube Channel
        </button>
      </div>
    </div>
  );
};

export default Projects;
