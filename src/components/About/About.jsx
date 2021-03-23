import about from "../../images/undraw_online_resume.svg";
import edu_img from "../../images/animat-pencil-color.gif";
import versity_img from "../../images/nstu.gif";
import skill_img from "../../images/animat-linechart-color.gif";
import "./styles.css";
import Fade from "react-reveal/Fade";
import check from "../../images/animat-checkmark.gif";
import { useLayoutEffect } from "react";
import Slide from "react-reveal/Slide";
import Skills from "./skills";
import c from "../../images/c.png";
import csharp from "../../images/c#.png";
import html from "../../images/html.png";
import js from "../../images/java-script.png";
import react from "../../images/react.png";
import sql from "../../images/sql.png";
import reactnative from "../../images/react-native.png";
import mongo from "../../images/mongodb.png";
import unity from "../../images/unity.png";
import linux from "../../images/linux.png";
import Certificates from "./certificates";
import c1 from "../../images/Become a Software Developer learning Path.jpg";
import c2 from "../../images/HTML Essential Training.jpg";
import c3 from "../../images/Java Script Essential Training.jpg";
import c4 from "../../images/Css Essentian Training.jpg";
import c6 from "../../images/Learning Java.jpg";
import c7 from "../../images/Learning Python.jpg";
import c8 from "../../images/Learning SQL Programming.jpg";
import c9 from "../../images/Programing Foundations Fundamentals.jpg";
import c10 from "../../images/Programming Foundations Databases.jpg";
import c11 from "../../images/Programming Foundations Web Security.jpg";
import c12 from "../../images/Succeeding in Web Development Full Stack and Front End.jpg";
import c13 from "../../images/javascript-algorithms-and-data-structures.png";
import c14 from "../../images/responsive-web-design.png";
import hobby from "../../images/animat-rocket-color.gif";
import cooking from "../../images/cooking.png";
import music from "../../images/music.png";
import art from "../../images/art-board.png";
import boardgames from "../../images/board game.png";
import videogames from "../../images/videogames.png";
import sports from "../../images/sports.png";
import git from '../../images/git.png'
import { Nav } from 'react-bootstrap';

const skills = [
  { title: "C++", value: "70", id: 1, image: c },
  { title: "Html-Css", value: "60", id: 2, image: html },
  { title: "JavaScript", value: "65", id: 3, image: js },
  { title: "ReactJS", value: "50", id: 4, image: react },
  { title: "ReactNative", value: "30", id: 5, image: reactnative },
  { title: "C#", value: "40", id: 6, image: csharp },
  { title: "SQL", value: "40", id: 7, image: sql },
  { title: "MongoDB", value: "40", id: 8, image: mongo },
  { title: "Unity", value: "40", id: 9, image: unity },
  { title: "Linux", value: "60", id: 10, image: linux },
  {title: 'git', value: "50", id: 11, image: git}
];

const certificates = [
  {
    title: "Combinatorics and Probability",
    link:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~MF3FKWDJT83L/CERTIFICATE_LANDING_PAGE~MF3FKWDJT83L.jpeg",
  },
  {
    title: "Mathematical Thinking in Computer Science",
    link:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~BXUGC79VCETG/CERTIFICATE_LANDING_PAGE~BXUGC79VCETG.jpeg",
  },
  {
    title: "Object-Oriented Data Structures in C++",
    link:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~SRVA3GVXFELH/CERTIFICATE_LANDING_PAGE~SRVA3GVXFELH.jpeg",
  },
  {
    title: "Become a Software Developer learning Path",
    link: c1,
  },
  {
    title: "HTML Essential Training",
    link: c2,
  },
  {
    title: "Java Script Essential Training",
    link: c3,
  },
  {
    title: "Css Essentian Training",
    link: c4,
  },
  {
    title: "Learning Java",
    link: c6,
  },
  {
    title: "Learning Python",
    link: c7,
  },
  {
    title: "Learning SQL Programming",
    link: c8,
  },
  {
    title: "Programing Foundations Fundamentals",
    link: c9,
  },
  {
    title: "Programming Foundations Databases",
    link: c10,
  },
  {
    title: "Programming Foundations Web Security",
    link: c11,
  },
  {
    title: "Succeeding in Web Development Full Stack and Front End",
    link: c12,
  },
  {
    title: "Javascript-algorithms-and-data-structures",
    link: c13,
  },
  {
    title: "Responsive-web-design",
    link: c14,
  },
  {
    title: "Bootstrap from scratch fast and responsive web development",
    link:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-423b43ea-4340-48f6-8ae3-4b7131b2970d.jpg?v=1615617397000",
  },
  {
    title: "Learn Web Design From Scratch",
    link:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-560e2836-76d0-4d2b-a7dd-edfb8cb0d68c.jpg?v=1611127910000",
  },
  {
    title: "Practical Web design and Development: 7 course in 1",
    link:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-c66baa80-b5bf-4d11-b02a-45d7a26be542.jpg?v=1593864786000",
  },
];

