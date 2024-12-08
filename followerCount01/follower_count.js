let count = 0;

function increaseCount() {
  count++;
  displayCount();
  checkCountValue();
}

function displayCount() {
  document.getElementById(`countDisplay`).innerHTML = count;
}

function checkCountValue() {
  if (count == 10) {
    alert("Your Instagram post gained 10 follewers! Congratulations!");
  } else if (count == 20) {
    alert("Your Instagram post gained 20 follewers! Keep it up!");
  }
}

function resetCount() {
  count = 0;
  displayCount();
  alert("The count has been reset.");
}
