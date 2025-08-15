import React from 'react';

const projects = [
  {
    title: "1. URL Shortener Backend",
    tech: "Java, Spring Boot, PostgreSQL",
    description: `
•Developed a scalable URL shortening backend generating unique 6-character short codes with fast redirection.
•Designed REST APIs handling 100+ daily requests (tested via script) , integrated PostgreSQL for persistent
storage, and implemented robust input validation.
`.trim()
  },
  {
    title: "2. Notification Microservice ",
    tech: " Java, Spring Boot, REST API, SMTP",
    description: `
•Built a reusable microservice for sending notifications via email, extendable to SMS/push, serving 100+ daily
requests.
•Designed backend-agnostic REST APIs and request/response DTOs, enabling integration with any backend
framework (Spring Boot, Django, Node.js, etc.).
• Implemented asynchronous delivery and monitoring hooks, ensuring scalable, production-ready notification
handling.
`.trim()
  },
  {
    title: "3. Blogging Platform",
    tech: "Django, PostgreSQL, Bootstrap, Jinja2 Templates",
    description: `
•Developed a production grade blog platform with user authentication, post CRUD operations, threaded
comments.
•Built role-based dashboards for editing, publishing, or drafting posts; managed data relationships via Django
ORM.
•Integrated responsive UI with Bootstrap for seamless cross-device experience.
`.trim()
  },
  {
    title: "4. Personal Portfolio Website",
    tech: "React.js, JavaScript, Netlify",
    description: `
• Designed and deployed a responsive personal portfolio using React.js and hosted it via Netlify.
• Used component-based design and state management for smooth navigation and maintainability.
• Ensured cross-device and cross-browser compatibility.
`.trim()
  },

];

function Projects() {
  return (
    <section style={{ padding: '0.5rem' }}>
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
