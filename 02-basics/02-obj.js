//litrals 

const MySym = Symbol("Key1");

const obj = {
    name : "yogesh ",
    [MySym] : "weAREgroot",
    "FullName":"Yogesh Chouhan",
    age : 21,
    email: "yogeshchouhan2253@gmail.com",
    isLoggedin : false
}

console.log(obj["FullName"]);
console.log(obj[MySym]);


//object.freeze() = used to make an object unchanged


//singalton = using contructor

const tinder = new Object();
tinder.id=35;
tinder.name="yogesh"
tinder.login= false;

console.log(tinder);

const obj1={
    1:'a',
    2:'b'
}
const obj2={
    3:'a',
    4:'b'
}
const obj4={
    5:'a',
    6:'b'
}
//const obj3 =Object.assign(obj1,obj2)
//or
const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(obj1.hasOwnProperty('isLogged'));
console.log(obj1.hasOwnProperty(2));

