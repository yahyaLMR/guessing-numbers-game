let num = Math.round(Math.random() * 100);
let input = document.getElementById("input");
let submit = document.getElementById("submit");
let h2 = document.getElementById("h2");
let h3 = document.getElementById("h3");
let chance = 6;
h2.innerText = `guess the number between 0 and 100 you have ${chance} chances`;
input.focus();
function cheking() {
  chance--;
  if (input.value == num) {
    h2.innerText = "congrats finally the right number";
    h3.innerText = "Click on Me to play again";
  } else if (input.value < num) {
    h2.innerText =
      "higher than " +
      input.value +
      ` try again you still have ${chance} chances`;
  } else if (input.value > num) {
    h2.innerText =
      "lower than " +
      input.value +
      ` try again you still have ${chance} chances`;
  }
}

function sub() {
  if (input.value != "") {
    if (chance == 1 && input.value != num) {
      h2.innerText = "hh you wasted your chances the number is " + num;
      h3.innerText = "Click on Me to try again :)";
    } else if (chance > 0) {
      cheking();
    }
    input.focus();
    input.value = "";
  }
  input.focus();
}
h3.addEventListener("click", () => {
  chance = 6;
  num = Math.round(Math.random() * 100);
  h2.innerText = `guess the number between 1 and 100 you have ${chance} chances`;
  h3.innerText = "";
});
