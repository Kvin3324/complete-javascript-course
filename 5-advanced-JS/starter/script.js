// // Function constructor

// var john = {
//   name: 'John',
//   yearOfBirth: 1990,
//   job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
//       this.name = name;
//       this.yearOfBirth = yearOfBirth;
//       this.job = job;

// }

// Person.prototype.calculateAge =
//       function() {
//         console.log(2016 - this.yearOfBirth);
//       }

// Person.prototype.lastName = 'Smith';


// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName, jane.lastName, mark.lastName);




// var papa = {
//   name: 'Jean-Pierre',
//   yearOfBirth: 1960,
//   job: 'Director'
// }

// var maman = {
//   name: 'Brigitte',
//   yearOfBirth: 1958,
//   job: 'Actor'
// }

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };

// Person.prototype.calculateAge =
//   function() {
//     console.log(2018 - this.yearOfBirth);
// }

// var papa = new Person('Jean-Pierre', 1960, 'Director');
// var maman = new Person('Brigitte', 1958, 'Actor');


// papa.calculateAge();
// maman.calculateAge();

// console.log(papa);
// console.log(maman);



// Object.create

var personProto = {
    calculateAge: function() {
      console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: {value: 'Jane'},
  yearOfBirth: {value: 1969},
  job: {value: 'designer'}
});

/* 1. Object.create builds an object that inherits from
from the one that we passed in the first argument.
*/

/* 2. Thefunction constructor the newly created object
inherits from the constructor's prototype property.
*/


// Primitives vs Objects


//Primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);

// var obj1 = {
//   name: 'John',
//   age: 26
// };


// Objects
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);


// // Functions

// var age = 27;
// var obj = {
//   name: 'Jonas',
//   city: 'Lisbon'
// };

// function change(a,b) {
//   age = 30;
//   b.city = 'San Franscisco';
// };

// change(age, obj);

// console.log(age);
// console.log(obj.city);



// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//       arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//   return 2016 - el;
// }


// function isFullAge(el) {
//   return el >= 18;
// }

// function maxHeartRate(el) {
//   if (el >= 18 && el <= 81) {
//     return Math.round(206.9 - (0.67 * el));
//   } else {
//     return - 1;
//   }
// }



// var ages = arrayCalc(years, calculateAge);
// var fullAge = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(rates);


// Functions returning functions

// function interviewQuestion(job) {
//     if (job === 'designer') {
//       return function(name) {
//         console.log(name + ' can you please explain what UX design is ?');
//       }
//     } else if (job === 'teacher') {
//       return function(name) {
//         console.log('What subject do you teach, ' + name + '?');
//       }
//     } else {
//       return function(name) {
//         console.log('Hello' + name + ' , what do you do?');
//       }
//     }
// }


// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('John');
// designerQuestion('Jane');
// designerQuestion('Mike');
// designerQuestion('Mark');

// interviewQuestion('teacher')('Mark');


// function littleBroLuc(job) {
//   if (job === 'Js teacher') {
//     return function(name) {
//       console.log('Coucou je suis ' + name + ' le Js teacher de Mcjo');
//     }
//   } else if (job === 'Uber deliver') {
//     return function(name) {
//       console.log('Coucou je suis ' + name + ' le Uber fou');
//     }
//   } else {
//     return function(name) {
//       console.log('Cc je suis' + name + ' le chomeur');
//     }
//   }
// }

// var jsQuestion = littleBroLuc('Js teacher');
// var UberQuestion = littleBroLuc('Uber deliver');

// jsQuestion('Lucas');
// UberQuestion('Lucas');
// jsQuestion('Kévin');
// jsQuestion('Florian');


// Iife

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5)
// };

// game();

// (function() {
//   var score = Math.random() * 10;
//     console.log(score >= 5);
//   })();

// // console.log(score);


// (function(goodLuck) {
//   var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
//   })(5);


// Closures

/*
Closure === "An inner function has always access to the variables
and parameters of its outer function, even after the outer
function has returned."
*/

function retirement(retirementAge) {
  var a = ' years until retirement.';
  return function(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}


var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIsland = retirement(67);

retirementGermany(1990);
retirementIsland(1990);
retirementUS(1990);



// retirement(66)(1990);


// Functions returning functions

function interviewQuestion(job) {
  return function(name) {
    if (job === 'designer') {
        console.log(name + ' can you please explain what UX design is ?');
    } else if (job === 'teacher') {
        console.log('What subject do you teach, ' + name + '?');
      } else {
        console.log('Hello' + name + ' , what do you do?');
    }
  }
}


interviewQuestion('teacher')('John');


// Bind, call and apply


var john = {
  name: 'John',
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ' ladies and gentlemen! I\'m '
        + this.name + ' , I\'m a ' + this.job + ' and I\'m '
        + this.age + ' years old.');
    } else if (style === 'friendly') {
      console.log('Hey! What\s up? I\'m ' +
        this.name + ' , I\'m a ' + this.job + ' and I\'m '
        + this.age + ' years old. Have a nice ' + timeOfDay);
    }
  }
};


var emily = {
  name: 'Emily',
  age: 35,
  job: 'designer'
}


john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

// john.presentation.apply(emily, ['friendly', 'afternoon']);


var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');




var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
      arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}


function isFullAge(limit, el) {
  return el >= limit;
}


var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);


























