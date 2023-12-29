// import functions from utilities file for testing
import {
  checkFolderExists,
  originalImageExistsCheck,
  resizedImageExistsCheck,
  inputValidationCheck,
  resizeImage
} from '../utilities/processor';
import fs from 'fs';

//////////////////////////////
// Test Suite for utilities //
//////////////////////////////

// Test the checkFolderExists function
describe('check ./THUMB folder exists for resized images', () => {
  it('should return true if folder exists', () => {
    expect(checkFolderExists).toBeTrue;
  });
});

// Test the originalImageExistsCheck function and expect it to pass
describe('check if original jpg image exists', () => {
  it('should return true if original image exists', () => {
    expect(originalImageExistsCheck('waterfall')).toBeTrue();
  });
});

// Test the resizedImageExistsCheck function and expect it to fail
describe('check if resized jpg image exists', () => {
  it('should return false if resized image does not exist', () => {
    expect(resizedImageExistsCheck('waterfall', 400, 700)).toBeFalse();
  });
});

// Test the inputValidationCheck function and expect it to pass
describe('check if filename/width/height are valid', () => {
  it('should return true if filename/width/height are valid', () => {
    expect(inputValidationCheck('waterfall', 1000, 700)).toBeTrue();
  });
});

// Test the resizeImage function and expect it to create a new image
describe('check if resized image is created', () => {
  it('Resized image should be create it THUMB folder if successfull', () => {
    // call resizeImage function with waterfall image
    resizeImage('waterfall', 1000, 700);
    // check if image exists in ../../THUMB folder
    const image = './THUMB/waterfall_1000x700.jpg';
    expect(fs.existsSync(image)).toBeTrue();
  });
});
