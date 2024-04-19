//Defining Variables

const arrowBtn = document.getElementById("arrowBtn");
const arrowIcon = document.getElementById("arrowIcon");
const navBar = document.getElementById("navBar");

let navState = "open";

//Toggles the navigation
function navToggle() {
  if (navState === "open") {
    //rotate arrow
    arrowIcon.style.transform = "rotate(90deg)";

    //collapse navigation
    navBar.style.left = "-4rem";

    //change navigation state variable
    navState = "closed";
  } else {
    //rotate arrow
    arrowIcon.style.transform = "rotate(-90deg)";

    //open navigation
    navBar.style.left = "0";

    //change navigation state variable
    navState = "open";
  }
}

function autoHideNav() {
  if (navState === "open") {
    //rotate arrow
    arrowIcon.style.transform = "rotate(90deg)";
    //collapse navigation
    navBar.style.left = "-4rem";

    //change navigation state
    navState = "closed";
  } else {
    return;
  }
}

arrowBtn.addEventListener("click", navToggle);
window. addEventListener("scroll", autoHideNav);