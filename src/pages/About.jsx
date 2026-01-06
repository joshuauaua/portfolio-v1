import LetsChat from "../components/Home/LetsChat.jsx";
import Silk from "../components/Home/Silk.jsx";
import './About.css';
import joshua from '/src/assets/joshua.png';
import { useEffect } from "react"; 
import CV from "/src/assets/JoshuaNg_CV.pdf";


  
<Silk speed={5} scale={1} color="#7B7481" noiseIntensity={2} rotation={0} />;

export default function MainAbout() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <div className="about">
        <div className="about-background">
        </div>

        <div className="about-content">
          <img src={joshua} className="about-img" />

          <div>
            <p className="about-text">
              My path into programming wasn’t a straight line. For nearly a decade, I worked in the creative
              industries as a project leader and producer, exploring the intersection of art, culture, and technology.
              From building a crowdsourced living room in Malmö to founding a creative sound studio for clients like
              Google and Fujifilm, I’ve always been driven by impactful experiences.
              <br /><br />
              A turning point came when I developed a machine learning tool to analyze audio for delivery bicycles—revealing
              the power of combining digital tools with my creative background.
              <br /><br />
              Today, I’m focused on building digital products using .NET, React, and emerging technologies, striving to
              create tools that shape a better world.
            </p>
          </div>
          <a href={CV} target="_blank" rel="noopener noreferrer" className="about-btn">Check Out My CV ↗</a>

          <div className="expertise-section">
            <h2 className="expertise-header">My Expertise</h2>
            <div className="expertise-list">
               <div className="expertise-category">
                  <h3>Languages</h3>
                  <p>JavaScript, C#, HTML/CSS</p>
               </div>
               <div className="expertise-category">
                  <h3>Frameworks & Libraries</h3>
                  <p>React, .NET, Node.js</p>
               </div>
               <div className="expertise-category">
                  <h3>Creative Tech</h3>
                  <p>Sound Design, ML, Embedded Programming, Arduino</p>
               </div>
               <div className="expertise-category">
                  <h3>Tools</h3>
                  <p>Git, Figma, Storyblok</p>
               </div>
            </div>
          </div>

        </div>
      </div>
      <LetsChat />
    </>
  );
}
