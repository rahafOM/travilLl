// Define the port number the server will listen on
const PORT = process.env.PORT || 8081;

// Import required modules
const express = require("express"); // Express framework for building the server
const bodyParser = require("body-parser"); // Middleware for parsing request bodies
const cors = require("cors"); // Middleware for enabling CORS

// Create an instance of an Express application
const app = express();

// Configure bodyParser to handle URL-encoded and JSON request bodies
app.use(bodyParser.urlencoded({ extended: false })); // Parses URL-encoded bodies
app.use(bodyParser.json()); // Parses JSON bodies

// Enable CORS for all origins
app.use(cors());

// Serve static files from the "dist" directory
app.use(express.static("dist"));

// Log the directory name where this file is located
console.log(__dirname);

// Handle GET requests to the root URL by serving the index.html file
app.get("/", function (req, res) {
  res.sendFile("dist/index.html"); // Sends the index.html file located in the "dist" folder
});

// Only start the server if not in test mode
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`); // Log a message when the server starts
  });
}
// src/server/server.js
app.get('/some-endpoint', (req, res) => {
  res.status(200).send('Some response'); // Adjust the response as needed
});


// Export the app for testing purposes
module.exports = app;

