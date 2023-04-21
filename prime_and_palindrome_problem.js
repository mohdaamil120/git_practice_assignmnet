
////// Problem 1 check prime //////// 

let x = 5;
let fac = 0;

for (let i=1; i<=x; i++){

 if (x % i != 0){
  
    fac++;

} 

}


if (fac == 2){
console.log(x, "is prime");

}
else {
console.log(x, "is not a prime"

}


/////// Problem 2 check Palindrome /////////


let str = "naman";
let bag = "";

for (let i=str.length-1; i>=0; i++){

bag = bag + str[i];

}

if (str = bag ){
console.log("Palindrome");

}
else {
console.log("Not a Palindrome");

}