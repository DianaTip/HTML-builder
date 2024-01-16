const fs = require('fs');
const path = require('path');
const stream = fs.createReadStream(path.resolve(__dirname, 'text.txt'),"utf8");
let data ='';
stream.on('data', (chunk) => {
    data +=chunk.toString();
})
stream.on('end',() => {
    console.log(data);
})
stream.on('error', (e) => console.log(e))