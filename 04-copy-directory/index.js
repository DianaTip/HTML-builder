const fs = require('fs');
const fsp = require('node:fs/promises');
const path = require('path');
const pathdirname = path.resolve(__dirname, 'files');
const copyFolder = fs.mkdir(path.join(__dirname, 'files-copy'),
  { recursive: true },
  (err) => {
    if (err) {
      return console.error(err);
    }
  });
  const files = fs.readdir(pathdirname, {withFileTypes:true});
  files.forEach((file) => {
  //fs.copyFile(path.join(pathdirname,file), path.join(copyFolder,file) */

  fs.copyFile(
    path.join(pathdirname, file),
    path.join(copyFolder, file),
    (err) => {
      if (err) return console.error(err);
    },
  );})


 /* async function mycopyFile (pathdirname) {
    const files = await fsp.readdir(pathdirname, {withFileTypes:true});
    fsp.readdir(pathdirname).forEach(async(file) => {
    let fileItem =  path.resolve(copyFolder, path.basename(file.name));
    let oldFile =  path.resolve(pathdirname, path.basename(file.name));
    console.log(fileItem, );
      fsp.copyFile(oldFile, fileItem, err => {
        if(err) throw err; // не удалось скопировать файл
        console.log('Файл успешно скопирован');
    });
  })}
  mycopyFile(pathdirname);*/


  /*function getCurrentFilenames() {
    console.log("\nCurrent filenames:");
    fs.readdirSync(__dirname).forEach(file => {
        console.log(file);
    });
}*/