import { Container } from "@mui/material";
import About from "./About";
import Introduction from "./Introduction";
import SideBar from "./sideBar";
import Specializations from "./Specializations";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Main = () => {
  return (
    <Container maxWidth="lg" className="container my-5">
      <div>
        <SideBar />
      </div>
      <div>
        <Introduction />
        <About />
        <Specializations />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Container>
  );
};

export default Main;
