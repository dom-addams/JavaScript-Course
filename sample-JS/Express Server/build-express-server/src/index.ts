//////////////
/// GOALS ////
//////////////
// Create a simple HTTPS server with Express
// Use the https module to create a server
// Use the fs module to read the cert files

// Configure dotenv to use environment variables
// Create a .env file to store the port number
// Use the process.env object to access the port number

// Create ENVIROMENT variables
// Configure the server to use HTTPS module if the environment is set to production
// Configure the server to skip HTTPS module and define express listener if the environment is set to development

// import dependencies
import express from "express";
import https from "https";
import fs from "fs";
import dotenv from "dotenv";

// Configure dotenv
dotenv.config();

const { SERVER_ENV, SERVER_PORT } = process.env;

// setup express app
const app = express();
const port = SERVER_PORT;

// Define API endpoint
app.get("/api", (req, res) => {
  res.send("Hello, World");
});

// If Else statement checking ENVIRONMENT and setting up Express of HTTPS server
if (SERVER_ENV === "production") {
  const keyFile = fs.readFileSync("./certs/key.pem");
  const certFile = fs.readFileSync("./certs/cert.pem");
  console.log(SERVER_ENV)

  // Create HTTPS server with certs
  https
    .createServer({ key: `${keyFile}`, cert: `${certFile}` }, app)
    .listen(port, () => {
      console.log(`server started with HTTPS at https://localhost:${port}`);
    });
} else if (SERVER_ENV === "development") {
  const keyFile = fs.readFileSync("./certs/key.pem");
  const certFile = fs.readFileSync("./certs/cert.pem");
  console.log(SERVER_ENV)

  // Create HTTPS server with certs
  https
    .createServer({ key: `${keyFile}`, cert: `${certFile}` }, app)
    .listen(port, () => {
      console.log(`server started with HTTPS at https://localhost:${port}`);
    });
} else {
  // Setup Express Server
  app.listen(port, () => {
    console.log(`server started with Express at http://localhost:${port}`);
  });
}

// Setup Express Server
// app.listen(port, () => {
//   console.log(`server started at http://localhost:${port}`);
// });

// // Create HTTPS server with certs
// https
//   .createServer({ key: `${keyFile}`, cert: `${certFile}` }, app)
//   .listen(port, () => {
//     console.log(`server started at https://localhost:${port}`);
//   });
