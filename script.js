const clock = document.querySelector(".clock");
const textInput = document.querySelector("#textInput");
const renameMenuButton = document.querySelector("#renameMenu");
const renameMenu = document.querySelector("#renameMenuBack");

const sBtn1 = document.querySelector("#sBtn1");
const sBtn2 = document.querySelector("#sBtn2");
const sBtn3 = document.querySelector("#sBtn3");
const sBtn4 = document.querySelector("#sBtn4");

const tagOne = document.querySelector("#sBtn1InMenu");
const tagTwo = document.querySelector("#sBtn2InMenu");
const tagThree = document.querySelector("#sBtn3InMenu");
const tagFour = document.querySelector("#sBtn4InMenu");
const tagFive = document.querySelector("#sBtn5InMenu");
const tagSix = document.querySelector("#sBtn6InMenu");

renameMenuButton.addEventListener("click", function () {
  renameMenu.classList.toggle("renameMenuBackOpen");
});

const renameOne = document.querySelector(".renameTagOne");
renameOne.addEventListener("click", function () {
  oneName = prompt("변경할 태그 이름(영어)을 입력해주세요.");
  renameSave();
});
const renameTwo = document.querySelector(".renameTagTwo");
renameTwo.addEventListener("click", function () {
  twoName = prompt("변경할 태그 이름(영어)을 입력해주세요");
  renameSave();
});
const renameThree = document.querySelector(".renameTagThree");
renameThree.addEventListener("click", function () {
  threeName = prompt("변경할 태그 이름(영어)을 입력해주세요");
  renameSave();
});
const renameFour = document.querySelector(".renameTagFour");
renameFour.addEventListener("click", function () {
  fourName = prompt("변경할 태그 이름(영어)을 입력해주세요");
  renameSave();
});

let oneName = "one",
  twoName = "two",
  threeName = "three",
  fourName = "four";

renameGet();
renameSet();

function renameSave() {
  oneName.replace('"', "");
  twoName.replace('"', "");
  threeName.replace('"', "");
  fourName.replace('"', "");
  localStorage.setItem("oneTagName", JSON.stringify(oneName));
  localStorage.setItem("twoTagName", JSON.stringify(twoName));
  localStorage.setItem("threeTagName", JSON.stringify(threeName));
  localStorage.setItem("fourTagName", JSON.stringify(fourName));
  renameSet();
}
function renameGet() {
  oneName = localStorage.getItem("oneTagName");
  twoName = localStorage.getItem("twoTagName");
  threeName = localStorage.getItem("threeTagName");
  fourName = localStorage.getItem("fourTagName");
  oneName.replace('"', "");
  twoName.replace('"', "");
  threeName.replace('"', "");
  fourName.replace('"', "");

  if (oneName === null || oneName === undefined) {
    renameSave();
  }
}
function renameSet() {
  renameOne.textContent = oneName;
  renameTwo.textContent = twoName;
  renameThree.textContent = threeName;
  renameFour.textContent = fourName;

  sBtn1.textContent = oneName;
  sBtn2.textContent = twoName;
  sBtn3.textContent = threeName;
  sBtn4.textContent = fourName;

  tagOne.textContent = oneName;
  tagTwo.textContent = twoName;
  tagThree.textContent = threeName;
  tagFour.textContent = fourName;
}

function toDoSave() {
  localStorage.setItem("toDos", JSON.stringify(toDoArray));
}

function toDoParent(listValue, listTag, random) {
  this.listValue = listValue;
  this.listTag = listTag;
  this.random = random;
}

const getToDo = localStorage.getItem("toDos");
const savedToDo = JSON.parse(getToDo);

let toDoArray = [];

function addNoneList() {
  if (textInput.value === "") {
    alert("내용을 입력해주세요");
  } else {
    let inList = document.createElement("li");
    let delBtn = document.createElement("button");
    inList.innerHTML = textInput.value;
    inList.classList.add("fiveList");
    inList.classList.add("makeLi");
    inList.addEventListener("click", success);
    inList.classList.add("invisible");
    if (selectTag === "") {
      inList.classList.remove("invisible");
    }
    result.appendChild(inList);
    inList.appendChild(delBtn);
    delBtn.innerHTML = "X";
    delBtn.classList.add("delBtn");
    delBtn.addEventListener("click", delList);
    let toDO = new toDoParent(textInput.value, "fiveList");
    toDoArray.push(toDO);
    toDoSave();
    textInput.value = "";
    setTimeout(() => inList.classList.remove("makeLi"), 0);
    setTimeout(() => inList.classList.add("liScroll"), 300);
  }
}

