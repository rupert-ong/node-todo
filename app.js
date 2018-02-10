const fs = require('fs');

// Read and Write Files
/* fs.readFile(__dirname + '/README.md', 'utf8', (err, data) => {
  fs.writeFile(__dirname + '/WRITEME.md', data, (err) => { if(err) throw err; });
  
  // Delete Files
  fs.unlink(__dirname + '/WRITEME.md', (err) => {
    if(err) console.log(`Files doesn't exist`);
  });
}); */

// Delete directory (Note we are blocking with Sync)
if(fs.existsSync('stuff')){
  // Can only remove a directory if it's empty
  for(file of fs.readdirSync('stuff')){
    fs.unlinkSync(`./stuff/${file}`);
  };
  fs.rmdirSync('stuff');
}

// Create Directories
fs.mkdir('stuff', (err)=> {
  if(err) console.log('File already exists');
  fs.readFile('./README.md', 'utf8', (err, data)=> {
    if(err) return;
    console.log('readFile async call: ' + data);
    fs.writeFile('./stuff/WRITEME.md', data, (err) => { if(err) return; })
  })
});