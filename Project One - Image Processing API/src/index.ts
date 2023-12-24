import express from 'express'; // Import Express Framework


////////////////////////
//// EXPRESS CONFIG ////
////////////////////////

// Create express instance
const app = express();
const port = 3000; // default port to listen

// Define initial base route
app.get('/', (req, res) => {
    res.send('Hello Project One!');
});

// Start express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

