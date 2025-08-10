import React from 'react';

const projects = [
  {
    title: "1. URL Shortener Backend",
    tech: "Java, Spring Boot, PostgreSQL",
    description: `
• Developed a scalable URL shortening backend generating unique short URLs for long URLs.
• Implemented a REST API for URL creation and redirection, handling 1000+ daily requests.
• Utilized Spring Boot and PostgreSQL for efficient data storage and retrieval.
`.trim()
  },
  {
    title: "2. Smart Expense Tracker (In Progress) ",
    tech: "Django, React.js, PostgreSQL, Docker, OCR, Spring Boot",
    description: `
• Developing a full-stack expense tracker with real-time receipt scanning (OCR) and financial reporting.
• React frontend for receipt upload, editing, and an expense dashboard.
• Used Django ORM with PostgreSQL for efficient data handling.
• Enabled export functionality (CSV/PDF) for user-friendly financial reporting and analysis.
`.trim()
  },
  {
    title: "3. Blogging Platform",
    tech: "Django, PostgreSQL, Bootstrap, Jinja2 Templates",
    description: `
• Developed a production-grade blog platform with user authentication, post CRUD operations, and threaded comments.
• Built a dynamic frontend using Django Templates and Bootstrap for a responsive UI.
• Secured a user dashboard with role-based access to edit, publish, or draft posts.
• Used Django ORM and PostgreSQL to manage data relationships between users, posts, and comments.
• Integrated form validation, a messaging system, and a responsive UI for a seamless UX across devices.
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
  {
    title: "5. Daily Reset Notes API",
    tech: "Java, Spring Boot",
    description: `
• Developed a secure REST API supporting per-user note creation and retrieval, with basic authentication.
• Implemented daily note cleanup and used an in-memory H2 DB for sessionless demo behavior.
• Designed clean, modular endpoints ready for frontend integration.
• Validated API reliability through comprehensive Postman testing.
`.trim()
  }
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
