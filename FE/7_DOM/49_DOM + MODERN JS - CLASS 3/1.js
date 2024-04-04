// how to write efficient code -> performance -> how to measure speed of code
// event loop in js

// performance.now() -> it is a method used in js to measure how long our code takes time to run 

                                                                        
// adding 10 paragraph normal way

const t1 = performance.now();
for(let i=1; i<=1; i++)
{
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para ' + i;

    document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("This code took " + (t2-t1) + " ms " );

// optimising a bit upper code

const t3 = performance.now();
let myDiv = document.createElement('p');

for(let i=1; i<=10; i++)
{
    let element = document.createElement('p');
    element.textContent = 'This is para ' + i;

    myDiv.appendChild(element);
}
document.body.appendChild(myDiv);
const t4 = performance.now();
console.log("This code took " + (t4-t3) + " ms " );


// reflow and repaint , less we do this more efficient our code will be.

// document fragment

const t5 = performance.now();
let fragment = document.createDocumentFragment();
for(let i=1; i<=10; i++)
{
    let newwElement = document.createElement('p');
    newwElement.textContent = "This is para " + i;

    fragment.appendChild(newwElement);
}
document.body.appendChild(fragment); // here 1 reflow, 1 repaint only
const t6 = performance.now();
console.log(t6 - t5);

// call stack
// single threading -> js -> single thread language -> processing one command at a time.

// event loop -> contact philip robert for details aboutl event loop. are jke browser pr search kr lo philip robert event loop.

// asynchronous code are using js event loop 
// call stack -> browser -> queue -> call stack

// queue async code ko tb exe krwata hai jb call stack empty hota hai.

// set TimeOut() -> time is in ms

setTimeout(function()
{
    console.log("hello lendi:!!");
}, 5000);

setTimeout(function()
{
    console.log("lendi prasad:!!");
}, 6000);

// here 5000, 6000 are time in ms which tells that minimun after that time the function will be executed. if after that time the call stack is busy with another function then it has to wait until the stack is clear.

// search how concurrency is achieved in js










