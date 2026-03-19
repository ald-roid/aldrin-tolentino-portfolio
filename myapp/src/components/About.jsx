import './About.css';
import aboutImage from '../assets/aldrin1.jpg';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">01.</span>
          About Me
        </h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a Junior Software Developer who loves building digital solutions 
              that make a difference. With experience in PHP, React, JavaScript, and MySQL, 
              I create web applications that are clean, functional, and user-focused—from 
              management systems to interactive games and diploma retrieval platforms.
            </p>
            <p>
              I enjoy exploring new technologies, writing efficient code, and contributing 
              to projects that solve real problems. I also have a growing interest in 
              graphic design and aspire to grow into a graphic designer role—combining 
              technical skills with visual creativity to build even better digital experiences.
            </p>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <img 
                src={aboutImage} 
                alt="Aldrin Tolentino" 
                className="about-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder" style={{ display: 'none' }}>
                <span>📸</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
