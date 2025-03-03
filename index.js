const lowerCaseInput = document.getElementById("lowerCaseInput");
const upperCaseInput = document.getElementById("upperCaseInput");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generate = document.getElementById("generate");
let generatedPassword = document.getElementById("generatedPassword")
let passwordLengthInput = document.getElementById("passwordLengthInput")


function generatePassword(){
    const lowercase = "abcdefghijglmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "123456789";
    const symbols = "!#$%&'*,-./:;<=>?@/^_|~";
    

    generate.onclick = function(){

        let chars = ""
        let password =""

       passwordLength  = passwordLengthInput.value

        if(lowerCase.checked){
            chars = chars + lowercase;
        }
        else{
            chars = chars;
        }
        if(upperCase.checked){
            chars = chars + uppercase;
        }
        else{
            chars = chars;
        }
        if(number.checked){
            chars = chars + numbers;
        }
        else{
            chars = chars;
        }
        if(symbol.checked){
            chars = chars + symbols;
        }
        else{
            chars = chars;
        }
        for(i = 0; i < passwordLength; i++){
            let randomIndex = Math.floor(Math.random() * chars.length);
            randomChar = chars[randomIndex]
            password = password + randomChar
        }
        generatedPassword.textContent = `GeneratedPassword: ${password}`
        }
    }

    generatePassword()
