import express from 'express';

// Import File System module
import { promises as fsPromises } from 'fs';

// import csvtojson module
import csv from 'csvtojson';

const app = express();
const port = 3000;

// Define input and output file paths
const inputFile = './users.csv';
const outputFile = 'users.json';

// Define route handler /convert to convert csv to json
app.get('/convert', async (req, res) => {
    res.send('Converting CSV to JSON...');
        csv()
        .fromFile(inputFile)
        .then((data) => {
            let newData = data.map((item: {
                first_name: string;
                last_name: string;
                phone: string;
            }) => {
                let first = item.first_name;
                let last = item.last_name;
                let phone = item.phone;
                if (item.phone === undefined) {
                    phone = 'missing data';
                }
                return {first, last, phone};
            });
            fsPromises.writeFile(outputFile, JSON.stringify(newData));
        });
});
                
// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});