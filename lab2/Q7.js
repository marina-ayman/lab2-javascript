// You are required to enter a word that consists of x and y that denote the number of Zs and Os respectively. The input word is considered similar to word zoo if (2*x=y). Determine if the entered word is similar to word zoo. For example, words such as zzoooo and zzzoooooo are similar to word zoo but not the words such as zzooo and zzzooooo. 

// Input: zzzoooooo 

// Output: yes 

// Input: zzoo 

// Output: no 


let x="zzzoooooo";
let text1=[];
var text2=[];


var digit1=x[0];



for(var i=0;i<x.length;i++){

if(x[i]===x[0]){


  var d1=text1.push(x[i]);

}
else{
    
 var d2=text2.push(x[i]);
}



}

console.log(text1)
console.log(text2)

length1=text1.length;
length2=text2.length

if(length1*2==length2){
    console.log('true');
}
else{
    console.log('false');
}


