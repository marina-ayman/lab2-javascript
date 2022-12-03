// Write a program to count the sum of digits in 

// a number 

// input:123 

// Output:6  


function sumition(Num){
    var Sum=0;
    for(var i=0; i<Num.length;i++){
        
        Sum+=Num[i];
        
        
    }return Sum;
}

var N=prompt("num: ");
var Num=parseInt(N.split(""));

var T=sumition(Num);

document.write("sumition = ",T)


