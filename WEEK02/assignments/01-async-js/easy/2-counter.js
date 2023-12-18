let counter=0;

const timer = () => {
    setTimeout(() => {
        console.clear();
        console.log(counter);
        counter++;
        timer();
    }, 1000);
}

timer();