function addAllList() {
  if (textInput.value === "") {
    alert("내용을 입력해주세요");
  } else {
    let inList = document.createElement("li");
    let delBtn = document.createElement("button");
    inList.innerHTML = textInput.value;
    inList.addEventListener("click", success);
    inList.classList.add("sixList");
    inList.classList.add("makeLi");
    result.appendChild(inList);
    inList.appendChild(delBtn);
    delBtn.innerHTML = "X";
    delBtn.classList.add("delBtn");
    let toDO = new toDoParent(textInput.value, "sixList");
    toDoArray.push(toDO);
    toDoSave();
    delBtn.addEventListener("click", delList);
    textInput.value = "";
    setTimeout(() => inList.classList.remove("makeLi"), 0);
    setTimeout(() => inList.classList.add("liScroll"), 300);
  }
}

function clockData() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const seconds = time.getSeconds();
  clock.innerHTML = `${hour}시:${minute}분:${seconds}초`;
}

setInterval(clockData, 1000);

const plusButton = document.querySelector("#plusButton");
let result = document.querySelector("#List");

function addList() {
  if (textInput.value === "") {
    alert("내용을 입력해주세요");
  } else {
    let inList = document.createElement("li");
    let delBtn = document.createElement("button");
    inList.innerHTML = textInput.value;
    inList.classList.add(nowTag);
    inList.classList.add("invisible");
    inList.classList.add("makeLi");
    if (nowTag === selectTag || selectTag === "") {
      inList.classList.remove("invisible");
    }
    inList.addEventListener("click", success);
    result.appendChild(inList);
    inList.appendChild(delBtn);
    delBtn.innerHTML = "X";
    delBtn.classList.add("delBtn");
    delBtn.setAttribute("id", Date.now());
    let toDO = new toDoParent(textInput.value, nowTag);
    toDoArray.push(toDO);
    toDoSave();
    delBtn.addEventListener("click", delList);
    textInput.value = "";
    setTimeout(() => inList.classList.remove("makeLi"), 0);
    setTimeout(() => inList.classList.add("liScroll"), 300);
  }
}

function getChildElementIndex(element) {
  const parent = element.parentNode;
  const children = parent.children;

  return Array.from(children).indexOf(element);
}

plusButton.addEventListener("click", function () {
  if (nowTag === "fiveList") {
    addNoneList();
  } else if (nowTag === "sixList") {
    addAllList();
  } else {
    addList();
  }
});
textInput.addEventListener("keypress", function () {
  if (window.event.keyCode == 13) {
    if (nowTag === "fiveList") {
      addNoneList();
    } else if (nowTag === "sixList") {
      addAllList();
    } else {
      addList();
    }
  }
});

function plusList() {
  if (nowTag === "fiveList") {
    addNoneList();
  } else if (nowTag === "sixList") {
    addAllList();
  } else {
    addList();
  }
}

function success(e) {
  let succesOne = e.target;
  succesOne.classList.toggle("success");
}

const selectButton = document.querySelector("#selectButton");
const selectMenu = document.querySelector("#selectMenu");

selectButton.addEventListener("click", tagSelect);

function tagSelect() {
  if (selectButton.textContent === "<") {
    selectButton.innerHTML = ">";
    selectButton.classList.remove("open");
    selectMenu.classList.add("selectMenu-close");
    selectMenu.classList.remove("selectMenu");
  } else {
    selectButton.innerHTML = "<";
    selectButton.classList.add("open");
    selectMenu.classList.add("selectMenu");
    selectMenu.classList.remove("selectMenu-close");
  }
}

function delList(e) {
  let removeOne = e.target.parentElement;
  const targetElement = removeOne;
  const index = getChildElementIndex(targetElement);
  toDoArray.splice(index, 1);
  toDoSave();
  removeOne.classList.add("makeLi");
  removeOne.classList.remove("liScroll");
  setTimeout(() => removeOne.remove(), 300);
}

let selectTag = "";

const selected = "selected";

function invisible1() {
  const p = document.querySelectorAll(".oneList");
  p.forEach((p) => {
    p.classList.add("invisible");
  });
}

function invisible2() {
  const p = document.querySelectorAll(".twoList");
  p.forEach((p) => {
    p.classList.add("invisible");
  });
}

function invisible3() {
  const p = document.querySelectorAll(".threeList");
  p.forEach((p) => {
    p.classList.add("invisible");
  });
}

function invisible4() {
  const p = document.querySelectorAll(".fourList");
  p.forEach((p) => {
    p.classList.add("invisible");
  });
}

function invisible5() {
  const p = document.querySelectorAll(".fiveList");
  p.forEach((p) => {
    p.classList.add("invisible");
  });
}

