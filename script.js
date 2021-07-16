const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");
const toggleIcon = document.getElementById("toggle-icon");

//check is change on checkbox
toggleSwitch.addEventListener("change", switchTheme);

//dark or light images
function imageMood(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}
function darkMod() {
  nav.style.background = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mood";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imageMood("dark");
}

function lightMod() {
  nav.style.background = "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mood";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  imageMood("light");
}

//run func
function switchTheme(event) {
  if (event.target.checked) {
    //document.documentElement > access root level html ex:<html>
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMod();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMod();
  }
}

//dark or light storage
const currenttheme = localStorage.getItem("theme");
if (currenttheme) {
  if (currenttheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleSwitch.checked = true;
    darkMod();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    toggleSwitch.checked = false;
    lightMod();
  }
}
