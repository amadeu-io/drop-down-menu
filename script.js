// toggle class visible, that shows & hides the drop down menu
function toggleDropdownMenu() {
  dropDownMenu.classList.toggle("visible");
}

const button = document.querySelector("button");
const dropDownMenu = document.querySelector(".drop-down-menu");

button.addEventListener("click", toggleDropdownMenu);
