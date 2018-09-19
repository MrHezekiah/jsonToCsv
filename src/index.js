import fs from 'fs';

const pathToFile = 'static/famous.json';

fs.readFile(pathToFile, (err, data) => {
    if (err) throw err;
    console.log(data);
});
