import about from "../../images/undraw_online_resume.svg";
import edu_img from "../../images/animat-pencil-color.gif";
import versity_img from "../../images/nstu.gif";
import skill_img from "../../images/animat-linechart-color.gif";
import "./styles.css";
import Fade from "react-reveal/Fade";
import { useLayoutEffect } from "react";
import Slide from "react-reveal/Slide";
import Skills from "./skills";
import c from '../../images/c.png';
import csharp from '../../images/c#.png';
import html from "../../images/html.png";
import js from "../../images/java-script.png";
import react from "../../images/react.png";
import sql from "../../images/sql.png"; 
import reactnative from "../../images/react-native.png";
import mongo from "../../images/mongodb.png";
import unity from "../../images/unity.png";
import linux from "../../images/linux.png";

const skills = [
  { title: "C++", value: "70", id: 1, image:c},
  { title: "Html-Css", value: "60", id: 2, image:html},
  { title: "JavaScript", value: "65", id: 3, image:js },
  { title: "ReactJS", value: "50", id: 4, image:react },
  { title: "ReactNative", value: "30", id: 5, image:reactnative },
  { title: "C#", value: "40", id: 6, image:csharp},
  { title: "SQL", value: "40", id: 7, image:sql },
  { title: "MongoDB", value: "40", id: 8, image:mongo},
  { title: "Unity", value: "40", id: 9, image:unity},
  { title: "Linux", value: "60", id: 10, image:linux },
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
    </>
  );
};

export default About;
