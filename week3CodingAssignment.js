//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

var ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Step a. Subtract the last element (programmatically) in the array from the first element in the array: 

var x = ((ages[ages.length-1]) - ages[0]);

console.log("Our first element subtracted from our last element equals: " + x);    //Printing our subtraction answer out to the console:

//Step b. Add a new age to your array and repeat Step a. :

ages.push(103);

var y = ((ages[ages.length-1]) - ages[0]);  //Subtraction after adding new element to send of array

console.log("Our first element subtracted from our updated last element is: " + y); //Logging out our new answer to the console

//Step c. Use a loop to iterate through our array and calculate the average age.

let sum = 0;   //Creating a sum variable to keep track of our ages array sum

for (let i = 0; i <= ages.length-1; i++) {
    sum= ages[i] + sum;
    //console.log(sum);      //checking to make sure our sum was logging, looks good, ending sum=333
}

let avg = (sum/ages.length);  //adding in our average variable; dividing our sum equation by the length of our array
console.log("The average age is: " + avg);             //logging out our answer, checks out; 333/9 = 37 (37 being the output)

//Committing and pushing changes to github here before starting problem 2.

//2. Create an array called names that contains the followig values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//2.a. Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

var sum2 = 0;

for (let i = 0; i <=names.length-1; i++) {  
    //console.log(names[i].length);    <-- Making sure I am iterating and receiving each names length in the array, looks good.
    sum2 = sum2 + names[i].length;     // Totaling our character count, which equals 23 as expected
    //console.log(sum2);               // Making sure our sum2 is summing correctly each iterating; it is
}

let avg2 = sum2 / names.length;        // Creating our average variable
console.log("The average number of letters per name is " + avg2);    //Finally logging our average letter count per name , comes out to 3.8333 , which sounds right.

//2.b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
let name ='';                               //setting up empty string variable
for (let i = 0; i <=names.length-1; i++) {
    //console.log(names[i]);
    name = name + ' ' + names[i];            //concatenating our name elements together with spaces
    
}
console.log(name.trim());              //logging end result, found trim() method online to get rid of initial space!

//Question 3 & 4 answers are on word doc
//Committing here and pushing to github

//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

var namesArray = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var nameLengths = [];                           //creating empty array for our new data

for (let i = 0; i <=namesArray.length-1; i++) {   //iterating through our initial array
    namesArrayLength = namesArray[i].length;         //created new variable to go through each names length
    nameLengths.push(namesArrayLength);           //while we iterate through our loop, each length will be pushed into our empty starting array!
}
console.log(nameLengths);            ///console data looks good! [3, 5, 3, 5, 4, 3]

//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
let sum3 = 0;         //creating our placeholder sum variable

for (let i = 0; i <=nameLengths.length-1; i++) {
    sum3 = sum3 + nameLengths[i];
    //console.log(sum3);   <-- making sure my sum3 variable is iterating correctly; looks good
}

console.log("The sum of the elements in my nameLengths array is: " + sum3);      //Sum3 = 23, looks good!

//Taking Dinner break here, committing and pushing changes up to this point.









