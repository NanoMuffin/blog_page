// var selectedProject = 0
var buttonsArray = document.querySelectorAll(".button_test,button_text");
var textsArray = document.querySelectorAll(".skill_box_descriptiontext");
var techSkillsBlock = document.querySelectorAll(".tech_skills_block")[0];

var skill7 = document.querySelectorAll(".button_text")[6];

var text1 = textsArray[0];
var text2 = textsArray[1];
var text3 = textsArray[2];
var text4 = textsArray[3];
var text5 = textsArray[4];
var text6 = textsArray[5];

const projectSkillsMap = {
  'project1' : ['skill_2','skill4','skill5'],
  'project2' : ['skill1','skill_2','skill4','skill5','skill6'],
  'project3' : ['skill1','skill_2','skill3','skill4','skill5','skill6']
}

const projectBlocksMap = {
  'skill1' : 'block1',
  'skill_2' : 'block2',
  'skill3' : 'block3',
  'skill4' : 'block4',
  'skill5' : 'block5',
  'skill6' : 'block6',
}
var allBtns = Object.values(projectSkillsMap)

function skilid(param) {
  param.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
};


function chooseProject(key) {
  // removing accents from other groups
  allBtns.map((i) => i.forEach(btn => document.getElementById(btn).classList.remove('button_click')))
  console.log(Object.values(projectSkillsMap))
  Object.keys(projectSkillsMap).map((i) => { if (i !== key) {
  document.getElementById(i).classList.remove('button_projects_clicks')}})
  // adding accet to chosen group
  projectSkillsMap[key].forEach( i => document.getElementById(i).classList.add('button_click'))
}

Object.keys(projectSkillsMap).map((i) => {  
  var switcher = document.getElementById(i)
  console.log(switcher)
  switcher.addEventListener('click', () => { switcher.classList.add('button_projects_clicks'), chooseProject(i) })
})





var up_btn = document.getElementsByClassName("up_button")[0];

const headDiv = document.querySelectorAll(".head_div")[0]

function onLoad() {
  
  function makeIt() {
  Object.keys(projectSkillsMap).forEach(i => document.getElementById(i).classList.remove('button_projects_clicks'))
  allBtns.map((i) => i.forEach(btn => document.getElementById(btn).classList.remove('button_click')))
  }

  Object.keys(projectBlocksMap).forEach((el) => {
    var skill =  document.getElementById(el)
    var block = document.getElementById(projectBlocksMap[el])
    console.log(skill)
    console.log(block)
    skill.addEventListener('click', () => skilid(block))

  })

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


// skill1.addEventListener("click", () => skilid(skillbox1));
// skill2.addEventListener("click", () => skilid(skillbox2));
// skill3.addEventListener("click", () => skilid(skillbox3));
// skill4.addEventListener("click", () => skilid(skillbox4));
// skill5.addEventListener("click", () => skilid(skillbox5));
// skill6.addEventListener("click", () => skilid(skillbox6));

headDiv.addEventListener("mouseover", () => window.scrollTo({top: 0, behavior: "smooth"}));
up_btn.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));
var techSkilsSection = window.getElementById('tech_skills');
techSkills.addEventListener('click', () => skilid(techSkills));





// function choosep1() {
//   selectedProject = 1;
//   project1.classList.add("button_click");

//   if (selectedProject == 1) {
//       skill2.classList.add("button_click")
//       skill4.classList.add("button_click")
//       skill5.classList.add("button_click")

//       skill1.classList.remove("button_click")
//       skill3.classList.remove("button_click")
//       skill6.classList.remove("button_click")
//       project2.classList.remove("button_click")
//       project3.classList.remove("button_click")}}

// function choosep2() {
//   selectedProject = 2;
//   project2.classList.add("button_click");


//   if (selectedProject == 2) {
//     skill1.classList.add("button_click")
//     skill2.classList.add("button_click")
//     skill4.classList.add("button_click")
//     skill5.classList.add("button_click")
//     skill6.classList.add("button_click")

//     skill3.classList.remove("button_click")
//     project1.classList.remove("button_click")
//     project3.classList.remove("button_click")
//   }
// };

// function choosep3() {
//   selectedProject = 3
//   project3.classList.add("button_click");


//   if (selectedProject == 3) {
//     skill1.classList.add("button_click")
//     skill2.classList.add("button_click")
//     skill3.classList.add("button_click")
//     skill4.classList.add("button_click")
//     skill5.classList.add("button_click")
//     skill6.classList.add("button_click")

//     project1.classList.remove("button_click")
//     project2.classList.remove("button_click")