const About = () => {
  useLayoutEffect(() => {
    document.querySelector("body").scrollTo(0, 0);
  });
  return (
    <>
      <div className="container-1 show-on-scroll" id="about_top">
        <img className="about-img" src={about} alt="about me"></img>
        <div className="container about-text">
          <h2>SUHRID TALUKDER</h2>
          <h4>SOFTWARE ENGINEER</h4>
        </div>
      </div>
      <div className="profile">
        <p className="profile-text">
          I am a self-learning enthusiast. I try to learn new things every now
          and then. I am ambitious, eager to go a long way to get the job done
          and deliver my best every day.Good communication skills, strong work
          ethics and great team player.
        </p>
      </div>
      <div className="education-container">
        <div className="header">
          <img className="header_img" src={edu_img} alt="education header" />
          <h4>EDUCATION</h4>
        </div>
        <div className="edu_content">
          <Fade left>
            <div className="edu_versity">
              <img
                className="versity_img show-on-scroll"
                src={versity_img}
                alt="versity"
              />
              <div className="edu_name">
                <h3>Noakhali Science and Technology University</h3>
                <h4>Computer Science and Telecommunication Engineering</h4>
                <p>December 2019 – January 2023</p>
              </div>
            </div>
            <div className="p-5">
              <p>
                This was a great time that I spend on university. I have met
                lots of great and good people. My coding journey started from
                here.
              </p>
            </div>
          </Fade>
        </div>
      </div>
      <div className="skills-container">
        <div className="header">
          <img className="header_img" src={skill_img} alt="skills"></img>
          <h4>SKILLS</h4>
        </div>
        <div className="row">
          {skills.map((element) => {
            return (
              <div className="col" key={element.id}>
                {element.id % 2 === 0 ? (
                  <Slide left>
                    <Skills
                      value={element.value}
                      title={element.title}
                      image={element.image}
                    />
                  </Slide>
                ) : (
                  <Slide right>
                    <Skills
                      value={element.value}
                      title={element.title}
                      image={element.image}
                    />
                  </Slide>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="certificates-container">
        <div className="header">
          <img className="header_img" src={check} alt="skills"></img>
          <h4>CERTIFICATES</h4>
        </div>
        <div className="row">
          {certificates.map((element) => (
            <div className="col-md-6 col-sm-12" key={element.title}>
              <Fade bottom>
                <Certificates title={element.title} link={element.link} />
              </Fade>
            </div>
          ))}
        </div>
      </div>
      <div className="hobby-container">
        <div className="header">
          <img className="header_img" src={hobby} alt="hobby"></img>
          <h6>HOBBIES</h6>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-12">
            <div className="hobbies_img">
              <img src={music} alt="hobbies"></img>
              <p>MUSIC</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="hobbies_img">
              <img src={sports} alt="hobbies"></img>
              <p>SPORTS</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="hobbies_img">
              <img src={videogames} alt="hobbies"></img>
              <p>VIDEO GAMES</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="hobbies_img">
              <img src={cooking} alt="hobbies"></img>
              <p>COOKING</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="hobbies_img">
              <img src={art} alt="hobbies"></img>
              <p>ART</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="hobbies_img">
              <img src={boardgames} alt="hobbies"></img>
              <p>BOARD GAMES</p>
            </div>
          </div>
        </div>
      </div>
      <footer style={{marginTop:"5rem"}}>
        <a className="btn btn-secondary button" href="#about_top">
          Back to Top
        </a>
        <div className="foot-links">
          <Nav.Link
            className="margin-auto"
            href="https://www.linkedin.com/in/suhrid-talukder-580a891a5/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
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
              width="24"
              height="24"
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
    </>
  );
};

export default About;
