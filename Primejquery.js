//Initial array of prime numbers
var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];

//Display's given value to html page
function displayValue(value){ 
  $("#output").text(($("#output").text() + value + ", "));
}

//Tests given value to determine if it is prime and if it is, the number is added to the array
function findPrimes(value){
 var number = (primes[primes.length -1]) + 1;
 var isPrime = true;
 var prime = 0;
//test all numbers upto given value inclusively, to find and add all primes to the array
 for(;number <= value; number++){
  isPrime = true;
  prime = 0;
  for(;prime < primes.length; prime++){
   if(number % primes[prime] == 0){
    isPrime = false;
   }
  }
  if(isPrime){   
   primes.push(number);
  }
 }
}

//Checks if given value is in the primes array and outputs a message stating whether it is or isn't a prime accordingly
function checkIfPrime(value){
 var length = primes.length-1;
 var isPrime = true;
 var prime = 0;
 for(;prime <= length; prime++){
 if(primes[prime] == value){
  return ("The given number of " +  value + " is prime.");
 }
}
return ("The given number of " +  value + " is not prime.");
}

//Displays the entire contents of the primes array to the html display
$(document).ready(function(){
 $("#DisplayKnownPrimes").click(function(){
  $("#output").text("");
  primes.forEach(displayValue);
 });
});

/*Excutes the prime number test. if the given value isn't within the arrays known number range, it will expand the known primes array until it is within the limits 
before checking if it's prime.*/
function excutePrimeTesting(){
 if(($("#inNumber").val()) > (primes[primes.length -1])){
  findPrimes($("#inNumber").val());
 }
 $("#output").text(checkIfPrime(($("#inNumber").val())));  
}

//Activates the html display's button required functionality and tells it what function to excute
$(document).ready(function(){
 $("#inNumber").on({
change: excutePrimeTesting,
keyup: excutePrimeTesting
})
});
