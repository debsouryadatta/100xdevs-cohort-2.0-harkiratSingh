
// Using 1st method
setInterval(() => {
  console.clear();
  let date = new Date();
  console.log(
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
  );
}, 1000);


// Using 2nd method
let timer = ()=> {
    setTimeout(() => {
        console.clear();
        let date = new Date();
        console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
        timer();
    }, 1000);
}

timer();