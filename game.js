var randomNumber = Math.round(Math.random() * 100);
var submitButton = document.getElementById("submit");
var message = document.getElementById("message");
var live = document.getElementById("lives");
var msg;
var lives = 10;
console.log(randomNumber);

submitButton.onclick = () => {
    var input = document.getElementById("input-number").value;
    lives--;
    if (lives == 0) {
        location.href = "./lose.html";
    }
    if (input == randomNumber) {
        location.href = "./win.html";
    } 
    else if (input > randomNumber) {
        msg = "Oops! Your guess is too high!";
    } else if (input < randomNumber) {
        msg = "Oops! Your guess is too low!";
    }

    message.style.display = "inherit";
    message.innerHTML = msg;
    live.innerHTML = "You have " + lives +" lives remaining!";
};