const clock = document.querySelector(".clock");

function clockData() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const seconds = time.getSeconds();
  clock.innerHTML = `${hour}시:${minute}분:${seconds}초`;
}

setInterval(clockData, 1000);

const textInput = document.querySelector("#textInput");
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
    if (nowTag === selectTag || selectTag === "") {
      inList.classList.remove("invisible");
    }
    inList.addEventListener("click", success);
    textInput.value = "";
    result.appendChild(inList);
    inList.appendChild(delBtn);
    delBtn.innerHTML = "X";
    delBtn.classList.add("delBtn");
    delBtn.addEventListener("click", delList);
  }
}

plusButton.addEventListener("click", addList);
textInput.addEventListener("keypress", function () {
  if (window.event.keyCode == 13) {
    addList();
  }
});

function success(e) {
  let succesOne = e.target;
  succesOne.classList.toggle("success");
}

const selectButton = document.querySelector("#selectButton");
const selectMenu = document.querySelector("#selectMenu");

selectButton.addEventListener("click", tagSelect);

function tagSelect() {
  if (selectButton.textContent === ">") {
    selectButton.innerHTML = "<";
    selectMenu.classList.add("selectMenu-close");
    selectMenu.classList.remove("selectMenu");
  } else {
    selectButton.innerHTML = ">";
    selectMenu.classList.add("selectMenu");
    selectMenu.classList.remove("selectMenu-close");
  }
}

function delList(e) {
  let removeOne = e.target.parentElement;
  removeOne.remove();
}

const sBtn1 = document.querySelector("#sBtn1");
const sBtn2 = document.querySelector("#sBtn2");
const sBtn3 = document.querySelector("#sBtn3");
const sBtn4 = document.querySelector("#sBtn4");
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

function noneSelect() {
  if (
    !sBtn1.classList.contains(selected) &&
    !sBtn2.classList.contains(selected) &&
    !sBtn3.classList.contains(selected) &&
    !sBtn4.classList.contains(selected)
  ) {
    const p = document.querySelectorAll("li");
    p.forEach((p) => {
      nowTag = "";
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
  noneSelect();
});

sBtn2.addEventListener("click", function () {
  selectTag = "twoList";
  clearSelect(2);
  sBtn2.classList.toggle(selected);
  invisible1();
  invisible3();
  invisible4();
  noneSelect();
});

sBtn3.addEventListener("click", function () {
  selectTag = "threeList";
  clearSelect(3);
  sBtn3.classList.toggle(selected);
  invisible1();
  invisible2();
  invisible4();
  noneSelect();
});

sBtn4.addEventListener("click", function () {
  selectTag = "fourList";
  clearSelect(4);
  sBtn4.classList.toggle(selected);
  invisible1();
  invisible2();
  invisible3();
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

const tagOne = document.querySelector("#sBtn1InMenu");
const tagTwo = document.querySelector("#sBtn2InMenu");
const tagThree = document.querySelector("#sBtn3InMenu");
const tagFour = document.querySelector("#sBtn4InMenu");

let nowTag = "oneList";

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

function chooseTag(b) {
  tagOne.classList.remove("tagSelected");
  tagTwo.classList.remove("tagSelected");
  tagThree.classList.remove("tagSelected");
  tagFour.classList.remove("tagSelected");

  if (b === 1) {
    tagOne.classList.add("tagSelected");
  } else if (b === 2) {
    tagTwo.classList.add("tagSelected");
  } else if (b === 3) {
    tagThree.classList.add("tagSelected");
  } else {
    tagFour.classList.add("tagSelected");
  }
}
