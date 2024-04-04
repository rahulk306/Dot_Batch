// API -> application programming interface

// get/ post/ put in api async code -> read

// features of async code -> clean and concise, better error handling, easy debugging, last one jke padho khud se

// promise -> is used for parallel execution in background in async code.
// we have to pass a call back functin insise promise havving two arg. resolve and rejet.

// let mypromise = new Promise(function(resolve, reject)
// {
//     console.log('I am lendi ka baap');
//     resolve(1);
// });

// console.log('Pehla baap');

// let mypromise = new Promise(function(resolve, reject)
// {
//     setTimeout(function(){
//         console.log('I am lendi ka baap');
//     }, 5000);
//     //resolve(); // a type of return used in cpp
//     // we can use reject also then this promise will not be printed on the console and in reject we have to pass the error

//     reject(new Error("error hai code me kuch")) // on console this will print the error message not the string lendi wla

//     // we can mark resolve or rejected according to our choiice
// });

// console.log('Pehla baap');


// we can apply two methods on promise -> i) fulfilled -> return some value ii) rejected -> return error. 
// then() is used to fetch the value
// catch() is used to get the error.

let meraPromise = new Promise(function(resolve, reject)
{
    setTimeout(function()
    {
        console.log('i am inside promise1 ');
    }, 3000);
    resolve(2356);
})

meraPromise.then((value) => {console.log(value)}); // this will print the value returned in the resolve

let meraPromise1 = new Promise(function(resolve, reject)
{
    setTimeout(function()
    {
        console.log('i am inside promise1 ');
    }, 3000);
    reject(new Error("error hai"));
})

meraPromise1.catch((error) => {console.log(error)}); // this will print the error name returned in the rejected.

meraPromise1.then((value) => {console.log(value)}, (error) => {console.log("received an error")}); // isme jo bhi return hoga recect(error) aur resolve(value) wo print ho jyega.


// promise chaining -> async-await -> special syntax used to work with promises. await-> rukna wait krna hai jaise pehle p1 complete hone do phir p2 hoga.
// async function returns a promise.

async function abcd()  // abcd() will return a promise as fullfilled when we call it in the console.
{
    return 'lendi prasad';
}

async function utility()
{
    let delhimausam = new Promise((resolve, reject) => 
    {
        setTimeout(()=>
        {
            resolve("delhi is hot");
        }, 2000);
    });

    let hydmausam = new Promise((resolve, reject) => 
    {
        setTimeout(() =>
        {
            resolve("hyderabad is cool");
        },5000);
    });

    let dm = await delhimausam;
    let hm = await hydmausam;

    return [dm, hm];
}

// fetch API -> it also returns a promise