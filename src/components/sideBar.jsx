import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { IoReorderThree } from "react-icons/io5";
import "./SideBar.css"; // Make sure to create this CSS file

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

  const list = () => (
    <Box
      sx={{ width: 250, backgroundColor: "#1a1a1a" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <ul className="nav-list">
        <li className={activeSection === "section1" ? "active" : ""}>
          <a href="#section1">Section 1</a>
        </li>
        <li className={activeSection === "section2" ? "active" : ""}>
          <a href="#section2">Section 2</a>
        </li>
        <li className={activeSection === "section3" ? "active" : ""}>
          <a href="#section3">Section 3</a>
        </li>
        {/* Add more sections as needed */}
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
