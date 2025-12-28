import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">04.</span>
          Get In Touch
        </h2>
        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-intro">
              I'm always open to discussing new projects, creative ideas, or 
              opportunities to be part of your visions. Feel free to reach out!
            </p>
            <div className="contact-methods">
              <a href="mailto:tolentinoaldrin369@gmail.com" className="contact-method">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg" 
                  alt="Email"
                  className="method-icon"
                />
                <div>
                  <h4>Email</h4>
                  <p>tolentinoaldrin369@gmail.com</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/aldrin-tolentino-b99750389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="contact-method">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" 
                  alt="LinkedIn"
                  className="method-icon"
                />
                <div>
                  <h4>LinkedIn</h4>
                  <p>aldrin-tolentino</p>
                </div>
              </a>
              <a href="https://github.com/ald-roid" target="_blank" rel="noopener noreferrer" className="contact-method">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" 
                  alt="GitHub"
                  className="method-icon"
                />
                <div>
                  <h4>GitHub</h4>
                  <p>ald-roid</p>
                </div>
              </a>
              <a href="https://www.facebook.com/aldrin.tolentino.581/" target="_blank" rel="noopener noreferrer" className="contact-method">
                <img 
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" 
                  alt="Facebook"
                  className="method-icon"
                />
                <div>
                  <h4>Facebook</h4>
                  <p>aldrin.tolentino.581</p>
                </div>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
