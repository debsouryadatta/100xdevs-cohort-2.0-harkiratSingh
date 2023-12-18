/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    let end = Date.now() + milliseconds;
    while(Date.now() < end){
        continue;
    }
    return Promise.resolve();
}

module.exports = sleep;
