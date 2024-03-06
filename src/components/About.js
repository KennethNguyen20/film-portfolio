import React from 'react';
import aboutPic from '../assets/images/aboutPic.JPG'; 
import aboutPic3 from '../assets/images/about3.jpg'; 
import resumePDF from '../assets/files/NguyenKennethFilmResume.pdf'; 
import './About.css'; 

function About() {
  return (
    <div className="about-container">
      <div className="about-images">
        <div className="about-image">
          <img src={aboutPic} alt="Kenneth Nguyen" />
        </div>
        <div className="about-image">
          <img src={aboutPic3} alt="Kenneth Nguyen" />
        </div>
      </div>
      <div className="about-links">
        <a href="mailto:KeywordKenneth@gmail.com">Email: KeywordKenneth@gmail.com</a>
        <a href={resumePDF} target="_blank" rel="noopener noreferrer">View Resume</a>
      </div>
      <div className="about-content">
        <p>Kenneth Nguyen is a cinematographer from Herndon, Virginia. He is currently attending the University of Virginia pursuing a double major in Computer Science and Cinematography. With a diverse portfolio, he showcases his talent as a videographer for VMagazine and The Moth: MainStage at Paramount Theaters, and as Director of Photography for the anticipated short film "I See You," set to premiere at the Overcranked Film Festival in Spring 2024. Proficient in both film and digital mediums, Kenneth is eager to find new opportunities in filmmaking.</p>
      </div>
    </div>
  );
}

export default About;
