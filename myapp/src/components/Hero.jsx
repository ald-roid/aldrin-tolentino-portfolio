import './Hero.css';
import resumePdf from '../assets/Tolentino Resume.pdf';

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Tolentino_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Aldrin Tolentino</h1>
          <h2 className="hero-title">Aspiring Data Scientist and Software Developer</h2>
          <p className="hero-description">
          I create clean, functional, and data-driven web experiences, combining modern design, efficient code, and a strong focus on user experience.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={handleResumeDownload}
            >
              Download Resume
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <img 
              src="src/assets/aldrin.jpg" 
              alt="Tolentino" 
              className="profile-photo"
              onError={(e) => {
                // Try alternative paths
                if (e.target.src.includes('/profile-photo.jpg')) {
                  e.target.src = '/profile-photo.png';
                } else if (e.target.src.includes('/profile-photo.png')) {
                  e.target.src = '/profile-photo.jpeg';
                } else {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }
              }}
            />
            <div className="avatar-placeholder" style={{ display: 'none' }}>
              <span>👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

export default Hero;
