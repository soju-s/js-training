function f(x = 1, y) {
    return [x, y];
  }
  
  console.log(f(54)); // [1, undefined]
  console.log(f(2,5));; // [2, undefined]
  