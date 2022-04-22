var selectedProject = 0
var buttonsArray = document.querySelectorAll(".button_test,button_text");
var textsArray = document.querySelectorAll(".skill_box_descriptiontext")

var project1 = buttonsArray[6]
var project2 = buttonsArray[7]
var project3 = buttonsArray[8]

var skill1 =  buttonsArray[0]
var skill2 =  buttonsArray[1]
var skill3 =  buttonsArray[2]
var skill4 =  buttonsArray[3]
var skill5 =  buttonsArray[4]
var skill6 =  buttonsArray[5]

var text1 = textsArray[0];
var text2 = textsArray[1];
var text3 = textsArray[2];
var text4 = textsArray[3];
var text5 = textsArray[4];
var text6 = textsArray[5];

function onLoad() {
  
  function makeIt() {
  skill1.classList.toggle("button_click")
  skill2.classList.toggle("button_click")
  skill3.classList.toggle("button_click")
  skill4.classList.toggle("button_click")
  skill5.classList.toggle("button_click")
  skill6.classList.toggle("button_click")
  project1.classList.toggle("button_click")
  project2.classList.toggle("button_click")
  project3.classList.toggle("button_click")}

  setTimeout(() => makeIt(), 2000);
}

onLoad();


var body_selector = document.querySelector("body")
var textToShrink = document.querySelector(".button_text")
var skillbox1 = document.getElementsByClassName("skill_boxes_heading")[0];
var skillbox2 = document.getElementsByClassName("skill_boxes_heading")[1];
var skillbox3 = document.getElementsByClassName("skill_boxes_heading")[2];
var skillbox4 = document.getElementsByClassName("skill_boxes_heading")[3];
var skillbox5 = document.getElementsByClassName("skill_boxes_heading")[4];
var skillbox6 = document.getElementsByClassName("skill_boxes_heading")[5];


function skilid(param) {
  param.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
};



skill1.addEventListener("click", () => skilid(skillbox1));
skill2.addEventListener("click", () => skilid(skillbox2));
skill3.addEventListener("click", () => skilid(skillbox3));
skill4.addEventListener("click", () => skilid(skillbox4));
skill5.addEventListener("click", () => skilid(skillbox5));
skill6.addEventListener("click", () => skilid(skillbox6));

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
var screenWidth = window.innerWidth

if (isChrome === true & screenWidth > 1024) {
  if (screenWidth > 1024){
var header = document.querySelector(".contact_header")
header.style.transform = "translate(-25%)"}
};

if (screenWidth < 900) {
  text1.innerHTML = 'Умею планировать работы: <br> -Выясню, что и как <br> необходимо сделать <br> -Определю последовательность <br>  работ и сроки <br> -Найду исполнителей <br> -Построю дорожную карту <br> -Буду отчитываться  <br> о статусе работ <br>';
  text2.innerHTML = 'Умею работать с командой: <br> -Kanban master <br> (Jira, Trello и тд) <br> -Знаю принципы Эджайл и Скрам <br> -Каждое утро начинаю <br> с созвона с командой <br> -Черный пояс по постановке задач <br> -Владею секретной формулой <br> точной оценки работ <br>';
  text3.innerHTML = 'Умею документировать требования: <br> -Зафиксирую все требования <br> -Набросаю макет <br> и передам дизайнеру <br> -Напишу грамотное ТЗ <br> с учетом всех требований <br> и максимально понятное разработчикам <br>';
  text4.innerHTML = 'Умею рассказывать об обновлениях: <br> -Напишу патч ноут <br> -Запишу и смонтирую <br> обучающее видео <br> для сотрудников компании <br> -Выслушаю и отвечу на похвалы <br> и критику прошедшего релиза <br>';
  text5.innerHTML = 'Умею проводить ручное тестирование: <br> -Знаю как пользоваться <br> Chrome DevTools <br> -Понимаю,что такое http  <br> запросы и чем  ошибка 404 отличается  <br> от ошибки 402 <br>';
  text6.innerHTML = 'Умею анализировать: <br> -Изучаю рынок и конкурентов, <br> определяю сильные <br> стороны продукта <br> -Определяю цели бизнеса <br> и потребности пользователей <br> -Прописываю пользовательские сценарии <br>';
}