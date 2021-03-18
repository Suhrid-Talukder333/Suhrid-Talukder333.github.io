import img from "../../images/undraw_Code_thinking.svg";
import "./styles.css";
import gif from "../../images/heart.gif";
import hand from "../../images/hand.png";
import about from "../../images/polarabout-me.png";
import projects from "../../images/polar.png";

function Home() {
  const back = (message) => {
    if (message === 'about') {
      let a = document.getElementById('tag-about');
      
      }
  }
  return (
    <div id="home">
      <div className="upperText">
        <p>
          <span style={{ fontWeight: "bold" }}>Hello There,</span> Fellow Humans
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
      </div>
      <div className="band">
        <p style={{ margin: "auto" }}>My name is 'Suhrid Talukder'</p>
        <img className="hand" src={hand} alt="hand greetings" />
      </div>
      <div className={"home"}>
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
        <div className="about" onMouseEnter={()=> back('about')}>
          <a style={{ textDecoration: "none" }} href="#" alt="about">
            <img
              className="img-about"
              style={{ width: "100%", height: "100%", zIndex: "-1" }}
              src={about}
              alt="About"
            />
            <div className="tag tag-about" id="tag-about">
              <p className="txt">ABOUT ME</p>
            </div>
          </a>
        </div>

        <div className="projects">
          <a style={{ textDecoration: "none" }} href="#" alt="projects">
            <img
              className="img-projects"
              style={{ width: "100%", height: "100%", zIndex: "-1" }}
              src={projects}
              alt="projects"
            />
            <div className="tag tag-projects">
              <p className="txt">PROJECTS</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
