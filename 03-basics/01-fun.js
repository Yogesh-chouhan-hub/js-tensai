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

