import React from 'react';

const projects = [
  {
    title: "1. Joinly – Shared Forum System (In Progress)",
    tech: " Django , Spring Boot, PostgreSQL, Docker, React",
    description: `
• Building a multi-tenant backend system with isolated forum instances per user.
• Features include unique URLs and passwords for each forum instance, JWT-based email/password authentication, and fine-grained room-level authorization.
• Backend uses Dockerized PostgreSQL for fast environment setup, consistent development/testing, and clean containerized architecture.
•  Fully containerized with Docker to ensure reproducible development environments and easier deployment.
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
