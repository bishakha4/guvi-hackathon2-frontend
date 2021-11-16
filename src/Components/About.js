import Nav from "./Nav";
import "./About.css"
function About() {
    return (
        <>
         <Nav  />
            <div className="row">
                <div className="img-container">
                <img className="Header-logo" src="/NIVE.jpg" width="50px" height='400px' alt="Logo" />
                    <h1 className="text-start"  width="43%"  height='43%'  > Bishakha </h1>
            </div>

                <div className="details">
                    <h3 className="text-start">Name: <span className="text-info" style={{ color: 'black' }}>Bishakha</span></h3>
                    <h3 className="text-start">Education: <span className="text-info">B.Sc.</span></h3>
                    <h3 className="text-start">Current: <span className="text-info"> MERN FULL STACK Guvi</span></h3>

            </div>
        </div>
         </>
        );
 }
  export default About;