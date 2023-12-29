"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express")); // Import Express
var images_1 = __importDefault(require("./api/images")); // import images route
var path_1 = __importDefault(require("path")); // Import path module
// set express router to routes
var routes = express_1.default.Router();
///////////////////////////////
//// SERVE HOMEPAGE CONFIG ////
///////////////////////////////
routes.get('/', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../../HTML/index.html'));
    res.status(200);
    console.log('Showing Homepage');
});
////////////////////////////
//// SERVE IMAGE RESIZE ////
////////////////////////////
routes.use('/resize', images_1.default);
// Export routes
exports.default = routes;
