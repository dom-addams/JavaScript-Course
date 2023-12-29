"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import functions from utilities file for testing
var processor_1 = require("../utilities/processor");
var fs_1 = __importDefault(require("fs"));
//////////////////////////////
// Test Suite for utilities //
//////////////////////////////
// Test the checkFolderExists function
describe('check ./THUMB folder exists for resized images', function () {
    it('should return true if folder exists', function () {
        expect(processor_1.checkFolderExists).toBeTrue;
    });
});
// Test the originalImageExistsCheck function and expect it to pass
describe('check if original jpg image exists', function () {
    it('should return true if original image exists', function () {
        expect((0, processor_1.originalImageExistsCheck)('waterfall')).toBeTrue();
    });
});
// Test the resizedImageExistsCheck function and expect it to fail
describe('check if resized jpg image exists', function () {
    it('should return false if resized image does not exist', function () {
        expect((0, processor_1.resizedImageExistsCheck)('waterfall', 400, 700)).toBeFalse();
    });
});
// Test the inputValidationCheck function and expect it to pass
describe('check if filename/width/height are valid', function () {
    it('should return true if filename/width/height are valid', function () {
        expect((0, processor_1.inputValidationCheck)('waterfall', 1000, 700)).toBeTrue();
    });
});
// Test the resizeImage function and expect it to create a new image
describe('check if resized image is created', function () {
    it('Resized image should be create it ../../THUMB folder if successfull', function () {
        // call resizeImage function with waterfall image
        (0, processor_1.resizeImage)('waterfall', 1000, 700);
        // check if image exists in ../../THUMB folder
        var image = './THUMB/waterfall_1000x700.jpg';
        expect(fs_1.default.existsSync(image)).toBeTrue();
    });
});
