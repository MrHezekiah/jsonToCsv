import fs from 'fs';

const args = process.argv.slice(2);
console.log(args);
// const pathToFile = 'static/famous.json';
const pathToFile = args.toString();

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
