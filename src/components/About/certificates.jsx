const Certificates = ({link, title}) => {
    return (
        <div className="certificates">
            <img style={{width:"100%",height:"100%"}} src={link} alt="certificates" />
            <h5>{title}</h5>
        </div>
    );
}
 
export default Certificates;