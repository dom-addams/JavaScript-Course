// Import Modules
import express, { Request, Response } from 'express'; // Import Express Framework
import routes from './routes/routes'; // Import routes
import logger from './utilities/logger'; // Import logger middleware
import { existsSync, promises as fs } from 'fs'; // Import File System module
import path from 'path'; // Import path module
import sharp from 'sharp'; // Import sharp module


////////////////////////
//// EXPRESS CONFIG ////
////////////////////////

// Create express instance
const app = express();
const port = 3000; // default port to listen

// Define initial base route
// app.use('/api', logger, routes);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

///////////////////////////////
//// SERVE HOMEPAGE CONFIG ////
///////////////////////////////

app.get('/home', logger, (req, res) => {
  // Display index.html page from HTML folder in current directory
  res.sendFile(path.join(__dirname, '../HTML/index.html'));
  console.log('showing homepage');
});

////////////////////////////////
//// IMAGE RESIZE VARIABLES ////
////////////////////////////////
const ImagePath = path.join(__dirname, '../images/original/');
const resizedImagePath = path.join(__dirname, '../images/resized/');

// image parameters
let imageWidth: number;
let imageHeight: number;
let filename: string;

// filename array
const filenameArray = [
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
// Resize image function
const resizeImage = async (filename: string, imageWidth: number, imageHeight: number) => {
  try {
    return await sharp(path.join(`${ImagePath}`, `${filename}`, '.jpg'))
      .resize({ width: imageWidth, height: imageHeight })
      .toFile(path.join(`${resizedImagePath}`, `${filename}_${imageWidth}x${imageHeight}.jpg`));
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
      if (inputValidationCheck(filename, imageWidth, imageHeight, res) !== true) {
        return res
          .status(400)
          .send(`${inputValidationCheck(filename, imageWidth, imageHeight, res)}`);
      } else {
        if (resizedImageExistsCheck(filename) === true) {
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
                root: `${resizedImagePath}`,
              });
            });
          }
        }
      }
    } catch {
      return res.status(500).send("There was an error");
    }
};

/////////////////////////////////
//// IMAGE VALIDATION CHECKS ////
/////////////////////////////////

// Check original image exists and return boolean true or false
const originalImageExistsCheck = (filename: string): boolean => {
  if (existsSync(path.join(`${ImagePath}`, `${filename}.jpg`)) === false) {
    console.log('Image does not exist');
    return false;
  } else {
    console.log('Image exists');
    return true;
  }
};

// Check image has been resized and return boolean true or false
const resizedImageExistsCheck = (filename: string): boolean => {
  if (existsSync(path.join(`${resizedImagePath}`, `${filename}.jpg`)) === false) {
    console.log('Image does not exist');
    return false;
  } else {
    console.log('Image exists');
    return true;
  }
};

// Check filename is valid and return boolean true or false
const inputValidationCheck = (filename: string, imageWidth: number, imageHeight: number, res: Response) => {
  const Regex = /^[A-Za-z0-9]+$/;
  if (Regex.test(filename) === false || filenameArray.includes(filename) === false) {
    return 'Filename is not valid';
  } else if ((imageWidth === 0) || (isNaN(imageWidth))) {
    return 'Image width is not valid';
  } else if ((imageHeight === 0) || (isNaN(imageHeight))) {
    return 'Image height is not valid';
  } else {
    console.log('Filename is valid');
    return true;
  }
};



///////////////////////////////
//// IMAGE RESIZE ENDPOINT ////
///////////////////////////////

// Resize image endpoint with validation using nested if else statements
app.get('/resize', logger, (req: Request, res: Response) => {
  filename = (req.query.filename as string);
  imageWidth = Number(req.query.width);
  imageHeight = Number(req.query.height);
  try {
    imageProcessor(filename, imageWidth, imageHeight, res);
  } catch {
    res.status(500).send("Oops! Something went wrong");
  }
});



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
