"use strict";
//////////////
/// GOALS ////
//////////////
// Create a simple HTTPS server with Express
// Use the https module to create a server
// Use the fs module to read the cert files
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Configure dotenv to use environment variables
// Create a .env file to store the port number
// Use the process.env object to access the port number
// Create ENVIROMENT variables
// Configure the server to use HTTPS module if the environment is set to production
// Configure the server to skip HTTPS module and define express listener if the environment is set to development
// import dependencies
var express_1 = __importDefault(require("express"));
var https_1 = __importDefault(require("https"));
var fs_1 = __importDefault(require("fs"));
var dotenv_1 = __importDefault(require("dotenv"));
// Configure dotenv
dotenv_1.default.config();
var _a = process.env, SERVER_ENV = _a.SERVER_ENV, SERVER_PORT = _a.SERVER_PORT;
// setup express app
var app = (0, express_1.default)();
var port = SERVER_PORT;
// Define API endpoint
app.get("/api", function (req, res) {
    res.send("Hello, World");
});
// If Else statement checking ENVIRONMENT and setting up Express of HTTPS server
if (SERVER_ENV === "production") {
    var keyFile = fs_1.default.readFileSync("./certs/key.pem");
    var certFile = fs_1.default.readFileSync("./certs/cert.pem");
    console.log(SERVER_ENV);
    // Create HTTPS server with certs
    https_1.default
        .createServer({ key: "".concat(keyFile), cert: "".concat(certFile) }, app)
        .listen(port, function () {
        console.log("server started with HTTPS at https://localhost:".concat(port));
    });
}
else if (SERVER_ENV === "development") {
    var keyFile = fs_1.default.readFileSync("./certs/key.pem");
    var certFile = fs_1.default.readFileSync("./certs/cert.pem");
    console.log(SERVER_ENV);
    // Create HTTPS server with certs
    https_1.default
        .createServer({ key: "".concat(keyFile), cert: "".concat(certFile) }, app)
        .listen(port, function () {
        console.log("server started with HTTPS at https://localhost:".concat(port));
    });
}
else {
    // Setup Express Server
    app.listen(port, function () {
        console.log("server started with Express at http://localhost:".concat(port));
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
