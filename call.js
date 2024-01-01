// //Demo with javascript .call()

// var obj = {name:"Niladri"};
// var name="soju"
// var greeting = function(a,b,c){
//     return "welcome "+this.name+" to "+a+" "+b+" in "+c;
// };

// console.log(greeting.call(obj,"Newtown","KOLKATA","WB"));
// // returns output as welcome Niladri to Newtown KOLKATA in WB


var obj={name:"soju",adress:"dummy address"}


function check(fname,lname){
    
    console.log(this.name+fname+lname);

}
check.call(obj,"S","Babu")