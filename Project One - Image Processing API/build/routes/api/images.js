"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
///////////////////////////////
//// IMAGE RESIZE ENDPOINT ////
///////////////////////////////
var express_1 = __importDefault(require("express")); // Import Express
var processor_1 = require("../../utilities/processor"); // Import imageProcessor function
// set express route for image resize endpoint
var imageRoute = express_1.default.Router();
// Resize image endpoint with validation using nested if else statements
imageRoute.get('/', function (req, res) {
    var filename = String(req.query.filename);
    var imageWidth = Number(req.query.width);
    var imageHeight = Number(req.query.height);
    try {
        (0, processor_1.imageProcessor)(filename, imageWidth, imageHeight, res);
    }
    catch (_a) {
        res.status(500).send('Oops! Something went wrong');
    }
});
// Export imageRoute
exports.default = imageRoute;
