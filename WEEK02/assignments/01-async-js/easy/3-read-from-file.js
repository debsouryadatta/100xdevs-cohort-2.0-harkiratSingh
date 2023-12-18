const fs = require("fs");
let c=0;

let fileText = new Promise((resolve) => {
  fs.readFile("file.txt", "utf-8", (err, data) => {
    resolve(data);
  });
});

fileText.then((data) => {
  console.log(data);
}).then(() => {
    console.log("hello2");
})

for (let i = 0; i < 1000000000; i++) {
  c+=2;
}
console.log(c);
