const passwordBox = document.getElementById("password");
const length =12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "01234567890";
const symbol ="!@#$%^&*()_+=-{[]}<>?|,.";

const allChars =upperCase+lowerCase+number+symbol;

function createPassword(){
    let password="";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length>password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;

    // Save password
    localStorage.setItem("savedPassword", password);
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

window.onload = function(){
    const savedPassword = localStorage.getItem("savedPassword");

    if(savedPassword){
        passwordBox.value = savedPassword;
    }
}