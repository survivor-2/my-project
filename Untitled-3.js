// DOM Elements
const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy");
const passwordDisplay = document.getElementById("password-display");
const lengthInput = document.getElementById("length");
const includeUppercase = document.getElementById("include-uppercase");
const includeLowercase = document.getElementById("include-lowercase");
const includeNumbers = document.getElementById("include-numbers");
const includeSymbols = document.getElementById("include-symbols");

// Character Sets
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

/* Generate Password */
generateButton.addEventListener("click", () => {
    const length = +lengthInput.value;
    const useUppercase = includeUppercase.checked;
    const useLowercase = includeLowercase.checked;
    const useNumbers = includeNumbers.checked;
    const useSymbols = includeSymbols.checked;

    if (!useUppercase && !useLowercase && !useNumbers && !useSymbols) {
        alert("Please select at least one character type!");
        return;
    }

    passwordDisplay.textContent = generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols);
});

/* Copy Password */
copyButton.addEventListener("click", () => {
    const password = passwordDisplay.textContent;
    if (password && password !== "Your password will appear here") {
        navigator.clipboard.writeText(password).then(() => {
            alert("Password copied to clipboard!");
        });
    } else {
        alert("No password to copy. Generate one first!");
    }
});

/* Generate Password Function */
function generatePassword(length, useUppercase, useLowercase, useNumbers, useSymbols) {
    let characterPool = '';
    if (useUppercase) characterPool += UPPERCASE;
    if (useLowercase) characterPool += LOWERCASE;
    if (useNumbers) characterPool += NUMBERS;
    if (useSymbols) characterPool += SYMBOLS;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
    }
    return password;
}
