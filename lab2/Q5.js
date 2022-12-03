// Given a list of numbers, write a program to remove element from a list based on the index 

// Input N:4  

// Input list: 1 2 3 4 

// Input index:2 

// Output:1 2 4 

var x=prompt("num: ");
var xrem=x.split("");
// console.log(xrem);

var y=prompt("remove: ")

if (y>-1){
    xrem.splice(y);
}
console.log(xrem);



    
// var z=xrem[y];
// var after=xrem.splice(y);







