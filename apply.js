var obj={name:"soju",address:"dummy address"}


function apply(fname,lname){

    var fullName=this.name+lname
    console.log(fullName);
}
const arr=["soju","s"]
apply.apply(obj,arr)