function noneSelect() {
  if (
    !sBtn1.classList.contains(selected) &&
    !sBtn2.classList.contains(selected) &&
    !sBtn3.classList.contains(selected) &&
    !sBtn4.classList.contains(selected)
  ) {
    const p = document.querySelectorAll("li");
    selectTag = "";
    p.forEach((p) => {
      p.classList.remove("invisible");
    });
  }
}

sBtn1.addEventListener("click", function () {
  selectTag = "oneList";
  clearSelect(1);
  sBtn1.classList.toggle(selected);
  invisible2();
  invisible3();
  invisible4();
  invisible5();
  noneSelect();
});

sBtn2.addEventListener("click", function () {
  selectTag = "twoList";
  clearSelect(2);
  sBtn2.classList.toggle(selected);
  invisible1();
  invisible3();
  invisible4();
  invisible5();
  noneSelect();
});

sBtn3.addEventListener("click", function () {
  selectTag = "threeList";
  clearSelect(3);
  sBtn3.classList.toggle(selected);
  invisible1();
  invisible2();
  invisible4();
  invisible5();
  noneSelect();
});

sBtn4.addEventListener("click", function () {
  selectTag = "fourList";
  clearSelect(4);
  sBtn4.classList.toggle(selected);
  invisible1();
  invisible2();
  invisible3();
  invisible5();
  noneSelect();
});

function clearSelect(a) {
  const p = document.querySelectorAll("li");
  p.forEach((p) => {
    p.classList.remove("invisible");
  });
  if (a === 1) {
    sBtn2.classList.remove(selected);
    sBtn3.classList.remove(selected);
    sBtn4.classList.remove(selected);
  } else if (a === 2) {
    sBtn1.classList.remove(selected);
    sBtn3.classList.remove(selected);
    sBtn4.classList.remove(selected);
  } else if (a === 3) {
    sBtn1.classList.remove(selected);
    sBtn2.classList.remove(selected);
    sBtn4.classList.remove(selected);
  } else {
    sBtn1.classList.remove(selected);
    sBtn2.classList.remove(selected);
    sBtn3.classList.remove(selected);
  }
}

let nowTag = "fiveList";

tagOne.addEventListener("click", function () {
  chooseTag(1);
  nowTag = "oneList";
});

tagTwo.addEventListener("click", function () {
  chooseTag(2);
  nowTag = "twoList";
});

tagThree.addEventListener("click", function () {
  chooseTag(3);
  nowTag = "threeList";
});

tagFour.addEventListener("click", function () {
  chooseTag(4);
  nowTag = "fourList";
});

tagFive.addEventListener("click", function () {
  chooseTag(5);
  nowTag = "fiveList";
});

tagSix.addEventListener("click", function () {
  chooseTag(6);
  nowTag = "sixList";
});

function chooseTag(b) {
  tagOne.classList.remove("tagSelected");
  tagTwo.classList.remove("tagSelected");
  tagThree.classList.remove("tagSelected");
  tagFour.classList.remove("tagSelected");
  tagFive.classList.remove("tagSelected");
  tagSix.classList.remove("tagSelected");

  if (b === 1) {
    tagOne.classList.add("tagSelected");
  } else if (b === 2) {
    tagTwo.classList.add("tagSelected");
  } else if (b === 3) {
    tagThree.classList.add("tagSelected");
  } else if (b === 4) {
    tagFour.classList.add("tagSelected");
  } else if (b === 5) {
    tagFive.classList.add("tagSelected");
  } else {
    tagSix.classList.add("tagSelected");
  }
}

const trash = document.querySelector("#inEmote");

trash.addEventListener("click", function () {
  if (confirm("정말 모든 todo를 삭제 하시겠습니까?")) {
    allcrear();
    toDoArray.length = 0;
    toDoSave();
  }
});

function allcrear() {
  const p = document.querySelectorAll("li");
  p.forEach((p) => {
    p.remove();
  });
}

if (savedToDo !== null) {
  for (let i = 0; i < savedToDo.length; i++) {
    let listvalue = savedToDo[i].listValue;
    let tag = savedToDo[i].listTag;

    if (tag === "oneList") {
      console.log("시발 좀 돼라");
      nowTag = "oneList";
      chooseTag(1);
    } else if (tag === "twoList") {
      nowTag = "twoList";
      chooseTag(2);
    } else if (tag === "threeList") {
      nowTag = "threeList";
      chooseTag(3);
    } else if (tag === "fourList") {
      nowTag = "fourList";
      chooseTag(4);
    } else if (tag === "fiveList") {
      nowTag = "fiveList";
      chooseTag(5);
    } else if (tag === "sixList") {
      nowTag = "sixList";
      chooseTag(6);
    }

    textInput.value = listvalue;
    plusList();
  }
}
