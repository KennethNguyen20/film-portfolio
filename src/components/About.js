import React from 'react';
import aboutPic from '../assets/images/aboutPic.JPG'; 
import bolexPic from '../assets/images/bolex.jpg'; 
import './About.css'; 

function About() {
  return (
    <div className="about-container">
      <div className="about-images">
        <div className="about-image">
          <img src={aboutPic} alt="Kenneth Nguyen" />
        </div>
        <div className="about-image">
          <img src={bolexPic} alt="Kenneth Nguyen" />
        </div>
      </div>
      <div className="about-links">
        <a href="mailto:kennethknguyen7@gmail.com">Email: kennethknguyen7@gmail.com</a>
      </div>
      <div className="about-content">
        <p>Kenneth Nguyen is a filmmaker/director from Herndon, Virginia. He currently attends the University of Virginia pursuing a double major in Film and Computer Science. With a diverse portfolio, he showcases his talent working with the Black & Indigenous Feminist Features Insitute, Shelley Whitman Associates, VMagazine, UVA Karsh Institute, and The Moth: MainStage at Paramount Theater. His short films have gained recognition at international film festivals, and he is actively working on new projects. Proficient in both film and digital mediums, Kenneth is eager to find new opportunities in filmmaking.</p>
      </div>
    </div>
  );
}

export default About;
