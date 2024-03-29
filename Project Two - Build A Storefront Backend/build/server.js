"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var orders_1 = __importDefault(require("./handlers/orders"));
var products_1 = __importDefault(require("./handlers/products"));
var users_1 = __importDefault(require("./handlers/users"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var address = '0.0.0.0:3000';
var corsOptions = {
    origin: 'http://localhost/', // List of origins to allow, currently only localhost
    optionsSuccessStatus: 200
};
app.use((0, cors_1.default)(corsOptions)); // Use CORS to allow origins
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
// Pass express to handlers
(0, orders_1.default)(app);
(0, products_1.default)(app);
(0, users_1.default)(app);
app.listen(3000, function () {
    console.log("starting app on: ".concat(address));
});
// Export Express app
exports.default = app;
