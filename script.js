let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

let task = [];

function renderTask() {
  listElement.innerHTML = "";

  task.map((todo) => {
    let liElement = document.createElement("li");
    let taskText = document.createTextNode(todo);

    let linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");

    let linkText = document.createTextNode("Delete");
    linkElement.appendChild(linkText);

    let position = task.indexOf(todo);

    linkElement.setAttribute("onclick", `deleteTask(${position})`);

    liElement.appendChild(taskText);
    liElement.appendChild(linkElement);
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

function deleteTask(position) {
  task.splice(position, 1);
  renderTask();
}
