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
      <div className="container-1 show-on-scroll">
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
                <h5>December 2019 – January 2023</h5>
              </div>
            </div>
            <div className="p-5">
              <h5>
                This was a great time that I spend on university. I have met
                lots of great and good people. My coding journey started from
                here.
              </h5>
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
              <h5>MUSIC</h5>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="hobbies_img">
              <img src={sports} alt="hobbies"></img>
              <h5>SPORTS</h5>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="hobbies_img">
              <img src={videogames} alt="hobbies"></img>
              <h5>VIDEO GAMES</h5>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="hobbies_img">
              <img src={cooking} alt="hobbies"></img>
              <h5>COOKING</h5>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="hobbies_img">
              <img src={art} alt="hobbies"></img>
              <h5>ART</h5>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="hobbies_img">
              <img src={boardgames} alt="hobbies"></img>
              <h5>BOARD GAMES</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
