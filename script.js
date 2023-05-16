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
    alert("입력해주세요");
  } else {
    let inList = document.createElement("li");
    let delBtn = document.createElement("button");
    inList.innerHTML = textInput.value;
    textInput.value = "";
    result.appendChild(inList);
    inList.appendChild(delBtn);
    delBtn.innerHTML = "X";
    delBtn.classList.add("delBtn");
    delBtn.addEventListener("click", delList);
  }
}

plusButton.addEventListener("click", addList);

function delList(e) {
  console.log(e);
  let removeOne = e.target.parentElement;
  removeOne.remove();
}

const sBtn1 = document.querySelector("#sBtn1");
const sBtn2 = document.querySelector("#sBtn2");
const sBtn3 = document.querySelector("#sBtn3");
const sBtn4 = document.querySelector("#sBtn4");

const selected = "selected";

sBtn1.addEventListener("click", function () {
  sBtn1.classList.toggle(selected);
});

sBtn2.addEventListener("click", function () {
  sBtn2.classList.toggle(selected);
});

sBtn3.addEventListener("click", function () {
  sBtn3.classList.toggle(selected);
});

sBtn4.addEventListener("click", function () {
  sBtn4.classList.toggle(selected);
});
