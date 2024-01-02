"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import express
var express_1 = __importDefault(require("express"));
// setup express app
var app = (0, express_1.default)();
var port = 3000;
// Define API endpoint
app.get('/api', function (req, res) {
    res.send('Hello, World');
});
// Setup lisnter
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
