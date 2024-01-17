const { rejects } = require('assert');
const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;
const stream = fs.createWriteStream(path.resolve(__dirname,'text.txt'));
stdout.write('Hello! Enter text?\n');
stdin.on('data', (data) => {
  const dataString = data.toString().trim();
  if(dataString === 'exit') {
    stdout.write('Good luck!')
    process.exit();
  } else {
  stream.write(dataString);}
})
process.on('SIGINT', () => {
  stdout.write('Good luck!')
  process.exit();
});