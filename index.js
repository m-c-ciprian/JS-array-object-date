console.log("hello");

// JS - array
const fruits = ["apple", "pear", "grape", "lemon"];
console.log(fruits);

const firstItem = fruits[0];
console.log(firstItem);

const lastItem = fruits[fruits.length - 1];
console.log(lastItem);

// modifying an element in the array
fruits[1] = "orange";
console.log(fruits);

// adding elements to the array
const newFruit = "banana";
fruits.push(newFruit); // add newFruit to the end of the array
console.log(fruits);

// deleting an element from the array
fruits.pop(); // delete the last element from the array
console.log(fruits);

fruits.shift(); // delete the first element from the array
console.log(fruits);

fruits.unshift("cherry"); // add an element to the beginning of the array (at index 0)
console.log(fruits);

// finding the index of an array element
const indexOfCherry = fruits.indexOf("cherry");
console.log(indexOfCherry);

// extracting a subset from the array
const fruitsSubset = fruits.slice(1, 3);
console.log(fruitsSubset);

// modifying an array
fruits.splice(1, 2);
console.log(fruits);

fruits.splice(1, 0, "blueberry", "strawberry");
console.log(fruits);

const allFruits = fruits.concat(fruitsSubset);
console.log(allFruits);


// JS - Objects
const person = {
    name: "John",
    surname: "Doe",
    age: 31,
    address: {
        street: "Florilor",
        number: 123
    },
    contact: {
        phone: "0711000000",
        email: "j_doe@unknown.com"
    },
    hobbies: ["hiking", "fishing", "chess"]
};

console.log("person name: ", person.name);
console.log('person hobbies: ', person.hobbies);
console.log("person phone: ", person.contact.phone);
console.log("person surname: ", person["surname"]);

// changing the properties of an object
person.name = "George";
console.log("person: ", person);

// comparing objects

const obj1 = {a: 1};
const obj2 = {a: 1};
console.log("obj1 === obj2 : ", obj1 === obj2);

const obj3 = obj1;
console.log("obj3 === obj1: ", obj3 === obj1);


// JS - Date
const now = new Date();
console.log(now);

const yesterday = new Date("2024-09-29");
console.log(yesterday);

// Date methods
// accessing the properties of a Data object
console.log("now.getDate(): ", now.getDate()); // returns the day on the data object
console.log("now.getDay(): ", now.getDay()); // returns the day of the week
console.log("now.getFullYear(): ", now.getFullYear()); // returns the year
console.log("now.getMonth()", now.getMonth()); // returns the index corresponding to the month in an array of 12 objects
console.log("now.getHours(): ", now.getHours()); // return the time 
console.log("now.getMinutes(): ", now.getMinutes()); // returns the minutes on the given object
console.log("now.getMilliseconds(): ", now.getMilliseconds());

// setting the properties of a Data object
yesterday.setFullYear(2023);
console.log("yesterday: ", yesterday);

yesterday.setMonth(6);
console.log(yesterday);

yesterday.setDate(21);
console.log(yesterday);

yesterday.setHours(21);
console.log(yesterday);

yesterday.setMinutes(36);
console.log(yesterday);

yesterday.setSeconds(12);
console.log(yesterday);

// adaugare de zile intr-un obiect date
yesterday.setDate(yesterday.getDate() + 2);
console.log(yesterday);

// the difference between two dates in milliseconds
const difference = now - yesterday;
console.log("difference: ", difference);

// formatting a date
const year = now.getFullYear();
const month = now.getMonth();
const day = now.getDate();
const weekDay = now.getDay();
const hour = now.getHours();
const minutes = now.getMinutes();

const months = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", 
    "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];
const weekDays = ["Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"];

const formatedDate = `${year}, ${months[month]}, ${day}, ${weekDays[weekDay]}, ora ${hour}:${minutes}`;

console.log(formatedDate);

const newDate = new Date();
const timeStamp = newDate.getTime();
console.log(newDate);
const fromTimeStamp = new Date(timeStamp - 500000);
console.log(fromTimeStamp);