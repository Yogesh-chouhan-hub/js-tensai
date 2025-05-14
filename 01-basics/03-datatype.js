let name ="yogesh chouhan "
let age = 21 
let isloggeddin = true


console.table([name,age,isloggeddin])
//number 
//Bigint
//strings
//boolean
//null => stand alone value 
//undefine => declare but not defined
//symbol => to find the uniqueness

//object 
//array


console.log(typeof "hitesh");
console.log(typeof "age");
console.log(typeof "isloggedin");
console.log(typeof null);


//type of null is object 

//Primitive data type---7 type
//string,number,boolean,null,undefined,symbol,BigInt

//Refrence type or non primitive
//Array ,objects,functions 

const id =Symbol('123')
const anotherId =Symbol('123')
console.log(id === anotherId);

const bigNumber = 12345678987654321n
console.log(bigNumber);

const heros = ["shaktimam","nagraj","daga"];
let myobj={
    name:"yogesh",
    age:21
}

let myfun=function(){
    console.log(myfun);
    
}