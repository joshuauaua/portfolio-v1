import './AboutMe.css';  
import { Link } from 'react-router-dom';


export default function Skillset(){

  return(
    <>


    <div id="about" className="about-section">

    <div className="about-container">

    <p className="about-description">
    We engineer digital experiences that <span className="highlight-text">resonate</span> with purpose and precision.
    </p>
    <Link to="/about" className="about-btn">Find Out More ↗</Link>
    </div>
    </div>
    
    </>
  )
}