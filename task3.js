let salaries = {
    // John: 100,
    // Ann: 160,
    // Pete: 130
  }
var sum=0
var bool =Object.values(salaries)==0

if(bool==true){
    sum=0
}
else{
    for(let items in salaries){
        sum=sum+salaries[items]
      }
}
 
  console.log(sum);
