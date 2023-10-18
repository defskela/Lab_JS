const button_myself = document.querySelector(".button_myself");
const button_labs = document.querySelector(".button_labs");
const labs = document.querySelector(".labs");
const portfolio = document.querySelector(".portfolio");
const aboutMe = document.querySelector(".aboutMe");

function disabled_myself_information() {
  if (aboutMe.style.display == "block") {
    aboutMe.style.display = "none";
  } else {
    aboutMe.style.display = "block";
  }
  if (labs.style.display == "block") {
    labs.style.display = "none";
  }
}

function disabled_labs_information() {
  if (labs.style.display == "block") {
    labs.style.display = "none";
  } else {
    labs.style.display = "block";
  }
  if (aboutMe.style.display == "block") {
    aboutMe.style.display = "none";
  }
}

button_labs.addEventListener("click", disabled_labs_information);
button_myself.addEventListener("click", disabled_myself_information);
