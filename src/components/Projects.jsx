import React from 'react';

const projects = [
  {
    title: "1. Blogging Platform ",
    tech: " Django, PostgreSQL, Bootstrap, Jinja2 Templates",
    description: `
• Developed a production grade blog platform with user authentication, post CRUD operations and threaded comments.
• Built dynamic frontend using Django Templates and Bootstrap for responsive UI
• Secured user dashboard with role-based access to edit, publish, or draft posts.
• Integrated form validation, messaging system, and responsive UI for seamless UX across devices
`.trim()
  },
  {
    title: "2. Personal Portfolio Website",
    tech: "React.js, JavaScript, Netlify",
    description: `
• Designed and deployed a responsive personal portfolio using React.js and hosted it via Netlify.
• Used component-based design and state management for smooth navigation and maintainability.
• Ensured cross-device and cross-browser compatibility.
`.trim()
  },
    {
    title: "3. Daily Reset Notes API",
    tech: "Java, Spring Boot",
    description: `
• Developed a secure REST API supporting per-user note creation and retrieval, with basic authentication.
• Implemented daily note cleanup using Spring Scheduler and used in-memory H2 DB for sessionless demo behavior.
• Designed clean, modular endpoints ready for frontend integration.
• Validated API reliability through comprehensive Postman testing.
`.trim()
  }  
];

function Projects() {
  return (
    <section style={{ padding: '1rem' }}>
      <h2><u>Projects</u></h2>
      {projects.map((proj, idx) => (
        <div key={idx} style={{ marginBottom: '1rem' }}>
          <h3>{proj.title}</h3>
          <p><strong>Tech:</strong> {proj.tech}</p>
          <p style={{ whiteSpace: 'pre-line' }}>{proj.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Projects;
