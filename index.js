//input 

// 1. EASY WAY = window promt
// 2. PROFESSIONAL WAY = HTML textbox


// window promt

// let username;

// username = window.prompt("Enter your username?");

// console.log("Hello " + username);

// HTML textbox
let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("welcomeMessage").textContent = `Hello ${username}`;
}
