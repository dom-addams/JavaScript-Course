# _Reviewer Guide For Project One - Image Processing API_

## Overview
* What do I want to start?
    * Use express to server app on http://localhost:3000/api
    * use logger to see requests in console
    * serve static HTML page on path /home

* Second Stage
    * import sharp
    * hardcode resize with sharp async
    * serve user the resized image/URL ++ cache URL
        * create 'const orginal' for original image path
        * create 'const resized' for resized image path
    * create let for image width
    * create let for image height
    * create array for image names 

* Third Stage
    * move resize parameters to variable
    * make resize parameters query string
    * make image path a variable
    * check array values
    * use sharp to rename file to 'filename'_'width'x'height'.jpg

* Fourth Stage
    * use fs module to do the following:
        * mkdir .full and .thumb
        * cp original image to .full
    * move sharp resize to processor.ts file
    * use /resize to call function and redirect to /image
    * keep query string/parameters on redirect
