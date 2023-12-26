const jwt = require('jsonwebtoken');

const email = "abc@gmail.com";

let token = jwt.sign({email}, "jwtsecret");

console.log(token);

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiY0BnbWFpbC5jb20iLCJpYXQiOjE3MDM1ODk3ODZ9.uJZdsZV2rplixf3wky7Axvg7oBnlaZVRs9pUrggmM64

let decoded = jwt.verify(token, "jwtsecret");
console.log(decoded);