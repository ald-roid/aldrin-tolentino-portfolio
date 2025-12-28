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
              Hello! I'm a passionate developer who loves creating digital experiences 
              that make a difference. With a strong foundation in modern web technologies, 
              I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community.
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
