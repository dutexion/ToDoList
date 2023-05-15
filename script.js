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
