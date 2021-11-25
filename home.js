const NUMBERS = "0123456789";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const SYMBOLS = "!@#$%^&*()_+";

const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("save");


const pwLength = document.getElementById("length");
const pwSymbols = document.getElementById("Symbols");
const pwNumber = document.getElementById("Numbers");
const pwLower = document.getElementById("Lower");
const pwUpper = document.getElementById("Upper");

const password = document.getElementById("password");

function addCell() {
    const finalResult = [];
    const passwordLen = pwLength.value;
    for (let i=0; i < passwordLen; i++) {
        let result = [];
        if(pwSymbols.checked === true) result.push(SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]);
        if(pwLower.checked === true) result.push(LOWERCASE[Math.floor(Math.random() * LOWERCASE.length)]); 
        if(pwUpper.checked === true) result.push(UPPERCASE[Math.floor(Math.random() * UPPERCASE.length)]);
        if(pwNumber.checked === true) result.push(NUMBERS[Math.floor(Math.random() * NUMBERS.length)]);
        finalResult.push(result[Math.floor(Math.random() * result.length)]);
    }
    return finalResult.join("");
}

copyBtn.addEventListener("click",() => {
    const textarea = document.createElement("textarea");
    textarea.value = password.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
})

generateBtn.addEventListener("click", () => {
    if ( addCell().length === 0) {
        password.textContent = ""
        alert("Select atleast one type of characters.");
    }
    else password.textContent = addCell();
})