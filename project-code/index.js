let n = 19;
let oddNumbers =  [1,3,5,7,9];
arr = n.toString().split("");
lastElement = arr.pop();
console.log(lastElement);
function numbers (){
for (let i of oddNumbers){
  
    oddEven = (lastElement == i) ? 'odd number' : 'even number';
    return oddEven;
}
}
console.log(numbers(dsfs))