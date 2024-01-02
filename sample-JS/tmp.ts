// This function will take all the previous functions and create a if-chain with the logic needed to create the image
const imageProcessor = (
    filename: string,
    width: number,
    height: number,
    res: Response
  ) => {
    try {
      // Process -->
      // Check the input variables are valid
      // Check if the image already exists (caching)
      // IF it does, then return the image
      // ELSE Check if the filename exists in the FULL folder
      // IF it does exist, resize the image to the specifications request and return it
  
      if (inputValidation(filename, width, height) !== true) {
        return res
          .status(400)
          .send(`${inputValidation(filename, width, height)}`);
      } else {
        if (checkIfImageFileAlreadyExists(filename, width, height) === true) {
          res
            .status(200)
            .sendFile(`${filename}_${width}x${height}.jpg`, { root: "./THUMB/" });
        } else {
          if (!checkIfFilenameExists(filename)) {
            return res
              .status(404)
              .send(
                `No file found in the 'FULL' folder with the name ${filename}`
              );
          } else {
            resizeImage(filename, width, height).then(() => {
              res.status(200).sendFile(`${filename}_${width}x${height}.jpg`, {
                root: "./THUMB/",
              });
            });
          }
        }
      }
    } catch {
      return res.status(500).send("There was an error");
    }
};

const inputValidation = (filename: string, width: number, height: number) => {
    const filenameRegex = /^[A-Za-z0-9 ]+$/;
    if (filenameRegex.test(filename) === false) {
      return "File name cannot contain special characters";
    } else if (isNaN(width) === true) {
      return "Width must be a number";
    } else if (isNaN(height) === true) {
      return "Height must be a number";
    } else {
      return true;
    }
  };