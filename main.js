const button_myself = document.querySelector("#button_myself");
const button_labs = document.querySelector("#button_labs");
const labs = document.querySelector(".labs");
const aboutMe = document.querySelector(".aboutMe");

function disabled_information(elem1, elem2) {
  if (elem1.style.display == "block") {
    elem1.style.display = "none";
  } else {
    elem1.style.display = "block";
  }
  if (elem2.style.display == "block") {
    elem2.style.display = "none";
  }
}

button_labs.addEventListener("click", function () {
  disabled_information(labs, aboutMe);
});
button_myself.addEventListener("click", function () {
  disabled_information(aboutMe, labs);
});
