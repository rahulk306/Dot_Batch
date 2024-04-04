const countValue = document.querySelector('#counter');
// countValue ek element/variable hai uske andr wle text ko value ke andr le rhe hai

const increment = () => 
{   // get the value from UI
    let value = parseInt(countValue.innerText);
    // update the value
    value = value + 1;
    // set the value onto UI
    countValue.innerText = value;
};

const decrement = () =>
{
    // get the value from the UI
    let value = parseInt(countValue.innerText);
    // update the value
    value = value - 1;
    // set the value onto UI
    countValue.innerText = value;
}