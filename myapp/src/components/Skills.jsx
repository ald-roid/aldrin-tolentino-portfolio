import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 75 },
        { name: 'Vue.js', level: 65 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'TypeScript', level: 70 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'MongoDB', level: 65 },
        { name: 'Express', level: 75 },
        { name: 'SQL', level: 60 },
      ]
    },
    {
      title: 'Data Analysis',
      skills: [
        { name: 'Python (Pandas)', level: 70 },
        { name: 'Excel', level: 75 },
        { name: 'Data Visualization', level: 65 },
        { name: 'SQL', level: 60 },
      ]
    },
    {
      title: 'Tools & Development',
      skills: [
        { name: 'Git/GitHub', level: 80 },
        { name: 'VS Code', level: 85 },
        { name: 'Figma', level: 70 },
        { name: 'Docker', level: 60 },
        { name: 'Postman', level: 65 },
      ]
    }
  ];

  // Merged all tools into one section
  const allTools = [
    // Development Tools
    { 
      name: 'GitHub', 
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg',
      url: 'https://github.com' 
    },
    { 
      name: 'VS Code', 
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/visualstudiocode.svg',
      url: 'https://code.visualstudio.com' 
    },
    { 
      name: 'Figma', 
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg',
      url: 'https://figma.com' 
    },
    { 
      name: 'Postman', 
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postman.svg',
      url: 'https://postman.com' 
    },
    { 
      name: 'Docker', 
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg',
      url: 'https://docker.com' 
    },
    { 
      name: 'MongoDB', 
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg',
      url: 'https://mongodb.com' 
    },
    { 
      name: 'Node.js', 
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg',
      url: 'https://nodejs.org' 
    },
    { 
      name: 'React', 
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg',
      url: 'https://react.dev' 
    },
    // Student/Essential Tools (merged)
    { 
      name: 'Notion', 
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/notion.svg',
      url: 'https://notion.so'
    },
    { 
      name: 'Google Drive', 
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googledrive.svg',
      url: 'https://drive.google.com'
    },
    { 
      name: 'Canva', 
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/canva.svg',
      url: 'https://canva.com'
    },
    { 
      name: 'Trello', 
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/trello.svg',
      url: 'https://trello.com'
    },
    { 
      name: 'Zoom', 
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zoom.svg',
      url: 'https://zoom.us'
    },
    { 
      name: 'Slack', 
      iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/slack.svg',
      url: 'https://slack.com'
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">02.</span>
          Skills & Technologies
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="tools-section">
          <h3 className="tools-title">Tools I Used and Familiarity</h3>
          <div className="tools-grid">
            {allTools.map((tool, index) => (
              <a
                key={index}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tool-item"
              >
                <img 
                  src={tool.iconUrl} 
                  alt={tool.name}
                  className="tool-icon"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = document.createElement('span');
                    fallback.className = 'tool-icon-fallback';
                    fallback.textContent = tool.name.charAt(0);
                    e.target.parentElement.appendChild(fallback);
                  }}
                />
                <span className="tool-name">{tool.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
