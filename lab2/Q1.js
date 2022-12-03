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

var Num=[1,2,3];
var T=sumition(Num);

document.write("sumition = ",T)


