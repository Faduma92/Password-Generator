const characterAmountRange = document.getElementById
('characterAmountRange')
const characterAmountNumber = document.getElementById
('characterAmountNumber')
const includeUppercaseElement = document.getElementById
('includeUpperCase')
const includeNumbersElement = document.getElementById
('includeNumbers')
const includeSymbolsElement = document.getElementById
('includeSymbols')
const form = document.getElementById
('passwordGeneratorForm')
const passwordDisplay = document.getElementById('password')

const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
)

characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

// Prevent page from refreshing, and display generated password in display`

form.addEventListener('submit', e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, 
        includeSymbols)
    passwordDisplay.innerText = password
})

// Generate the password with if statements based on input
 alert('Please include atleast one option.')
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
   let charCodes = LOWERCASE_CHAR_CODES

  
   if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
   if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
   if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
   
    
  
  

   const passwordCharacters = []
   for (let i = 0; i < characterAmount; i++) {
   const character = charCodes[Math.floor(Math.random() * 
    charCodes.length)]
    passwordCharacters.push(String.fromCharCode(character))
   }
   return passwordCharacters.join('')
}

// Generate the arrays

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i<= high; i++) {
        array.push(i)
    }
    return array 
}

//  Slider and Number input are synced

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

// Copy generated password

function myFunction() {
    var copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }
