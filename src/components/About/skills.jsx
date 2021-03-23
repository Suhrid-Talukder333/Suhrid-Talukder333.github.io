const Skills = ({ title, value, image }) => {
  return (
    <div className="skills">
      <h3>{title}</h3>
      <img src={image} alt="skill"></img>
      <div className="progress">
        <div
          className="progress_fill"
          style={{
            width: `${value}%`,
          }}
        ></div>
        <h5 className="progress_text">{value}%</h5>
      </div>
    </div>
  );
};

export default Skills;
