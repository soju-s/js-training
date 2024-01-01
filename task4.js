let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  function multiplyNumeric(obj){

   for(let items in obj){
    console.log(typeof(obj[items]));
    if(typeof(obj[items])=="number"){
        obj[items]=obj[items]*2
        console.log(obj[items]);
    }

   }

   console.log(obj);
  }

  multiplyNumeric(menu);