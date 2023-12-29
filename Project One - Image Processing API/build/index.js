"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Modules
var express_1 = __importDefault(require("express")); // Import Express Framework
var routes_1 = __importDefault(require("./routes/routes")); // Import Routes
var processor_1 = require("./utilities/processor");
////////////////////////
//// EXPRESS CONFIG ////
////////////////////////
// Create express instance
var app = (0, express_1.default)();
var port = 3000; // default port to listen
// Define initial base route
app.use('/api', routes_1.default);
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
    (0, processor_1.checkFolderExists)();
});
// Export express instance
exports.default = app;
/////////////////////////////////////////
//// EXAMPLE ROUTE WITH QUERY STRING ////
/////////////////////////////////////////
// example URL http://localhost:3000/api?width=500&name=Diablo
// app.get('/api', (req: Request, res: Response) => {
//   const name = req.query.name;
//   imageWidth = Number(req.query.width);
//   console.log(`Hello ${name}`);
//   console.log((path.join(`${ImagePath}_${imageWidth}.jpg`)));
//   res.send(`Hello ${name} and Size is ${imageWidth}`);
// });
