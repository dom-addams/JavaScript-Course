"use strict";
// Log URL request parameters to console
// Import Modules
// Configure logger middleware
// Export logger middleware
Object.defineProperty(exports, "__esModule", { value: true });
// Configure Logger
var logger = function (req, res, next) {
    var url = req.url;
    console.log("Request was made to: ".concat(url));
    next();
};
// Export Logger
exports.default = logger;
