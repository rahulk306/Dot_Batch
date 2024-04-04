console.log("lendi");

// function implementation

run_d(); // hoisting is the process of moving fun declaration to the top of the file automatically by js engine. so we can call the function before declaration. 

function run_d()
{
    console.log("run_d");
}

run_d(); // function calling or invoking


// function assignment 

// stand(); -> hoisting works only in the case of function declaration not in the case of function assignments; 

let stand = function walk() // 1) named fun. assign
{
    console.log("walking");
}

// walk(); -> we can't call walk() as this is assigned stand name.
stand(); 

let jump = stand;
jump();

let stand2 = function() // 2) anonymous function assignment
{
    console.log("walking");
}

stand2();

function sum(a, b)
{
    return a+b;
}
console.log(sum(2,3));
console.log(sum(2)); // give error as argument no. 2 is not passed.
console.log(sum(2,4,5)); // only first two will be considered.

function sum1(a,b)
{
    let total = 0;
    for(let val of arguments) // argumnet is a object of arguments passed in
    {
        total += val;
    }
    return total;
}

console.log(sum1(2,3));
console.log(sum1(2,3,4));
console.log(sum1(2));

// Rest Operator
function sum(num, ...args) // arguments passed other than parameters are fetched into ...arge i.e., rest operator , rest para must be last parameter.

// rest operator stores the rest arguments passed in the form of array.
{
    console.log(args);
}
sum(1,2,3,4,5);

// getter setter
let person = 
{
    fName: "rahul",
    lName: "kumar",
    get fullName() // read only 
    {
        return `${person.fName}   ${person.lName}`;
    }, 
    set fullName(value)
    {
        if(typeof value == String)
        {
            throw new Error("you haven't sent a string");
        }
        let parts = value.split(" ");
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

// console.log(person.fullName); // calling getter
// person.fullName = "lendi prasad"; // calling setter
// console.log(person.fullName); // calling getter

// error handling -> try and catch 

// try
// {
//     person.fullName = true;
// }
// catch (e)
// {
//     alert("you haven't sent a string");
// }

// try
// {
//     person.fullName = 1;
// }
// catch(e)
// {
//     alert(e);
// }
// console.log(person.fullName);

// reducing an array

let arr = [1,2,3,4];

let totalsum = arr.reduce((sum, currentValue) => sum + currentValue, 0);
console.log(totalsum);


