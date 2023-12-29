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
exports.imageProcessor = exports.resizeImage = exports.inputValidationCheck = exports.resizedImageExistsCheck = exports.originalImageExistsCheck = exports.checkFolderExists = void 0;
var fs_1 = __importDefault(require("fs")); // Import File System module
var path_1 = __importDefault(require("path")); // Import path module
var sharp_1 = __importDefault(require("sharp")); // Import sharp module
////////////////////////////////
//// IMAGE RESIZE VARIABLES ////
////////////////////////////////
var ImagePath = path_1.default.join(__dirname, '../../images/');
var resizedImagePath = './THUMB/';
/////////////////////////////////
//// IMAGE VALIDATION CHECKS ////
/////////////////////////////////
// Check if resizedImages folder exists and create if not
var checkFolderExists = function () {
    var folder = './THUMB';
    if (!fs_1.default.existsSync(folder)) {
        fs_1.default.mkdirSync(folder);
        console.log('Created THUMB folder');
    }
    else {
        console.log('Folder already exists');
    }
};
exports.checkFolderExists = checkFolderExists;
// Check original image exists and return boolean true or false
var originalImageExistsCheck = function (filename) {
    var image = path_1.default.join("".concat(ImagePath), "".concat(filename, ".jpg"));
    if (fs_1.default.existsSync(image) === true) {
        console.log("Original image exists at ".concat(image));
        return true;
    }
    else {
        console.log("Original image does not exist at ".concat(image));
        return false;
    }
};
exports.originalImageExistsCheck = originalImageExistsCheck;
// Check resized image exists and return boolean true or false
var resizedImageExistsCheck = function (filename, imageWidth, imageHeight) {
    var image = path_1.default.join("".concat(resizedImagePath), "".concat(filename, "_").concat(imageWidth, "x").concat(imageHeight, ".jpg"));
    try {
        if (fs_1.default.existsSync(image) === true) {
            console.log("Resized image exists at ".concat(image));
            return true;
        }
        else {
            console.log("Resized image does not exist at ".concat(image));
            return false;
        }
    }
    catch (_a) {
        return false;
    }
};
exports.resizedImageExistsCheck = resizedImageExistsCheck;
// Check filename/width/height are valid and return boolean true or false
var inputValidationCheck = function (filename, imageWidth, imageHeight) {
    var Regex = /^[A-Za-z0-9]+$/;
    if (Regex.test(filename) === false) {
        return 'Filename is not valid';
    }
    else if (imageWidth <= 0 || isNaN(imageWidth)) {
        return 'Image width is not valid';
    }
    else if (imageHeight <= 0 || isNaN(imageHeight)) {
        return 'Image height is not valid';
    }
    else if (filename === undefined ||
        imageHeight === undefined ||
        imageWidth === undefined) {
        return 'Query string is undefined';
    }
    else {
        console.log('Filename is valid');
        return true;
    }
};
exports.inputValidationCheck = inputValidationCheck;
///////////////////////////////
//// IMAGE RESIZE FUNCTION ////
///////////////////////////////
// Resize image function
var resizeImage = function (filename, imageWidth, imageHeight) { return __awaiter(void 0, void 0, void 0, function () {
    var image, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                image = path_1.default.join("".concat(ImagePath), "".concat(filename, ".jpg"));
                console.log("ResizeFunction --> Filename: ".concat(filename, " and path is ").concat(image));
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, sharp_1.default)(image)
                        .resize({ width: imageWidth, height: imageHeight })
                        .toFile(path_1.default.join("".concat(resizedImagePath), "".concat(filename, "_").concat(imageWidth, "x").concat(imageHeight, ".jpg")))];
            case 2: return [2 /*return*/, _a.sent()];
            case 3:
                err_1 = _a.sent();
                console.log(err_1);
                console.log('Image could not be resized');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.resizeImage = resizeImage;
// Process resize image function with validation using nested if else statements
var imageProcessor = function (filename, imageWidth, imageHeight, res) {
    try {
        if (inputValidationCheck(filename, imageWidth, imageHeight) !== true) {
            return res
                .status(400)
                .send("".concat(inputValidationCheck(filename, imageWidth, imageHeight)));
        }
        else {
            if (resizedImageExistsCheck(filename, imageWidth, imageHeight) === true) {
                res
                    .status(200)
                    .sendFile("".concat(filename, "_").concat(imageWidth, "x").concat(imageHeight, ".jpg"), {
                    root: "".concat(resizedImagePath)
                });
            }
            else {
                if (originalImageExistsCheck(filename) === false) {
                    return res
                        .status(404)
                        .send("No file found in the 'IMAGES' folder with the name ".concat(filename, ".jpg"));
                }
                else {
                    resizeImage(filename, imageWidth, imageHeight).then(function () {
                        res
                            .status(200)
                            .sendFile("".concat(filename, "_").concat(imageWidth, "x").concat(imageHeight, ".jpg"), {
                            root: "".concat(resizedImagePath)
                        });
                    });
                }
            }
        }
    }
    catch (_a) {
        return res.status(500).send('There was an error');
    }
};
exports.imageProcessor = imageProcessor;
