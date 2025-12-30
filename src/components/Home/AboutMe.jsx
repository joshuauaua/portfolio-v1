import './AboutMe.css';  
import { Link } from 'react-router-dom';


export default function Skillset(){

  return(
    <>


    <div id="about" className="about-section">

    <div className="about-container">

    <p className="about-description">
    I am a creative technologist interested in building <span className="highlight-text">memorable</span> digital products, services and experiences. </p> 
    <Link to="/about" className="about-btn">Find Out More ↗</Link>
    </div>
    </div>
    
    </>
  )
}