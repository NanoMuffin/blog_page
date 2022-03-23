var selectedProject = 0

var project1 = document.querySelector(".button8")
var project2 = document.querySelector(".button9")
var project3 = document.querySelector(".button10")

var skill1 =  document.querySelector(".button1")
var skill2 =  document.querySelector(".button2")
var skill3 =  document.querySelector(".button3")
var skill4 =  document.querySelector(".button4")
var skill5 =  document.querySelector(".button5")
var skill6 =  document.querySelector(".button6")

var body_selector = document.querySelector("body")
var textToShrink = document.querySelector(".button_text")


project1.addEventListener("click", choosep1)
project2.addEventListener("click", choosep2)
project3.addEventListener("click", choosep3)
body_selector.addEventListener("load", shrinkText)


function choosep1() {
  selectedProject = 1;
  project1.classList.toggle("button_click");

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
  project2.classList.toggle("button_click");


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
  selectedProject = 3;
  project3.classList.toggle("button_click");


  if (selectedProject == 3) {
    skill1.classList.add("button_click")
    skill2.classList.add("button_click")
    skill3.classList.add("button_click")
    skill4.classList.add("button_click")
    skill5.classList.add("button_click")
    skill6.classList.add("button_click")

    project1.classList.remove("button_click")
    project2.classList.remove("button_click")
  }
};

//function shrinkText(){
  if (body_selector.style.innerWidth == "800px") {
    textToShrink.style.fontSize = "0.6rem";
  }


}
