let num = Math.round(Math.random() * 100);
let input = document.getElementById("input");
let submit = document.getElementById("submit");
let h2 = document.getElementById("h2");
let h3 = document.getElementById("h3");
let chance = 6;

// Initialize game
function initializeGame() {
    h2.innerText = `🎲 Guess the number between 0 and 100! You have ${chance} chances remaining.`;
    h2.className = '';
    h3.innerText = '';
    h3.className = '';
    input.focus();
}

initializeGame();
function checking() {
  chance--;
  
  if (input.value == num) {
    h2.innerText = "🎉 Congratulations! You found the mystery number!";
    h2.className = 'success';
    h3.innerText = "🔄 Click here to play again";
    submit.disabled = true;
  } else if (input.value < num) {
    h2.innerText = `📈 Too low! The number is higher than ${input.value}. ${chance} ${chance === 1 ? 'chance' : 'chances'} left.`;
    h2.className = '';
  } else if (input.value > num) {
    h2.innerText = `📉 Too high! The number is lower than ${input.value}. ${chance} ${chance === 1 ? 'chance' : 'chances'} left.`;
    h2.className = '';
  }
}

function sub() {
  if (input.value !== "" && !submit.disabled) {
    const guess = parseInt(input.value);
    
    // Validate input range
    if (guess < 0 || guess > 100) {
      h2.innerText = "⚠️ Please enter a number between 0 and 100!";
      h2.className = 'error';
      input.focus();
      return;
    }
    
    if (chance == 1 && guess != num) {
      h2.innerText = `💔 Game Over! The mystery number was ${num}. Better luck next time!`;
      h2.className = 'error';
      h3.innerText = "🔄 Click here to try again";
      submit.disabled = true;
    } else if (chance > 0) {
      checking();
    }
    
    input.value = "";
    input.focus();
  }
}
// Reset game when restart button is clicked
h3.addEventListener("click", () => {
  if (h3.innerText.includes("Click here")) {
    chance = 6;
    num = Math.round(Math.random() * 100);
    submit.disabled = false;
    input.value = "";
    initializeGame();
  }
});

// Allow Enter key to submit guess
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sub();
  }
});

// Add input validation and styling
input.addEventListener("input", () => {
  const value = parseInt(input.value);
  if (value < 0 || value > 100) {
    input.style.borderColor = "#e53e3e";
  } else {
    input.style.borderColor = "#e2e8f0";
  }
});
