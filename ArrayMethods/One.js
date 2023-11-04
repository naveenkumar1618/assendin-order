// Array Methods

// Push
// Pop
// Shift
// Unshift
// Splice
// Slice
// Concat
// Delete
// Flat
// Reverse
// Split
// Join
// FindIndex
// Index Of
// CopyWith
// Sort


// Push

let ar1=[10,20,30]
ar1.push(50)
console.log(ar1);

// Pop

let ar2 =[10,20,30]
ar2.pop()
console.log(ar2);

// Shift

let ar3=[10,20,30,40]
ar3.shift()
console.log(ar3);

// Unshift
let ar4=[10,20,30]
ar4.unshift(2)
console.log(ar4);

// Splice

let ar5=[10,20,30,40,50,60]
ar5.splice(2,3)  // Position 2 from, 3 items
console.log(ar5); 

// Slice

let ar6=[10,20,30,40,50]
let ar66=ar6.slice(2,5) // from Position to Before The Number Given
console.log(ar66);

// Conact 

let ar7=[10,20,30]
let ar8=[49,50]
let ar9= ar7.concat(ar8)
console.log(ar9);

// flat 

let ar10=[[10,20],[30,40]]
let ar11=ar10.flat()
console.log(ar11);

// Delete 

let ar12=[10,20,30]
delete ar12[2]
console.log(ar12);

let a13 =[10,[20,30],40,50]
console.log(a13[1][1]);