

// Capture user input and make decisions
document.getElementById('checkAgeBtn').addEventListener('click', () => {
    const age = parseInt(document.getElementById('userAge').value);
    let message = "";

    if (isNaN(age)) {
        message = "Please enter a valid number.";
    } else if (age >= 18) {
        message = "You are an adult!";
    } else {
        message = "You are still a minor!";
    }

    document.getElementById('ageResult').textContent = message;
});


// Function 1: Greet user
function getGreeting() {
    const hours = new Date().getHours();
    if (hours < 12) {
        return "Good morning!";
    } else if (hours < 18) {
        return "Good afternoon!";
    } else {
        return "Good evening!";
    }
}

// Function 2: Calculate total price (example reusable function)
function calculateTotal(price, quantity) {
    return price * quantity;
}

// Attach greeting function to a button
document.getElementById('greetBtn').addEventListener('click', () => {
    document.getElementById('greeting').textContent = getGreeting();
});

// Example usage of calculateTotal
console.log("Total price:", calculateTotal(100, 3)); // Logs 300



// Loop example 1: For loop
document.getElementById('showNumbersBtn').addEventListener('click', () => {
    const list = document.getElementById('numberList');
    list.innerHTML = ""; // Clear previous list

    for (let i = 1; i <= 5; i++) {
        const li = document.createElement('li');
        li.textContent = `Number ${i}`;
        list.appendChild(li);
    }
});

// Loop example 2: While loop
let countdown = 5;
while (countdown > 0) {
    console.log("Countdown:", countdown);
    countdown--;
}



// 1. Change theme
document.getElementById('toggleThemeBtn').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// 2. Change text dynamically
document.getElementById('toggleThemeBtn').addEventListener('click', () => {
    const msg = document.getElementById('domMessage');
    msg.textContent = document.body.classList.contains('dark-mode')
        ? "Dark mode is ON!"
        : "Light mode is ON!";
});

// 3. Create a new element dynamically
const newNote = document.createElement('p');
newNote.textContent = "This note was added using JavaScript!";
document.body.appendChild(newNote);
