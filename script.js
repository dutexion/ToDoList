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
    inList.classList.add();
    inList.addEventListener("click", success);
    textInput.value = "";
    result.appendChild(inList);
    inList.appendChild(delBtn);
    delBtn.innerHTML = "X";
    delBtn.classList.add("delBtn");
    delBtn.addEventListener("click", delList);
  }
}

function p() {
  const p = document.querySelectorAll("li");
  p.forEach((p) => {
    p.classList.add("visible");
  });
}

plusButton.addEventListener("click", addList);

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

const selected = "selected";

sBtn1.addEventListener("click", function () {
  clearSelect(1);
  sBtn1.classList.toggle(selected);
});

sBtn2.addEventListener("click", function () {
  clearSelect(2);
  sBtn2.classList.toggle(selected);
});

sBtn3.addEventListener("click", function () {
  clearSelect(3);
  sBtn3.classList.toggle(selected);
});

sBtn4.addEventListener("click", function () {
  clearSelect(4);
  sBtn4.classList.toggle(selected);
});

function clearSelect(a) {
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
