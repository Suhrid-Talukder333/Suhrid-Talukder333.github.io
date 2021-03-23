import contact_img from "../../images/undraw_contact_us.svg";
import "./styles.css";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
const Contact = () => {
  return (
    <>
      <div className="contact_container">
        <img className="contact_img" src={contact_img} alt="contact"></img>
      </div>
      <Fade top>
        <div className="details">
          <p style={{padding:'1rem'}}>CONTACT ME</p>
        </div>
      </Fade>
      <Slide top>
        <div className="email">
          <h3>EMAIL : suhridtalukder333@gmail.com</h3>
        </div>
      </Slide>
    </>
  );
};

export default Contact;
