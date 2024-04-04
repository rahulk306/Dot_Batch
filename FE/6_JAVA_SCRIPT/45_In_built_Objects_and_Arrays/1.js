console.log("kela lelo jee");


// in js there are two types of string first is primitive and the other is object which is created with the help of string constructor. 


let lastName = "rittik";
let firstName = new String("lendi");

// templete literals -> using back-tick (`hello`) we can write contents in any manner in the editor and as smae will be reflected in the console

let message = 
`hello ji, 
kaise hai aap, 
pani pe legeyea ${firstName}, 
uncle ji pani pila degeyea mera gala sukh rha hai`;
console.log(message);

let words = message.split(' ');
console.log(words);

// date in js

let date = new Date();
console.log(date);


// Arrays in JS

// creation
let numbers = [1,2,4,6];
console.log(numbers);

// insertion 
numbers.push(6); //end
console.log(numbers);

numbers.unshift(6); // start
console.log(numbers);

// in-between
numbers.splice(2, 0, 'a', 'b', 'c', 'd'); // here 0 that after inserting all these we are not deleting any number from the array after the inserting index. as if here we would given 1 then one element after insertin i.e., 2 will be deleted from the array.
console.log(numbers);

// searching
console.log(numbers.indexOf('b'));

// here we are creating object
let courses =
[
    {no:1, naam:'love'}, 
    {no:2, naam:'lendi'}
];

console.log(courses);

// we cannot direct search wheather a object is present or not as we were searching in arrays. 
// here we will be using callback() to search objects.

let course = courses.find(function(course)
{
    return course.naam === 'lendi';
});
console.log(course);

// another shorthand notation of using callback() -> Arrow function
let course1 = courses.find(course1 => course1.naam === 'lendi');
console.log(course1);


// removal 
let numbe = [1,2,3,4,5,6,7];
console.log(numbe);
// end
numbe.pop();
console.log(numbe);
//beginning
numbe.shift();
console.log(numbe);
// in-between
numbe.splice(2,1); // delete one element from index 2.
console.log(numbe);


// combining and slicing arrays

let first = [1,3,4];
let second = [2,5,6];

let combine = first.concat(second);
console.log(combine);

let sliced = combine.slice(2,6); // index 2 to index 6-1;
console.log(sliced);

// using spread array
let spread = [...first,'a', ...second];
console.log(spread);

// copy
let another = [...spread];
console.log(another);

// iterating over the array
let arr = [10,20,30,50];

for(let value of arr)
{
    console.log(value);
}
// using callback function
arr.forEach(function(number)
{
    console.log(number);
});

arr.forEach(number=> console.log(number));


// join
// split
// sorting
// filter

// mapping -> map each element of array to something else

let ab = [7,8,9,10];
console.log(ab);

// let items = ab.map(function(value)
// {
//     return 'student_no ' + value;
// })

let items = ab.map(value => 'student_no ' + value); // arrow function

console.log(items);

let ac = [1,3,-3,-5,5,-9];
let filtered = ac.filter(value => value>=0);
console.log(filtered);
let itm = filtered.map(function(num)
{
    return {value: num};
})
// let itm = filtered.map(num => {value: num});
console.log(itm);

