let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let task = [];

function renderTask() {
  listElement.innerHTML = "";

  task.map((todo) => {
    let liElement = document.createElement("li");
    let taskText = document.createTextNode(todo);

    liElement.appendChild(taskText);
    listElement.appendChild(liElement);
  });
}

function addTask() {
  if (inputElement.value === "") {
    alert("Write something!");
    return false;
  } else {
    let newTask = inputElement.value;

    task.push(newTask);
    inputElement.value = "";

    renderTask();
  }
}

buttonElement.onclick = addTask;
