// //Use .bind() javascript

// var obj = {name:"Niladri"};
// const arr=["abc"]
// var greeting = function(a,b,c,d){
//     console.log("this is a", a);
//     return "welcome "+this.name+" to "+a+" "+b+" in "+c+d;
// };

// //creates a bound function that has same body and parameters 
// var bound = greeting.bind(obj,arr); 


// console.dir(bound); ///returns a function

// console.log("Output using .bind() below ");

// console.log(bound("Newtown","KOLKATA","WB")); //call the bound function

const obj={name:"soju",std:"10"}

function check(){
var fulldata=this.name+this.std
return fulldata
}

var ans= check.bind(obj)
console.log(ans());