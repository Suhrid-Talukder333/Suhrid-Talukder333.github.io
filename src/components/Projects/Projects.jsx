import coverImg from '../../images/undraw_Work_time.svg'
import './styles.css'
import Fade from 'react-reveal/Fade';

const Projects = () => {
    return (
      <>
      <div className="cover">
        <Fade>
        <img className="coverImg" src={coverImg} alt="cover"></img>
        </Fade>
      </div>
      <div className="projects">
        <h3>You can check out my Github Account for Projects :D</h3>
        <h2><a href="https://github.com/Suhrid-Talukder33">GITHUB</a></h2> 
      </div>
      </>
    );
}
 
export default Projects;