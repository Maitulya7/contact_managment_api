<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body>

<div class="container">
  <h1>Contact Management API</h1>
  <p>📇 A Node.js-based API for managing contacts with user authentication using JWT.</p>
  
  <h2>Features</h2>
  <ul>
    <li>User Authentication: Users can register and login securely.</li>
    <li>JWT Authentication: JSON Web Token authentication for secure access to endpoints.</li>
    <li>Contact CRUD Operations: Create, Read, Update, and Delete contacts.</li>
    <li>Private Routes: Routes that require authentication.</li>
    <li>Data Validation: Ensure data integrity with validation on input.</li>
    <li>Scalability: Designed for scalability and maintainability.</li>
  </ul>
  
  <h2>Endpoints</h2>
  <ul>
    <li>
      <h3>Authentication</h3>
      <ul>
        <li><strong>Register:</strong> <code>POST /api/users/register</code></li>
        <li><strong>Login:</strong> <code>POST /api/users/login</code></li>
      </ul>
    </li>
    <li>
      <h3>Contacts</h3>
      <ul>
        <li><strong>Create Contact:</strong> <code>POST /api/contacts</code></li>
        <li><strong>Get All Contacts:</strong> <code>GET /api/contacts</code></li>
        <li><strong>Get Contact by ID:</strong> <code>GET /api/contacts/:id</code></li>
        <li><strong>Update Contact:</strong> <code>PUT /api/contacts/:id</code></li>
        <li><strong>Delete Contact:</strong> <code>DELETE /api/contacts/:id</code></li>
      </ul>
    </li>
    <li>
      <h3>Private Routes</h3>
      <ul>
        <li><strong>Current User:</strong> <code>GET /api/users/current</code> (Requires JWT token for authentication)</li>
      </ul>
    </li>
  </ul>
  
  <h2>Technologies Used</h2>
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB</li>
    <li>JSON Web Tokens (JWT)</li>
    <li>Joi (for input validation)</li>
    <li>bcrypt (for password hashing)</li>
  </ul>
  
  <h2>Setup Instructions</h2>
  <ol>
    <li>Clone the repository.</li>
    <li>Install dependencies: <code>npm install</code>.</li>
    <li>Set up environment variables for MongoDB connection and JWT secret.</li>
    <li>Run the server: <code>npm run dev</code>.</li>
  </ol>
  
  <h2>Contribution</h2>
  <p>Contributions are welcome! Fork the repository and create a pull request with your enhancements.</p>
  
  <h2>License</h2>
  <p>This project is licensed under the MIT License.</p>
  
  <p>🚀 Happy Coding! 🚀</p>
</div>

</body>
</html>
