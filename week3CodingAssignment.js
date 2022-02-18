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

//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).


function wordUse(word, n) {
    return word.repeat(n);                //Found repeat() method online as way to repeat a string n number of times, very cool!
}
console.log(wordUse("Hello", 6));

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName
}

console.log(fullName('Derin', 'DeNio'));  //calling our function

//9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

var arrayNum = [3, 4, 6, 8, 500];    // array of numbers initialized

function numArray(array) {
    sum = 0;
    for (let i = 0; i <=array.length-1; i++) {
        sum = sum + array[i];                           //sum of our initial array numbers
        //console.log(sum);        making sure my sum is calculating correctly
    }
    if (sum > 100) {
        return true
    }
    else {
        return false
    }
}

console.log(numArray(arrayNum));   //calling our function

//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

var arrayNum2 = [3, 4, 6, 8, 1000];       // inital array of numbers

function numAvg(array) {
    sum = 0;
    for (let i = 0; i <=array.length-1; i++) {
        sum = sum + array[i];
    }
    var avg = sum/array.length;             //creating our variable to calculate average
    return "The average of the elements in our array is: " + avg    //returning string with results to be used in our call
}

console.log(numAvg(arrayNum2));        //calling our function

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

var arrayA = [5000, 7, 9, 10];          //setting initial array input variables
var arrayB = [10000, 300, 400];

function arrayCompare(array1, array2) {
    suma = 0;
    sumb = 0;
    for (let i = 0; i <=array1.length-1; i++) {
        suma = suma + array1[i];                       //Iterating through my arrays and calculating the sum of my input arrays
    }
    for (let i = 0; i <=array2.length-1; i++) {
        sumb = sumb + array2[i];
    }
    var avga = suma / array1.length;                   //creating my average variables
    var avgb = sumb / array2.length;
    //console.log(avga);                    <--Double checking my averages
    //console.log(avgb);
    if (avga > avgb) {
        return true
    }
    else {
        return false
    }
}

console.log(arrayCompare(arrayA, arrayB));             //compared a few differtn numbers for both inital arrays, loooks like it works!!

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

var isHotOutside = false;                   //setting initial boolean hot outside value
var moneyInPocket = 15;                           //setting initial money value

function willBuyDrink(HotOutside, money) {
    if (HotOutside == true && money > 10.5) {           //both boolean operators have to be true (&&)
        return true
    }
    else {
        return false
    }
}

console.log(willBuyDrink(isHotOutside, moneyInPocket));        //tested with both boolean cases being true, and then one being false to see output change

//13. Create own function. A function that tell us which venue we need for amount of people coming to event. If amount of people is less than 10, we will use our house for event. If amount of people is over 10, we will use outdoor public Gazeebo.
var peopleAttending = ['John', 'Cait', 'Sally', 'Gretta', 'Karen', 'Matt', 'Cisco', 'Joe', 'Wes', 'Jenn', 'Colleen', 'Mac'];  //initial list of people attending event

function venueChoice(people) {
    if (people.length >= 10) {             //if list of people is greater than or equal to
        return 'We will need to use the public gazeebo, as we have ' + people.length + ' people attending!'
    }
    else                                 // if list of people attending is less than 10
        return 'We have enough space to use our house for ' + people.length + ' people.'
}

console.log(venueChoice(peopleAttending));        //Tested right at 10 people, tested under 10 people, and tested over 10 people; works great! :)

//All finished!!! Final Commit and push here :)


