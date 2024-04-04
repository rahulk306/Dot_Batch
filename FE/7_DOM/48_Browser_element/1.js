function event_fun()
{
    console.log("lendi");
}

// document.addEventListener('doubleclick',function(){
//     console.log('I have clicked on the document');
// });
// document.removeEventListener('click', function(){
//     console.log('I');
// });

document.addEventListener('click', event_fun);
document.removeEventListener('click', event_fun);
// removeeventlistner ka body same to same hone chahyea add ke jaise.


// Phases of an event -> 1)capturing phase : finding the target in the html body (document object). 2)at target phase : when target is found. 3)bubbling phase : returning to the document object.


//event object
// event ko print kr dega.
// function ke andr kuch bhi likh skte hai jaise lendi aur phir console ke andr bhi lendi.

// const content = document.querySelector('#wrapper');
// content.addEventListener('click', function(event)
// {
//     console.log(event);
// })

//the default action: used to prevent/stop default action jaise anchor tag opens new link in diff window so hm usko wo task nhi krne denge

// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click', function(event)
// {
//     event.preventDefault();
//     console.log("lendi_lendi")
// })

// avoid too many events

// let myDiv = document.createElement('div');

// for(let i=1; i<=10; i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = "this is para " + i;

//     newElement.addEventListener('click', function(event)
//     {
//         console.log('I have clicked on para ' + i);
//     });
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// here we are creating a new event lister object in each iteration of the loop but we are creating the same event listner again and again it will size/allot space more. so we can create a event listner and call it again so that no new object will be created in each iteration of the loop and we will save space/memory so let us see the best way

// let myDiv = document.createElement('div');

// function paraStatus(event)
// {
//     console.log('para' + event.target.textContent);
// }

// myDiv.addEventListener('click', paraStatus);

// for(let i=1; i<=10; i++)
// {
//     let newElement = document.createElement('p');
//     newElement.textContent = "this is para " + i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// let element = document.querySelector('#wrapper');
// element.addEventListener('click', function(event)
// {
//     console.log('span pr click kia hai ' + event.target.textContent);
// });

// here problem is that when we are clicking on para that is the parent tag of the span then both the data of span and para tag is printed and when we are clicking on the span tag then only the data of the span tag is printed.

// now we will filter out the event on which we want to add event listner as here we are going to modify this in such a way that when we click on the span then only the data of the span will be printed and nothing will be printed when we will click on the para tag.

// let element = document.querySelector('#wrapper');
// element.addEventListener('click', function(event)
// {
//     if(event.target.nodeName === 'SPAN'){
//         console.log('span pr click kia hai ' + event.target.textContent);
//     }
// });

// here SPAN is the default name of the span tag by the js


// we will keep script tag at the end of the body that is the best practice.  so that all html will load before adding the script tag.
// check through DOMContentLoaded -> return if the dom content loaded or not











