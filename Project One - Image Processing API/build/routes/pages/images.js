"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Express
var express_1 = __importDefault(require("express"));
// Set continents express router
var images = express_1.default.Router();
// Define images route
images.get('/', function (req, res) {
    console.log('showing available images');
});
// Export images router
exports.default = images;
