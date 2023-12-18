const fs = require("fs");

let modifyText = new Promise((resolve)=> {
    fs.readFile('./file.txt', 'utf-8', (err,data)=> {
        resolve(data);
    })
})

modifyText.then((data)=> {
    console.log(data);
    let value = data.split(' ');
    console.log(value);
    value = value.filter((e)=> e.length>0);
    console.log(value);
    fs.writeFile('./file.txt', value.join(' '), (err)=> {
        if (err) throw err;
        console.log('The file has been saved!');
    })
})