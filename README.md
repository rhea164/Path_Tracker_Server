## Path Tracker Server

Backend server for the Path Tracker application, featuring secure user authentication and efficient track management. Built with Express.js and MongoDB, it ensures a seamless and secure experience for users.

## Features
 • <b>Secure User Authentication:</b> Utilizes JSON Web Tokens (JWT) for secure sign-up and sign-in.<br>
 • <b>Robust Data Management:</b> Mongoose schemas for Users and Tracks, ensuring personalized data retrieval.<br>
 • <b>Comprehensive API:</b> RESTful endpoints for user and track management, protected by authentication middleware.<br>
 • <b>Password Security:</b> bcrypt for hashing passwords securely.<br>
 • <b>Efficient Queries:</b> Optimized performance with efficient MongoDB queries.<br>
 • <b>Error Handling:</b> Detailed error messages and status codes for smooth user interaction.<br>

## Technologies Used
 • Node.js<br>
 • Express.js<br>
 • MongoDB<br>
 • Mongoose<br>
 • JWT<br>
 • bcrypt<br>

## Setup and Installation
• <b>Clone the repository:</b>
git clone https://github.com/rhea164/Path_Tracker_Server.git

• <b>Navigate to the project directory:</b>
cd Path_Tracker_Server

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

Endpoint: /signup<br>
Method: POST<br>
Body: { "email": "user@example.com", "password": "password123" }<br><br>

• <b>Sign In:</b>

Endpoint: /signin<br>
Method: POST<br>
Body: { "email": "user@example.com", "password": "password123" }<br><br>

• <b>Get User Tracks:</b>

Endpoint: /tracks<br>
Method: GET<br>
Headers: { "Authorization": "Bearer <token>" }<br><br>

• <b>Add a Track:</b>

Endpoint: /tracks<br>
Method: POST<br>
Headers: { "Authorization": "Bearer <token>" }<br>
Body: { "name": "Morning Run", "locations": [...] }<br>
