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
  let inList = document.createElement("li");
  let delBtn = document.createElement("button");
  inList.innerHTML = textInput.value;
  textInput.value = "";
  result.appendChild(inList);
}

plusButton.addEventListener("click", addList);
