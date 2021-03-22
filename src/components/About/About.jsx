import about from "../../images/undraw_online_resume.svg";
import edu_img from "../../images/undraw_Graduation.svg";
import versity_img from "../../images/nstu.gif";
import "./styles.css";
const About = () => {
  return (
    <>
      <div className="container-1">
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
        <div className="education-header">
          <img className="edu_img" src={edu_img} alt="education header" />
          <h4>EDUCATION</h4>
        </div>
        <div className="edu_content">
          <div className="edu_versity">
            <img className="versity_img" src={versity_img} alt="versity" />
            <div className="edu_name">
              <h3>Noakhali Science and Technology University</h3>
              <h4>Computer Science and Telecommunication Engineering</h4>
              <h5>December 2019 – January 2023</h5>
            </div>
          </div>
          <div className="p-5">
            <h5>
              This was a great time that I spend on university. I have met lots
              of great and good people. My coding journey started from here.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
