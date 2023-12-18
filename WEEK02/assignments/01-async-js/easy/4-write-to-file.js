const fs = require("fs");

let writeText = new Promise((resolve) => {
    fs.appendFile('./file.txt', 'wow', (err,data) => {
        resolve(data);
    })
});

writeText.then((data)=> {
    console.log(data);
})