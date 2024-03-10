// let x: number = 1;
// x = "harkirat"
// console.log(x);

// function greet(name: String) {
//     console.log("Hello" + name);
// }

// greet("Neel");

// Type Inference, We have not explicitly given the return type of the func still typescript understands the return type
// function sum(a: number, b: number) {
//     console.log(a + b);
// }

// sum(1, 2);

// const value = (a: number, b: number):number => {
//     return a+b;
// }

// const state = (body: Object)=> {
//     console.log(body);
// }

// state({msg: "Hello there"});

// Previously we discussed the types of parameters,
// Now we are looking into the type of a function when a function is passed as a parameter
// const func = (fn: ()=> void): void => {
//     setTimeout(fn, 5000);
// }

// func(()=> console.log("Hello"))


// const func = (fn: ()=> void): void => {
//     setTimeout(fn, 5000);
// }

// func(()=> {
//     return 5;
// })

// interface User {
//     firstName: string,
//     lastName: string,
//     age: number,
//     email?: string | number | boolean
// }

// function isLegal(user: User) {
//     console.log(user);
// }

// isLegal({
//     firstName: "Neel",
//     lastName: "Datta",
//     age: 21,
//     email: 100
// })

// type NumArray = number[];

// function maxValue(arr: NumArray) {
//     let max = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max;
// }

// console.log(maxValue([1, 2, 3]));

// Till now what I understood, interface & type is almost same, we can use any of these.
// Key differences,
// Interface - We can't use type for implementation in a class
// Type - We can't use interfaces for Unions( & ) or Intesections( | ) and also for defining type of an Array
// Common Practice -> Use interface until the need to use type


// interface User {
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// }
// // type Users = User[];

// function filteredUsers(users: User[]) {
//     return users.filter(x => x.age >= 18);
// }

// console.log(filteredUsers([{
//     firstName: "harkirat",
//     lastName: "Singh",
//     age: 21
// }, {
//     firstName: "Raman",
//     lastName: "Singh",
//     age: 16
// }, ]));


const array = [[1,2,3], [1,2,3]];

type subArray = number[];
type Arrayy = subArray[];

function Todo(todo: Arrayy) {
  console.log(todo);
  
}

Todo(array);