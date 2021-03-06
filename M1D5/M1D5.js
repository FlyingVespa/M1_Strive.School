/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/



//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/
console.log("-----------------> A");

let test = "This is the assigned string.";
console.log(test);

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
console.log("-----------------> B")

let sum = (10 + 20);
console.log(sum);

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
console.log("-----------------> C")

let random = function (min, max) {

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min)

};
let newRandom = random(1, 20);

console.log(newRandom);


/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
console.log("-----------------> D");

let me = {
  name: "Hedri",
  surname: "Nel",
  age: 29
};

console.log(me);

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
console.log("-----------------> E");
console.log(" Age property removed ");
let removeKey = function (me) {

  delete me.age;
  return me;
};
removeKey(me)
console.log(me);

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
console.log("-----------------> F");
console.log(" Property 'skills'added with value ");
let addKey = function (s) {
  Object.assign(s, {
    skills: ["React", "Html", "CSS"]
  });
  return s;
}
addKey(me);
console.log(me);

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
console.log("-----------------> G");
console.log(" The last value of skills removed. ");

let removeOneValueOfKey = function () {
  let skillsValue = me.skills
  skillsValue.pop();
  return;
}
removeOneValueOfKey();
console.log(me);


// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

console.log("-----------------> Ex 1");

let dice = function (min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min) + min)
}
console.log("Random dice roll envoked");
console.log(dice());

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/
console.log("-----------------> Ex 2");

let whoIsBigger = function (numberOne, numberTwo) {

  if (numberOne > numberTwo) {
    console.log(`${numberOne} is the biggest`)
  } else if (numberTwo > numberOne) {
    console.log(`${numberTwo} is the biggest`)
  } else if (numberOne === numberTwo) {
    console.log(`${numberOne} and ${numberTwo} are equal`)
  }
};

console.log("Two numbers compared and prints the biggest");
console.log(whoIsBigger(5, 6));

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

console.log("-----------------> Ex 3");

let orignalString = "I Love Coding";
let splitMe = function (par) {
  let arrString = orignalString.split(" ");
  return arrString;
};

console.log(splitMe());

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should 
    return the string without the first letter, otherwise it should remove the last one from it.
*/
console.log("-----------------> Ex 4");

let string = "Rome was not buildt in a day.";

let deleteOne = function (string, parameter) {
  if (parameter === true) {
    str = string.slice(1);
    return str;
  } else {
    console.log(string);
  }
};
console.log("FALSE parameter - Print sting as is");
console.log(deleteOne(string, false));
console.log("TRUE parameter - First letter removed");
console.log(deleteOne(string, true));

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
   */

console.log("-----------------> Ex 5");
let oldSentance = "This sentence contains 1 number and 5 cats."
let onlyLetters = function (sentance) {

  sentance = oldSentance.replace(/[0-9]/g, '');
  return sentance;
}
let withoutNumbers = onlyLetters(oldSentance);
console.log(withoutNumbers);



/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
console.log("-----------------> Ex 6");

function testEmailAddress(emailToTest) {
  // check for @
  let atSymbol = emailToTest.indexOf("@");
  if (atSymbol < 1) return false;
  // if(atSymbol < 1 // atSymbol > 2) return false;;
  // if(atSymbol !== 1) return false;

  let dot = emailToTest.indexOf(".");
  if (dot <= atSymbol + 2) return false;

  // check that the dot is not at the end
  if (dot === emailToTest.length - 1) return false;

  return true;
}
let correctEmail = "yes@gmail.com";
let wrongEmail = "thisnot@@working.com";

console.log("Valid Email:");
console.log(testEmailAddress(correctEmail));
console.log("Invalid Email:");
console.log(testEmailAddress(wrongEmail));

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/
console.log("-----------------> Ex 7");


let whatDayIsIt = function () {
  var day = new Date()
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return days[day.getDay()];
};
let todayIs = whatDayIsIt();
console.log(todayIs);

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
console.log("-----------------> Ex 8");
/*

let rollTheDices = function(times) {
  let [...parsed] = times*(dice());
  //let randomRoll = (dice())*times;
   //return randomRoll;
   return parsed;
 
}
console.log(parsed);
console.log(rollTheDices(5));
 for (i = 0 ; i < arr.lenght; sumof())
forEach(i++) 

*/
/*
let rollTheDices = function() {
  
  let newDices = dice()
  sum( )
let multiDice = rollTheDices();

console.log(multiDice);
*/
/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/
console.log("-----------------> Ex 9");
/*
const oneDay = 1000 * 60 * 60 * 24;
const todayDate = new Date();
let pastDate = new Date('07/30/2019');
let howManyDays = function(pastDate){
  let parsedTodayDate =  (Date.parse(todayDate));
  let parsedPastDate = (Date.parse(pastDate)); {
  parsedTodayDate- parsedPastDate; 
   return daysPassed;
  }

   console.log(parsedPastDate);
}

console.log(Date.parse(pastDate));
console.log(pastDate);
console.log(todayDate);
console.log(howManyDays())
*/


/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
console.log("-----------------> Ex 10");

let myBirthday = new Date("03/13/2021");
console.log(myBirthday);
let todayDateIs = new Date;

// parse the dates
// split() the time, last 
let isTodayMyBirthday = function (a, b) {

  if (a == b) {
    return true;
  } else {
    return false;
  }
  //myBirthday !== todayDateIs ?  false : true;

};

console.log(isTodayMyBirthday(myBirthday, todayDateIs));

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
  
Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/
/*
let deleteProp = function (obj,str) {

}
*/
console.log("-----------------> Ex 11");

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/
console.log("-----------------> Ex 12");
/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/
console.log("-----------------> Ex 13");
/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/
console.log("-----------------> Ex 14");
/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/
/*
let nmovies = movie.year;
let onlyInThisMillennium = function(millennium){
  let currentMovies =  nmovies.match(millennium)
  return currentMovies;
}
let movi = onlyInThisMillennium(2007)
console.log(movi);

*/
console.log("-----------------> Ex 15");
/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/
/*
let getMovieById = function(){
  movieID = 
  return movieID;
}
*/
console.log("-----------------> Ex 16");
/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

console.log("-----------------> Ex 17");
/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/
console.log("-----------------> Ex 18");
/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/
console.log("-----------------> Ex 19");
/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/
console.log("-----------------> Ex 20");
// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

/* This movies array is used throughout the exercises. Please don't change it :)  */
const movies = [{
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]