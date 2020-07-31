// Define UI vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-task");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

loadEventListners();

function loadEventListners() {
  // DOM load event
  document.addEventListener("DOMContentLoaded", getTasks);
  // add task event
  form.addEventListener("submit", addTask);
  // remove task event
  taskList.addEventListener("click", removeTask);
  // clear tasks event
  clearBtn.addEventListener("click", clearTasks);
  // filter tasks event
  filter.addEventListener("keyup", filterTasks);
}

// get tasks;
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task) {
    const li = document.createElement("li");
    // add class
    li.className = "collection-item";
    // create text node and append to li
    li.appendChild(document.createTextNode(task));
    // create link element
    const link = document.createElement("a");
    // add class to the link element.
    link.className = "delete-item secondary-content";
    // insert inner html
    link.innerHTML = '<i class="fa fa-remove">';
    // append the link into the li
    li.appendChild(link);
    // append the li element to the ul collection and display on the screen
    taskList.appendChild(li);
  });
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  const list = document.querySelectorAll(".collection-item");
  list.forEach(function (task) {
    item = task.firstChild.textContent.toLocaleLowerCase();
    console.log(item, "", text);
    if (item.indexOf(text) > -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
function clearTasks(e) {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function removeTask(e) {
  const el = e.target;

  if (el.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure")) {
      el.parentElement.parentElement.remove();
      // remove from LS
      removeTaskFromLocalStorage(el.parentElement.parentElement);
    }
  }
}

function removeTaskFromLocalStorage(taskItem) {

}


function addTask(e) {
  e.preventDefault();
  const taskValue = taskInput.value;
  if (taskValue === "") {
    alert("add task");
  } else {
    const li = document.createElement("li");
    // add class
    li.className = "collection-item";
    // create text node and append to li
    li.appendChild(document.createTextNode(taskValue));
    // create link element
    const link = document.createElement("a");
    // add class to the link element.
    link.className = "delete-item secondary-content";
    // insert inner html
    link.innerHTML = '<i class="fa fa-remove">';
    // append the link into the li
    li.appendChild(link);
    // append the li element to the ul collection and display on the screen
    taskList.appendChild(li);
    storeTaskInLocalStorage(taskValue);
    taskInput.value = "";
  }
}

function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("taks"));
  }
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}
