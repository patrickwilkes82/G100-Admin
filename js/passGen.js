// DOM elements
const resultEl = document.getElementById('pwResult');
const lengthEl = document.getElementById('pwLength');
const lowercaseEl = document.getElementById('pwLowercase');
const uppercaseEl = document.getElementById('pwUppercase');
const numberEl = document.getElementById('pwNumber');
const specialEl = document.getElementById('pwSpecial');
const submitEl = document.getElementById('pwSubmit');
const clipboardEl = document.getElementById('pwClipboard');

const randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    special: getRandomSpecial
};

// Click Generate Password Button Event
submitEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const hasLower = lowercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSpecial = specialEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSpecial, length);

});

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if (!password) {return;}

    textarea.value= password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password Copied');
});

// Function to generate password
function generatePassword(lower, upper, number, special, length) {
    //1. Init pw var
    //2. Filter out unchecked types
    //3. Loop over length generator function for each type
    //4. Add final pw to the pw var and return

    let generatedPassword = '';

    const typesCount = lower + upper + number + special;

    //Filter out unchecked types through array
    const typesArr = [{lower}, {upper}, {number}, {special}].filter
        (
        item  => Object.values(item)[0]
        );
    
    if(typesCount === 0) {
        return '';
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}

// Functions to get appropriate characters
function getRandomLower() {return String.fromCharCode(Math.floor(Math.random() * 26) + 97);} //97 is start charcode for lowercase
function getRandomUpper() {return String.fromCharCode(Math.floor(Math.random() * 26) + 65);} //65 is start charcode for uppercase
function getRandomNumber() {return String.fromCharCode(Math.floor(Math.random() * 10) + 48);} //48 is start charcode for number
function getRandomSpecial() {const specials = '!@#$%^&*{}[]=-<>/'; return specials[Math.floor(Math.random() * specials.length)];} //Random special character from array of characters

 

