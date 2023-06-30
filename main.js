// This function generates a random number and displays it on the page
function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('random-number').textContent = randomNumber;
}

// This event listener triggers the generateRandomNumber function when the button is clicked
document.getElementById('generate-btn').addEventListener('click', generateRandomNumber);
