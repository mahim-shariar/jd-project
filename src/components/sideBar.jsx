import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { IoReorderThree } from "react-icons/io5";
import {
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa"; // Import additional icons
import "./SideBar.css"; // Make sure to create this CSS file
import { MdOutlineGraphicEq } from "react-icons/md";

export default function SideBar() {
  const [state, setState] = React.useState({
    right: false,
  });
  const [activeSection, setActiveSection] = React.useState(null);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ right: open });
  };

  // Track the scroll position and set the active section
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle smooth scroll
  const handleSmoothScroll = (e, target) => {
    e.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Align the top of the element to the viewport
      });
    }
  };

  const list = () => (
    <Box
      sx={{ width: 250, backgroundColor: "#1a1a1a" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      
    >
      <ul className="nav-list">
        <li className={activeSection === "introduction" ? "active" : ""}>
          <a
            href="#introduction"
            onClick={(e) => handleSmoothScroll(e, "introduction")}
          >
            <FaHome style={{ marginRight: "8px" }} /> Home
          </a>
        </li>
        <li className={activeSection === "about" ? "active" : ""}>
          <a href="#about" onClick={(e) => handleSmoothScroll(e, "about")}>
            <FaUserAlt style={{ marginRight: "8px" }} /> About
          </a>
        </li>
        <li className={activeSection === "specializations" ? "active" : ""}>
          <a
            href="#specializations"
            onClick={(e) => handleSmoothScroll(e, "specializations")}
          >
            <FaBriefcase style={{ marginRight: "8px" }} /> Specializations
          </a>
        </li>
        <li className={activeSection === "skills" ? "active" : ""}>
          <a href="#skills" onClick={(e) => handleSmoothScroll(e, "skills")}>
            <MdOutlineGraphicEq style={{ marginRight: "8px" }} /> Skills
          </a>
        </li>
        <li className={activeSection === "projects" ? "active" : ""}>
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, "projects")}
          >
            <FaProjectDiagram style={{ marginRight: "8px" }} /> Projects
          </a>
        </li>
        <li className={activeSection === "contact" ? "active" : ""}>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, "contact")}>
            <FaEnvelope style={{ marginRight: "8px" }} /> Contact Me
          </a>
        </li>
      </ul>
    </Box>
  );

  return (
    <div>
      <button
        className="social-btnStyle"
        onClick={toggleDrawer(true)}
        style={{ position: "fixed", top: 20, right: 20 }}
      >
        <IoReorderThree />
      </button>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
