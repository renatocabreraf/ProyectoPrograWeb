const fs = require("fs");
const path = require ("path");
const mocha = require ("mocha");
const suite = new mocha();

fs.readdir(path.join(_dirname, "integration"), (err, files) =>{
    if (err) throw err;

    files.filter((filename)=>{
        suite.addFile(path.join(_dirname, "integration", filename));
    });
    suite.run((failure)=>{
        process.exit(failure);
    })
})