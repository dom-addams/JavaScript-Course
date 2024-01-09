"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAuthToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken")); // import jsonwebtoken
// Create verifyAuthToken function middleware
var verifyAuthToken = function (req, res, next) {
    try {
        var authHeader = req.headers.authorization; // get authorization header
        var token = authHeader.split(' ')[1]; // get token
        jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET); // decode token
        next(); // call next function
    }
    catch (err) {
        res.status(401);
        res.json('Access denied, invalid token');
        return;
    }
};
exports.verifyAuthToken = verifyAuthToken;
