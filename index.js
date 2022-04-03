var selectedProject = 0
var buttonsArray = document.querySelectorAll(".button_test,button_text");

var project1 = buttonsArray[6]
var project2 = buttonsArray[7]
var project3 = buttonsArray[8]

var skill1 =  buttonsArray[0]
var skill2 =  buttonsArray[1]
var skill3 =  buttonsArray[2]
var skill4 =  buttonsArray[3]
var skill5 =  buttonsArray[4]
var skill6 =  buttonsArray[5]

var body_selector = document.querySelector("body")
var textToShrink = document.querySelector(".button_text")


project1.addEventListener("click", choosep1)
project2.addEventListener("click", choosep2)
project3.addEventListener("click", choosep3)


function choosep1() {
  selectedProject = 1;
  project1.classList.add("button_click");

  if (selectedProject == 1) {
      skill2.classList.add("button_click")
      skill4.classList.add("button_click")
      skill5.classList.add("button_click")

      skill1.classList.remove("button_click")
      skill3.classList.remove("button_click")
      skill6.classList.remove("button_click")
      project2.classList.remove("button_click")
      project3.classList.remove("button_click")}}

function choosep2() {
  selectedProject = 2;
  project2.classList.add("button_click");


  if (selectedProject == 2) {
    skill1.classList.add("button_click")
    skill2.classList.add("button_click")
    skill4.classList.add("button_click")
    skill5.classList.add("button_click")
    skill6.classList.add("button_click")

    skill3.classList.remove("button_click")
    project1.classList.remove("button_click")
    project3.classList.remove("button_click")
  }
};

function choosep3() {
  selectedProject = 3
  project3.classList.add("button_click");


  if (selectedProject == 3) {
    skill1.classList.add("button_click")
    skill2.classList.add("button_click")
    skill3.classList.add("button_click")
    skill4.classList.add("button_click")
    skill5.classList.add("button_click")
    skill6.classList.add("button_click")

    project1.classList.remove("button_click")
    project2.classList.remove("button_click")

    selectedProject = selectedProject + 1
  } 
};

var isChrome = !!window.chrome;

if (isChrome === true) {
var header = document.querySelector(".contact_header")
header.style.transform = "translate(-25%)";
};