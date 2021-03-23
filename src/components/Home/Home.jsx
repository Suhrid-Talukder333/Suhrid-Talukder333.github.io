import img from "../../images/undraw_Code_thinking.svg";
import "./styles.css";
import gif from "../../images/heart.gif";
import hand from "../../images/hand.png";
import about from "../../images/polarabout-me.png";
import projects from "../../images/polar.png";
import { Nav } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import LightSpeed from "react-reveal/LightSpeed";
import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";

function Home() {
  useLayoutEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  });
  const back = (message) => {
    if (message === "about") {
      let a = document.getElementById("tag-about");
      let b = document.getElementById("img-about");
      let c = document.getElementById("txt-about");
      c.style.backgroundColor = "#f3d652";
      b.style.opacity = 0.7;
      b.style.transform = "scale(1.1)";
      a.style.transform = "translateX(-20rem)";
    } else if (message === "projects") {
      let a = document.getElementById("tag-projects");
      let b = document.getElementById("img-projects");
      let c = document.getElementById("txt-projects");
      c.style.backgroundColor = "#f3d652";
      b.style.transform = "scale(1.1)";
      b.style.opacity = 0.7;
      a.style.transform = "translateX(+20rem)";
    }
  };
  const forward = (message) => {
    if (message === "about") {
      let a = document.getElementById("tag-about");
      let b = document.getElementById("img-about");
      let c = document.getElementById("txt-about");
      b.style.transform = "scale(1)";
      c.style.backgroundColor = "white";
      b.style.opacity = 0;
      a.style.transform = "translateX(0)";
    } else if (message === "projects") {
      let a = document.getElementById("tag-projects");
      let b = document.getElementById("img-projects");
      let c = document.getElementById("txt-projects");
      b.style.transform = "scale(1)";
      c.style.backgroundColor = "white";
      b.style.opacity = 0;
      a.style.transform = "translateX(0)";
    }
  };
  return (
    <div id="home">
      <div className="upperText">
        <Zoom top>
          <p>
            <span style={{ fontWeight: "bold" }}>Hello There,</span> Fellow
            Humans
          </p>

          <img
            alt="heart"
            style={{
              width: "2rem",
              height: "2rem",
              marginBottom: "1rem",
              marginLeft: "1rem",
            }}
            src={gif}
          ></img>
        </Zoom>
      </div>
      <div className="band">
        <p style={{ margin: "auto" }}>My name is 'Suhrid Talukder'</p>
        <img className="hand" src={hand} alt="hand greetings" />
      </div>
      <div className="home">
        <img className="home-img" src={img} alt="homepage"></img>
      </div>
      <div className="recent-job">
        <p>
          I am currently studying CSTE in Noakhali Science And Technology
          University
        </p>
      </div>
      <div className="quotes">
        <p>
          "to be, or not to be, that is the question." ~By William shakespeare
          <br />
          <span className="quote-padding">
            In the 21st century, "to code, or not to code, that is the
            challenge.
          </span>
        </p>
      </div>
      <div className="direction">
        <LightSpeed left>
          <div
            className="about"
            onMouseEnter={() =>
              window.screen.width >= 766 ? back("about") : 1
            }
            onMouseLeave={() =>
              window.screen.width >= 766 ? forward("about") : 1
            }
          >
            <Link to="/about" style={{ textDecoration: "none" }} href="#about" alt="about">
              <img
                className="img-about"
                id="img-about"
                style={{ width: "100%", height: "100%", zIndex: "-1" }}
                src={about}
                alt="About"
              />
              <div className="tag tag-about" id="tag-about">
                <p className="txt" id="txt-about">
                  ABOUT ME
                </p>
              </div>
            </Link>
          </div>
        </LightSpeed>
        <LightSpeed right>
          <div
            className="projects"
            onMouseEnter={() =>
              window.screen.width >= 766 ? back("projects") : 1
            }
            onMouseLeave={() =>
              window.screen.width >= 766 ? forward("projects") : 1
            }
          >
            <Link
              
              to="/projects"
              style={{ textDecoration: "none" }}
              href="#projects"
              alt="projects"
            >
              <img
                id="img-projects"
                className="img-projects"
                style={{ width: "100%", height: "100%", zIndex: "-1" }}
                src={projects}
                alt="projects"
              />
              <div className="tag tag-projects" id="tag-projects">
                <p className="txt" id="txt-projects">
                  PROJECTS
                </p>
              </div>
            </Link>
          </div>
        </LightSpeed>
      </div>
      <footer>
        <a className="btn btn-secondary button" href="#home">
          Back to Top
        </a>
        <div className="foot-links">
          <Nav.Link
            className="margin-auto"
            href="https://www.linkedin.com/in/suhrid-talukder-580a891a5/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </Nav.Link>
          <Nav.Link
            className="margin-auto"
            href="https://github.com/Suhrid-Talukder333"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </Nav.Link>
        </div>
        <h6>&copy;Suhrid Talukder</h6>
      </footer>
    </div>
  );
}

export default Home;
