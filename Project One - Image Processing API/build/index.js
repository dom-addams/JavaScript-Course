"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Modules
var express_1 = __importDefault(require("express")); // Import Express Framework
var logger_1 = __importDefault(require("./utilities/logger")); // Import logger middleware
var fs_1 = require("fs"); // Import File System module
var path_1 = __importDefault(require("path")); // Import path module
var sharp_1 = __importDefault(require("sharp")); // Import sharp module
////////////////////////
//// EXPRESS CONFIG ////
////////////////////////
// Create express instance
var app = (0, express_1.default)();
var port = 3000; // default port to listen
// Define initial base route
// app.use('/api', logger, routes);
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
///////////////////////////////
//// SERVE HOMEPAGE CONFIG ////
///////////////////////////////
app.get('/home', logger_1.default, function (req, res) {
    // Display index.html page from HTML folder in current directory
    res.sendFile(path_1.default.join(__dirname, '../HTML/index.html'));
    console.log('showing homepage');
});
////////////////////////////////
//// IMAGE RESIZE VARIABLES ////
////////////////////////////////
var ImagePath = path_1.default.join(__dirname, '../images/original/');
var resizedImagePath = path_1.default.join(__dirname, '../images/resized/');
// image parameters
var imageWidth;
var imageHeight;
var filename;
// filename array
var filenameArray = [
    'encenadaport',
    'fjord',
    'palmtunnel',
    'santamonica',
    'timetable',
    'waterfall'
];
///////////////////////////////
//// IMAGE RESIZE FUNCTION ////
///////////////////////////////
var resizeImage = function (filename, imageWidth, imageHeight) { return __awaiter(void 0, void 0, void 0, function () {
    var err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, sharp_1.default)(path_1.default.join("".concat(ImagePath), "".concat(filename), '.jpg'))
                        .resize({ width: imageWidth, height: imageHeight })
                        .toFile(path_1.default.join("".concat(resizedImagePath), "".concat(filename, "_").concat(imageWidth, "x").concat(imageHeight, ".jpg")))];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                err_1 = _a.sent();
                console.log(err_1);
                console.log('Image could not be resized');
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
/////////////////////////////////
//// IMAGE VALIDATION CHECKS ////
/////////////////////////////////
// Check image has been resized and return boolean true or false
var ImageCheck = function () {
    if ((0, fs_1.existsSync)(resizedImagePath) === false) {
        console.log('Image does not exist');
        return false;
    }
    else {
        console.log('Image exists');
        return true;
    }
};
// Check filename is valid and return boolean true or false
var FilenameCheck = function (filename, imageWidth, imageHeight, res) {
    var Regex = /^[A-Za-z0-9]+$/;
    if (Regex.test(filename) === true || filenameArray.includes(filename)) {
        console.log('Filename is valid');
        return true;
    }
    else if ((imageWidth === 0) || (isNaN(imageWidth))) {
        console.log('Image width is not valid');
        res.send('Image width is not valid');
        return false;
    }
    else if ((imageHeight === 0) || (isNaN(imageHeight))) {
        console.log('Image height is not valid');
        res.send('Image height is not valid');
        return false;
    }
    else {
        console.log('Filename is not valid');
        res.send('Filename is not valid');
        return false;
    }
};
///////////////////////////////
//// IMAGE RESIZE ENDPOINT ////
///////////////////////////////
app.get('/resize', logger_1.default, function (req, res) {
    filename = req.query.filename;
    imageWidth = Number(req.query.width);
    imageHeight = Number(req.query.height);
    try {
        if (ImageCheck() === false) {
            console.log('resizing image');
            res.send('resizing image');
            resizeImage(filename, imageWidth, imageHeight);
            console.log('image resized');
            res.send('image resized');
        }
        else {
            console.log('Image already resized');
            console.log('redirecting to image');
            res.redirect('/image');
        }
    }
    catch (err) {
        console.log(err);
    }
});
app.get('/image', logger_1.default, function (req, res) {
    // Get query string parameters
    filename = req.query.filename;
    imageWidth = Number(req.query.width);
    imageHeight = Number(req.query.height);
    // Send resized image to browser
    res.sendFile(path_1.default.join("".concat(resizedImagePath), "".concat(filename, "_").concat(imageWidth, "x").concat(imageHeight, ".jpg")));
});
////////////////////////
//// DEFAULT ERRORS ////
////////////////////////
var myError = function (res) {
    return res.status(500).send("There was an error");
};
var imageError = function (res) {
    return res.status(404).send("Image not found. Please resize image first with /resize route.");
};
/////////////////////////////////////////
//// EXAMPLE ROUTE WITH QUERY STRING ////
/////////////////////////////////////////
// example URL http://localhost:3000/api?width=500&name=Diablo
app.get('/api', function (req, res) {
    var name = req.query.name;
    imageWidth = Number(req.query.width);
    console.log("Hello ".concat(name));
    console.log((path_1.default.join("".concat(ImagePath, "_").concat(imageWidth, ".jpg"))));
    res.send("Hello ".concat(name, " and Size is ").concat(imageWidth));
});
