//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

var ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Step a. Subtract the last element (programmatically) in the array from the first element in the array: 

var x = ((ages[ages.length-1]) - ages[0]);

console.log(x);    //Printing our subtraction answer out to the console:

//Step b. Add a new age to your array and repeat Step a. :

ages.push(103);

var y = ((ages[ages.length-1]) - ages[0]);  //Subtraction after adding new element to send of array

console.log(y); //Logging out our new answer to the console

//Step c. Use a loop to iterate through our array and calculate the average age.

let sum = 0;   //Creating a sum variable to keep track of our ages array sum

for (let i = 0; i <= ages.length-1; i++) {
    sum= ages[i] + sum;
    //console.log(sum);      //checking to make sure our sum was logging, looks good, ending sum=333
}

let avg = (sum/ages.length);  //adding in our average variable; dividing our sum equation by the length of our array
console.log(avg);             //logging out our answer, checks out; 333/9 = 37 (37 being the output)

//Committing and pushing changes to github here before starting problem 2.

