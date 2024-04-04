console.log("let's start");

// ***** IN JS FUNCTIONS ARE ALSO OBJECTS *****

// object creation
// let rectangle = {
//     len: 1,  // values or properties
//     bre: 2,
    
//     // adding behaviour to the object
//     draw: function() // method -> fun inside obj
//     {
//         console.log('drawing rectangle')
//     }
// };

// factory function -> used to create objects
// here we have to use camelcasing while naming the function 
// function createRectangle(len, bre)
// {
//     return  rectangle = {
//         length:len,  // values or properties
//         bredth:bre,
        
//         // adding behaviour to the object
//         draw: function() // method -> fun inside obj
//         {
//             console.log('drawing rectangle');
//         }
//     };
// }

// creating object using factory function
// let bj1 = createRectangle(5,3);
// let bj2 = createRectangle(5,3);
// let bj3 = createRectangle(5,3);

// constructor function -> pascal Notation -> first letter of every word is capital

function Rectangle(len, bre)
{
    this.length = len; // this keyword indicates the current object
    this.bredth = bre;
    this.draw = function()
    {
        console.log("drwaing rectangle");
    }
}

// object creation using constructor function

let rectObj = new Rectangle(5, 2);
rectObj.color = "red"; // adding new properties to the objects -> obj r dynamic in nature.
console.log(rectObj);
delete rectObj.color; // deleting properties from the object
console.log(rectObj);

// constructor properties of objects

let rectangle = 
{
    len:2, 
    bre:1
};

// for in loop
for(let key in rectangle)
{
    console.log(key, rectangle[key]);
}
 
// for of loop -> we can use this loop only on iterables such as maps, sets, etc...
// here this loop will give error while using on rectangle as rectangle is not iterable

// for(let key of rectangle)
// {
//     console.log(key);
// }

// but we can use for of loop on rectangle lets see
// here we have converted the keys of rectangle obj into a vector or iterable on which we can use for of loop smoothly.
for(let key of Object.entries(rectangle))
{
    console.log(key);
}

// OBJECT CLONING

// 1. iteration

// let src = 
// {
//     a:10, b:20, c:30
// };

// let dest = {};

// for(let key in src)
// {
//     dest[key] = src[key];
// }

// console.log(dest);
// src.a++;
// console.log(src);


// 2. assign

// let src = 
// {
//     a:10, b:20, c:30
// };

// let src2 = {value: 25};

// let dest = Object.assign({}, src, src2);
// console.log(dest);
// src.a++;
// console.log(src);


// 3.spread

let src = 
{
    a:10, b:20, c:30
};

let dest = {...src};
console.log(dest);
src.a++;
console.log(src);


