/*
  Once you complete a problem, refresh ./destructuring.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/

let {color} = carDetails;
let {make} = carDetails;
let {model} = carDetails;
let {year} = carDetails;


////////// PROBLEM 2 //////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting(obj){
  let {firstName} = obj;
  let {lastName} = obj;
  let {title} = obj;
  
  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}



////////// PROBLEM 3 //////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

function totalPopulation(obj){
  let {utah} = obj;
  let {california} = obj;
  let {texas} = obj;
  let {arizona} = obj;
  
  return utah + california + texas + arizona;
}

////////// PROBLEM 4 //////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/

function ingredients(obj){
  let {carb} = obj;
  let {fat} = obj;
  let {protein} = obj;
  
  let arr = []
  arr.push(carb, fat, protein);
  return arr;
}

////////// PROBLEM 5 //////////

/*
  Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration.
  Example:
    function example( {one, two, three} ) {
      return one + two + three
    }

  Write a function called largeNumbers that will take a destructured object as it's parameter.
  The object properties will be named first, second, and third and their values will be numbers.
  Find the smallest number of the three and return that number.
*/

function largeNumbers(obj){
  let smallestNum = 0;
  let {first, second, third} = obj;
  if ( first < second && first < third){
    smallestNum = first;
  } else if (second < first && second < third){
    smallestNum = second;
  } else if (third < first && third < second){
    smallestNum = third;
  }
  return smallestNum;
}

////////// PROBLEM 6 //////////

/*
  Write a function called numberGroups that will take a destructured object as it's parameter.
  The object properties will be named a, b, and c and their values will be arrays of numbers.
  Find the longest array and return that array.
*/

function numberGroups(obj){
  let {a,b,c} = obj;
  let arr = [a.length,b.length,c.length];
  let longIndex = Math.max(a.length,b.length,c.length);
  if (a.length === longIndex){
     return a;
  } else if (b.length === longIndex){
     return b;
  } else if (c.length === longIndex){
    return c;
  }
}
