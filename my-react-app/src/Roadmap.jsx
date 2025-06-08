import React from 'react';
import './Roadmap.css';  // Don't forget to import the CSS

function Roadmap() {
  return (
    <div className="roadmap-container">
      <h1>Authentication System Roadmap</h1>
      
      <section>
        <h2>1. Backend Authentication</h2>
        <ul className="no-bullets">
          <li>
            <input type="checkbox" enabled /> Set up Express.js server
          </li>
          <li>
            <input type="checkbox" enabled /> Implement JWT authentication
          </li>
          <li>
            <input type="checkbox" enabled /> Create user model with MongoDB/PostgreSQL
          </li>
          <li>
            <input type="checkbox" enabled /> Add password hashing with bcrypt
          </li>
          <li>
            <input type="checkbox" enabled /> Create login/register endpoints
          </li>
        </ul>
      </section>

      {/* Add other sections similarly */}
    </div>
  );
}

export default Roadmap;