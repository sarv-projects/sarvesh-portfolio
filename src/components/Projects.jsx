import React from 'react';

const projects = [
  { title: "1.E-Commerce Application",
    tech: "Java, Spring Boot, PostgreSQL,React",
    description: `
•Developed a full-stack e-commerce platform with User, Product, Cart, and Order modules, exposing secure REST APIs with JWT
authentication and RBAC.
•Developed a React frontend with product catalog, search, shopping cart, and checkout flow; styled using Material-UI and Tailwind
CSS for a modern, user-friendly responsive UI.
•Designed and managed a relational database (PostgreSQL) for product, user, and order management with transaction integrity.
•Added payment simulation with Razorpay, reviews to enhance UX.
`.trim()
  },
  {
    title: "2. Real-Time Chat Application",
    tech: "Python, Flask, WebSocket, HTML/CSS/JS",
    description: `
•Engineered a WebSocket-based chat system enabling instant (<200ms) message delivery for multiple rooms.
•Designed lightweight frontend in HTML/CSS/JS seamless real-time interaction.
•Persisted chat history in SQLite, supporting 7-day retrieval and scaling to 500+ concurrent sessions.
`.trim()
  }
  ,
  {
    title: "3. URL Shortener Backend",
    tech: "Java, Spring Boot, PostgreSQL",
    description: `
•Developed a scalable URL shortening backend generating unique 6-character short codes with fast redirection.
•Designed REST APIs handling 100+ daily requests (tested via script) , integrated PostgreSQL for persistent
storage, and implemented robust input validation.
`.trim()
  },
  {
    title: "4. Notification Microservice ",
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
    title: "5.CI/CD Pipeline for Django App",
    tech: "GitHub Actions, Docker,Django",
    description: `
•Automated build, test, and deployment workflow for a Django Task Manager app using GitHub Actions, cutting manual release effort
by ~60%.
•Containerized the app with Docker, ensuring consistent builds across environments and reducing deployment errors.
`.trim()
  },
  {
    title: "6. Personal Portfolio Website",
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





