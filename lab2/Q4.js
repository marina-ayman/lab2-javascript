// Given a number N and a list A of N numbers. Determine if the number X exists in array A or not and print its position (0- index) 

// Input N: 3 

// Input list: 3 0 1 

// Input x: 0 

// Output: 1 

// Another input 

// Input N: 5 

// Input list: 1 3 0 4 5 

// Input X: 10 

// Output: -1 because there isn’t exists 



var x=prompt("num: ");
var y=prompt("search: ")

if (x.includes(y)) {
    
console.log("true")
console.log(x.search(y));
}
