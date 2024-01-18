const path = require('path');
const fsp = require('node:fs/promises');
const pathdirname = path.resolve(__dirname, 'secret-folder');

async function myreadDir (pathdirname) {
    const files = await fsp.readdir(pathdirname, {withFileTypes:true});
    files.forEach(async(file) => {
      if(file.isFile())
        {let fullFile = path.resolve(pathdirname, path.basename(file.name));
        const stats = await fsp.stat(fullFile);
        const fileName = path.parse(file.name);
        const fileExtname = path.extname(file.name).slice(1);
        const fileSize = Math.round(stats.size/1024);
        console.log(`${fileName.name} - ${fileExtname} - ${fileSize} Kb`)
      }})
  }
  myreadDir(pathdirname);