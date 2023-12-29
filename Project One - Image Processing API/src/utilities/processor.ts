// Import Modules
import { Response } from 'express'; // Import Express Framework
import fs from 'fs'; // Import File System module
import path from 'path'; // Import path module
import sharp from 'sharp'; // Import sharp module

////////////////////////////////
//// IMAGE RESIZE VARIABLES ////
////////////////////////////////
const ImagePath = path.join(__dirname, '../../images/');
const resizedImagePath = './THUMB/';

/////////////////////////////////
//// IMAGE VALIDATION CHECKS ////
/////////////////////////////////
// Check if resizedImages folder exists and create if not
const checkFolderExists = () => {
  const folder = './THUMB';
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
    console.log('Created THUMB folder');
  } else {
    console.log('Folder already exists');
  }
};

// Check original image exists and return boolean true or false
const originalImageExistsCheck = (filename: string): boolean => {
  const image = path.join(`${ImagePath}`, `${filename}.jpg`);
  if (fs.existsSync(image) === true) {
    console.log(`Original image exists at ${image}`);
    return true;
  } else {
    console.log(`Original image does not exist at ${image}`);
    return false;
  }
};

// Check resized image exists and return boolean true or false
const resizedImageExistsCheck = (
  filename: string,
  imageWidth: number,
  imageHeight: number
): boolean => {
  const image = path.join(
    `${resizedImagePath}`,
    `${filename}_${imageWidth}x${imageHeight}.jpg`
  );
  try {
    if (fs.existsSync(image) === true) {
      console.log(`Resized image exists at ${image}`);
      return true;
    } else {
      console.log(`Resized image does not exist at ${image}`);
      return false;
    }
  } catch {
    return false;
  }
};

// Check filename/width/height are valid and return boolean true or false
const inputValidationCheck = (
  filename: string,
  imageWidth: number,
  imageHeight: number
) => {
  const Regex = /^[A-Za-z0-9]+$/;
  if (Regex.test(filename) === false) {
    return 'Filename is not valid';
  } else if (imageWidth === 0 || isNaN(imageWidth)) {
    return 'Image width is not valid';
  } else if (imageHeight === 0 || isNaN(imageHeight)) {
    return 'Image height is not valid';
  } else if (
    filename === undefined ||
    imageHeight === undefined ||
    imageWidth === undefined
  ) {
    return 'Query string is undefined';
  } else {
    console.log('Filename is valid');
    return true;
  }
};

///////////////////////////////
//// IMAGE RESIZE FUNCTION ////
///////////////////////////////
// Resize image function
const resizeImage = async (
  filename: string,
  imageWidth: number,
  imageHeight: number
) => {
  const image = path.join(`${ImagePath}`, `${filename}.jpg`);
  console.log(`ResizeFunction --> Filename: ${filename} and path is ${image}`);
  try {
    return await sharp(image)
      .resize({ width: imageWidth, height: imageHeight })
      .toFile(
        path.join(
          `${resizedImagePath}`,
          `${filename}_${imageWidth}x${imageHeight}.jpg`
        )
      );
  } catch (err) {
    console.log(err);
    console.log('Image could not be resized');
  }
};

// Process resize image function with validation using nested if else statements
const imageProcessor = (
  filename: string,
  imageWidth: number,
  imageHeight: number,
  res: Response
) => {
  try {
    if (inputValidationCheck(filename, imageWidth, imageHeight) !== true) {
      return res
        .status(400)
        .send(`${inputValidationCheck(filename, imageWidth, imageHeight)}`);
    } else {
      if (resizedImageExistsCheck(filename, imageWidth, imageHeight) === true) {
        res
          .status(200)
          .sendFile(`${filename}_${imageWidth}x${imageHeight}.jpg`, {
            root: `${resizedImagePath}`
          });
      } else {
        if (originalImageExistsCheck(filename) === false) {
          return res
            .status(404)
            .send(
              `No file found in the 'IMAGES' folder with the name ${filename}.jpg`
            );
        } else {
          resizeImage(filename, imageWidth, imageHeight).then(() => {
            res
              .status(200)
              .sendFile(`${filename}_${imageWidth}x${imageHeight}.jpg`, {
                root: `${resizedImagePath}`
              });
          });
        }
      }
    }
  } catch {
    return res.status(500).send('There was an error');
  }
};

// export all functions
export {
  checkFolderExists,
  originalImageExistsCheck,
  resizedImageExistsCheck,
  inputValidationCheck,
  resizeImage,
  imageProcessor
};
