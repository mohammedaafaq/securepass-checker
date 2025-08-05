function checkStrength() {
  let password = document.getElementById("password").value;
  let strengthText = document.getElementById("strength");

  if (password.length === 0) {
    strengthText.textContent = "Strength: ";
    strengthText.style.color = "black";
  }
  else if (password.length < 5) {
    strengthText.textContent = "Strength: Weak";
    strengthText.style.color = "red";
  }
  else if (password.length < 8) {
    strengthText.textContent = "Strength: Medium";
    strengthText.style.color = "orange";
  }
  else {
    // If password has a number, a capital letter, and a special character
    let strongPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

    if (strongPattern.test(password)) {
      strengthText.textContent = "Strength: Strong";
      strengthText.style.color = "green";
    } else {
      strengthText.textContent = "(Add uppercase, number, and symbol)";
      strengthText.style.color = "blue";
    }
  }
}
