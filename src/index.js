import fs from 'fs';

const pathToFile = 'static/famous.json';

fs.readFile(pathToFile, (err, data) => {
    if (err) throw err;
    const famous = JSON.parse(data);

    const head = Object.keys(famous[0]).join(',');
    const bottom = famous.map(head => {
        return Object.values(head).join();
    })
    fs.writeFile('static/output.csv', `${head}\n${bottom.join('\n')}`, err => {
        if (err) throw err;


    });

});
