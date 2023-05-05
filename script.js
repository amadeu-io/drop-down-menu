// toggle active classes on meny & button, that shows & hides the drop down menu
// and styles the button
function toggleDropdownMenu() {
  // toggle active classes
  dropDownMenu.classList.toggle("active-menu");
  button.classList.toggle("active-button");

  // toggle menu svg icon
  dropDownButtonIcon.innerHTML = active ? expandLess : expandMore;
  active = !active;
}

const button = document.querySelector("button");
const dropDownMenu = document.querySelector(".drop-down-menu");
const dropDownButtonIcon = document.querySelector(".drop-down-button-icon");
const expandMore = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="var(--slate-400)">
  <path d="M479.889 713q-8.889 0-17.339-3.545Q454.1 705.909 449 699L250 502q-12-13.25-11.5-32.125T251 437.5q15-14.5 
  33-13t31 13.5l165 165 166-165q12.5-13 31.75-13.5T710 438.429q14 13.428 13 32.5Q722 490 709 502L512 699q-6.167 
  6.909-14.694 10.455Q488.778 713 479.889 713Z"/></svg>`; // has added gray fill color
const expandLess = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="var(--blue-300)">
<path d="M251 699q-13-13-13.5-32t13.5-32l198-198q5-5 13.5-9t17.5-4q9 0 17.5 4t14.5 9l198 197q13 14 13 32.5T710 
698q-14 13-33 13t-32-13L480 533 315 700q-13 13-31.5 12.5T251 699Z"/></svg>`; // has added blue fill color
let active = true;

// program starts here

toggleDropdownMenu();
button.addEventListener("click", toggleDropdownMenu);
