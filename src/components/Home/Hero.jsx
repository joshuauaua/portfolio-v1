import "./Hero.css";
import Silk from "./Silk.jsx";


<Silk
  speed={5}
  scale={1}
  color="#7B7481"
  noiseIntensity={1.5}
  rotation={0}
/>

export default function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-background">
         <Silk className="hero-background-image" alt="Silk background" />
        </div>

        <div className="hero-text">
          <p className="hero-intro">Hello! My name is</p>
          <h3 className="hero-description">
            Joshua Ng. <br/>
          </h3>
          <h4 className="hero-description">
            I craft digital solutions for human problems.
          </h4>
          
          <button className="hero-btn"><a href="#about" className="btn-link">⇊</a></button>
        </div>

        
      </div>
    </>
  );
}
