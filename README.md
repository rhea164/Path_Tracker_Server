## Path Tracker Server

Backend server for the Path Tracker application, featuring secure user authentication and efficient track management. Built with Express.js and MongoDB, it ensures a seamless and secure experience for users.

## Features
 • <b>Secure User Authentication:</b> Utilizes JSON Web Tokens (JWT) for secure sign-up and sign-in.
 • <b>Robust Data Management:</b> Mongoose schemas for Users and Tracks, ensuring personalized data retrieval.
 • <b>Comprehensive API:</b> RESTful endpoints for user and track management, protected by authentication middleware.
 • <b>Password Security:</b> bcrypt for hashing passwords securely.
 • <b>Efficient Queries:</b> Optimized performance with efficient MongoDB queries.
 • <b>Error Handling:</b> Detailed error messages and status codes for smooth user interaction.

## Technologies Used
 • Node.js
 • Express.js
 • MongoDB
 • Mongoose
 • JWT
 • bcrypt

## Setup and Installation
• <b>Clone the repository:</b>
git clone https://github.com/your-username/PathTrackerServer.git

• <b>Navigate to the project directory:</b>
cd PathTrackerServer

• <b>Install dependencies:</b>
npm install

• <b>Set up environment variables:</b>
Create a .env file in the root directory.
Add your MongoDB URI and JWT secret key to the .env file.

• <b>Start the server:</b>
npm start
The server will run on port 3001.

## Usage
• <b>Sign Up:</b>

Endpoint: /signup
Method: POST
Body: { "email": "user@example.com", "password": "password123" }

• <b>Sign In:</b>

Endpoint: /signin
Method: POST
Body: { "email": "user@example.com", "password": "password123" }

• <b>Get User Tracks:</b>

Endpoint: /tracks
Method: GET
Headers: { "Authorization": "Bearer <token>" }

• <b>Add a Track:</b>

Endpoint: /tracks
Method: POST
Headers: { "Authorization": "Bearer <token>" }
Body: { "name": "Morning Run", "locations": [...] }
