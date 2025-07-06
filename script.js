function doubleInteger(i) {
  return i * 2;
}
console.log(doubleInteger(5));

// double functions: first method
function doubleElementsArr(arr) {
  return arr.map(doubleInteger);
}
console.log(doubleElementsArr([1, 2, 3, 4, 5]));


// Second Method
function double(arr){
  for(let i = 0; i< arr.length; i++){
    arr[i]  *= 2;
  }
  return arr;
}
console.log(double([1, 2, 3, 4, 5]));