const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]"); // button 
const copyMsg = document.querySelector("[data-copyMsg]"); // 
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton")
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = '@#$%&';

let password = "";
let passwordLength = 10;
let checkCount = 0;

handleSlider();

// set strength circle color to gray

setIndicator("#ccc");

// set passwordLength
function handleSlider() // UI ko update krega password lenth ke according
{
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    // find kro ki aur kuch kr skte hai ya nhi
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ( (passwordLength - min)*100/(max-min) ) + "% 100%";
}

function setIndicator(color)
{
    indicator.style.backgroundColor = color;
    // button ka color add kr rhe hai iss function se
    // shadow khud se add kr lena baad me
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

function getRndInteger(min, max)
{
    return Math.floor(Math.random() * (max - min) ) + min;
}

function generateRandomNumber()
{
    return getRndInteger(0, 9);
}

function generateLowerCase()
{
    return String.fromCharCode(getRndInteger(97, 123));
}

function generateUpperCase()
{
    return String.fromCharCode(getRndInteger(65, 91));
}

function generateSymbol()
{
    const randNum = getRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength()
{
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;

    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numbersCheck.checked) hasNum = true;
    if(symbolsCheck.checked) hasSym = true;

    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8)
    {
        setIndicator("#0f0");
    }
    else if( (hasLower || hasUpper) && (hasNum || hasSym) && (passwordLength >= 6))
    {
        setIndicator("#ff0");
    }
    else
    {
        setIndicator("#f00");
    }
}

async function copyContent()
{
    try
    {
        await navigator.clipboard.writeText(passwordDisplay.value); // this method returns a promise
        copyMsg.innerText = "copied";
    }
    catch(e)
    {
        copyMsg.innerText = "failed";
    }

    // to make copy wala span visible
    copyMsg.classList.add("active");

    setTimeout( () => 
    {
        copyMsg.classList.remove("active");
    }, 1000);
}

function shufflePassword(array)
{
    // fisher yates method
    for(let i= array.length - 1; i>0; i--)
    {
        const j = Math.floor(Math.random() * (i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

function handleCheckBoxChange()
{
    checkCount = 0;
    allCheckBox.forEach( (Checkbox) => 
    {
        if(Checkbox.checked) 
            checkCount++;
    });

    // special condition
    if(passwordLength < checkCount)
    {
        passwordLength = checkCount;
        console.log(checkCount);
        handleSlider();
    }
}

allCheckBox.forEach( (Checkbox) => 
{
    Checkbox.addEventListener('change', handleCheckBoxChange);
})

inputSlider.addEventListener('input', (e) => 
{
    passwordLength = e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click', () => 
{
    if(passwordDisplay.value)  // if password length greater than 1
     copyContent();
})

// generateBtn.addEventListener('click', ())
generateBtn.addEventListener('click', () => 
{
    // if none of the checkboxes are selected
    if(checkCount == 0)
    {
        password = "";
        passwordDisplay.value = password;
        return;
    } 

    if(passwordLength < checkCount)
    {
        passwordLength = checkCount;
        handleSlider();
    }

    // let's start the journey to find a new password
    console.log("starting the journey");
    // remove old password
    password = "";

    // let's put the stuff mentioned by checkboxes

    // if(uppercaseCheck.checked)
    // {
    //     password += generateUpperCase();
    // }

    // if(lowercaseCheck.checked)
    // {
    //     password += generateLowerCase();
    // }

    // if(numbersCheck.checked)
    // {
    //     password += generateRandomNumber();
    // }

    // if(symbolsCheck.checked)
    // {
    //     password += generateSymbol();
    // }

    let funArr = []; // here we have created a function array to store the functions to call in the array 

    if(uppercaseCheck.checked)
    {
        funArr.push(generateUpperCase);
    }
    if(lowercaseCheck.checked)
    {
        funArr.push(generateLowerCase);
    }
    
    if(numbersCheck.checked)
    {
        funArr.push(generateRandomNumber);
    }

    if(symbolsCheck.checked)
    {
        funArr.push(generateSymbol);
    }

    // compulsary addition -> jo jo function funArr me hai mtlb jo jo checkbox checked hai us type ka ek ek element password me daal dengel pehle phir bacha hua length ko pura kr lenge kisi bhi element se

    for(let i=0; i<funArr.length; i++)
    {
        password += funArr[i]();
    }
    console.log("compulsary addition done");

    // remaining addition
    for(let i=0; i<passwordLength-funArr.length; i++)
    {
        let randIndex = getRndInteger(0, funArr.length);
        console.log("randIndex" + randIndex);
        password += funArr[randIndex]();
    }

    console.log("remaining addition done");
    
    // shuffle the password
    password = shufflePassword(Array.from(password));
    console.log("shuffling done");

    // show password in UI
    passwordDisplay.value = password;
    console.log("UI addition done");

    // calculate strength
    calcStrength();
});