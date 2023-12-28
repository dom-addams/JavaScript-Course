// Import Express
import express from 'express';

// Set continents express router
const images = express.Router();

// Define images route
images.get('/', (req, res) => {
    console.log('showing available images');
});

// Export images router
export default images;
