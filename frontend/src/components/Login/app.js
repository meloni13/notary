const checkBox = document.querySelector("input[type=checkbox]");
const existingUser = document.querySelector(".existingUser");
const newUser = document.querySelector(".newUser");

console.log(checkBox);

checkBox.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    //for checked, existing user ko hide karege
    existingUser.classList.add(".checked");
    newUser.classList.remove(".checked");
  } else {
    //not checked, new User ko hide karege
    existingUser.classList.remove(".checked");
    newUser.classList.add(".checked");
  }
});