//     selectedProject = selectedProject + 1
//   } 
// };


var isChrome = !!window.chrome;
var screenWidth = window.innerWidth

if (isChrome === true & screenWidth > 1280) {
  if (screenWidth > 1024){
var header = document.querySelector(".contact_header")
var text1 = document.querySelectorAll(".skill_boxes_heading")[0]
header.style.transform = "translate(-25%)"
text1.style.transform = "translate(-25%)"}
};


function SafariFIx() {
  if (isChrome === false & screenWidth > 1280 ) {
    var icon = document.querySelectorAll(".skill_box_descriptiontext")[0];
    icon.style.fontSize = "16px"
  } else if (isChrome === false & screenWidth < 1280) {
    var icon = document.querySelectorAll(".skill_box_descriptiontext")[0];
    var icon2 = document.querySelectorAll(".skill_box_descriptiontext")[1];
    var icon3 = document.querySelectorAll(".skill_box_descriptiontext")[2];
    var icon4 = document.querySelectorAll(".skill_box_descriptiontext")[3];
    var icon5 = document.querySelectorAll(".skill_box_descriptiontext")[4];
    var icon6 = document.querySelectorAll(".skill_box_descriptiontext")[5];
    icon.style.fontSize = "12px";
    icon2.style.fontSize = "12px";
    icon3.style.fontSize = "12px";
    icon4.style.fontSize = "12px";
    icon5.style.fontSize = "12px";
    icon6.style.fontSize = "12px";
  }
};

// SafariFIx()

if (screenWidth < 900) {
  text1.innerHTML = 'Умею планировать работы: <br> -Выясню, что и как <br> необходимо сделать <br> -Определю последовательность <br>  работ и сроки <br> -Найду исполнителей <br> -Построю дорожную карту <br> -Буду отчитываться  <br> о статусе работ <br>';
  text2.innerHTML = 'Умею работать с командой: <br> -Kanban master <br> (Jira, Trello и тд) <br> -Знаю принципы Эджайл и Скрам <br> -Каждое утро начинаю <br> с созвона с командой <br> -Черный пояс по постановке задач <br> -Владею секретной формулой <br> точной оценки работ <br>';
  text3.innerHTML = 'Умею документировать требования: <br> -Зафиксирую все требования <br> -Набросаю макет <br> и передам дизайнеру <br> -Напишу грамотное ТЗ <br> с учетом всех требований <br> и максимально понятное разработчикам <br>';
  text4.innerHTML = 'Умею рассказывать об обновлениях: <br> -Напишу патч ноут <br> -Запишу и смонтирую <br> обучающее видео <br> для сотрудников компании <br> -Выслушаю и отвечу на похвалы <br> и критику прошедшего релиза <br>';
  text5.innerHTML = 'Умею проводить ручное тестирование: <br> -Знаю как пользоваться <br> Chrome DevTools <br> -Понимаю,что такое http  <br> запросы и чем  ошибка 404 отличается  <br> от ошибки 402 <br>';
  text6.innerHTML = 'Умею анализировать: <br> -Изучаю рынок и конкурентов, <br> определяю сильные <br> стороны продукта <br> -Определяю цели бизнеса <br> и потребности пользователей <br> -Прописываю пользовательские сценарии <br>';
}

const techSkills = ['JavaScript','TypeScript','CSS','PHP','SQL','React','Laravel','Gitlab','Docker','Grafana','Mysql','MongoDB','Redis']
const match = {
  'Frontend' : [1,2,3,6],
  'Backend' : [4,5,7,11,12,13],
  'Devops': [8,9,10]
};
const switchers = ['fr','bc','dev']

function makeAccent(key) {
  // adding accet to chosen group
  Object.keys(match).map((i) => { if (i == key) {
    match[`${i}`].map((el) => document.getElementById(`${el}`).classList.toggle('tech_skills_block_item_accent'))
  }})
  // removing accents from other groups
  Object.keys(match).map((i) => { if (i !== key) {
    match[`${i}`].map((el) => document.getElementById(`${el}`).classList.remove('tech_skills_block_item_accent'))
  }})
  switchers.map((el) => { if (document.getElementById(el).innerHTML !== key) {
    document.getElementById(el).classList.remove('tech_skills_block_item_accent')
  }})
}

// console.log(Object.entries(match))
// makeAccent('Frontend')


  switchers.map((i) => {  
    var switcher = document.getElementById(i)
    switcher.addEventListener('click', () => { switcher.classList.toggle('tech_skills_block_item_accent'), makeAccent(switcher.innerHTML) })
    if (switcher.innerHTML == 'Frontend') { switcher.click()
    }
})
