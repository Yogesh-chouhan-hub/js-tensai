//Basic functions
function add( num1,num2){
  let result =  (num1+num2);  
   return result
}

const result = add(3,4);
console.log(result); // undefined  if not defined inside the function

//Default parameters 
function loginUser(username = "no_one"){
 return `${username} just log in`
}

console.log(loginUser());

function calculatePrice(...val){
  return val
}

console.log( calculatePrice(3,4,5));  //[3,4,5]

const user={
  name:"yogesh chouhan",
  age:21,
  address:"dutt nagar"
}

function Detail(anyObject){
  console.log(`user name is ${anyObject.name} age ${anyObject.age} address ${anyObject.address}`)
}

Detail(user)

const myArray =[1,2,3,4,5]

function ary(yo){
  return yo[1]
}

console.log(ary(myArray));
