import './About.css';

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
            <div className="about-highlights">
              <h3>Here are a few technologies I've been working with:</h3>
              <ul className="tech-list">
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>TypeScript</li>
                <li>Python</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-placeholder">
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

