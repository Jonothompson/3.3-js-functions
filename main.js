/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(first, second){
    "use strict";
    if(first > second) {
      return first;
    } else {
      return second;
    }
}

console.assert( max(2, 3) === 3 , "max");
console.assert( max(3, 2) === 3 , "max");
console.assert( max(4, 4) === 4 , "max");

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(first, second, third) {
    "use strict";
    var largestNumber = Math.max(first, second, third);
    return largestNumber;
}

console.assert( maxOfThree(2, 3, 4) === 4 , "maxOfThree");
console.assert( maxOfThree(2, 4, 3) === 4 , "maxOfThree");
console.assert( maxOfThree(4, 2, 4) === 4 , "maxOfThree");
console.assert( maxOfThree(2, 4, 4) === 4 , "maxOfThree");
console.assert( maxOfThree(4, 4, 4) === 4 , "maxOfThree");

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    if ("a") {
        return (char) +  "is a vowel";
    }
    else if ("e") {
        return (char) + "is a vowel";
    }
    else if ("i") {
        return (char) + "is a vowel";
    }
    else if ("o") {
        return (char) + "is a vowel";
    }
    else if ("u") {
        return (char) + "is a vowel";
    }
    else if ("y") {
        return (char) + "is kinda a vowel";
    }
    else {
        return (char) + "is not a vowel";
    }
}

console.assert( isVowel("a") === "a" , "Not a Vowel");
console.assert( isVowel("e") === "e" , "Not a Vowel");
console.assert( isVowel("i") === "i" , "Not a Vowel");
console.assert( isVowel("o") === "o" , "Not a Vowel");
console.assert( isVowel("u") === "u" , "Not a Vowel");
console.assert( isVowel("y") === "y" , "Not really a Vowel");

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    //...
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(){
    "use strict";
    //...
}

function multiply(){
    "use strict";
    //...
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    "use strict";
    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
