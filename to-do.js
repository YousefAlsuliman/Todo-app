const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add a new task
const addTask = () => {
  addButton.innerHTML = "Add";
  const inputValue = inputBox.value;

  if (inputValue === "") {
    alert("write down something.");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputValue;
    listContainer.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    const button = document.createElement("button");
    button.innerHTML = "Edit";
    li.appendChild(button);
  }
  inputBox.value = "";
  saveData();
};

const completeListElement = (content) => {
  const li = document.createElement("li");
  li.innerHTML = content;
  const span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);
  const button = document.createElement("button");
  button.innerHTML = "Edit";
  li.appendChild(button);

  return li;
};

// Handle click events on the task list
listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.tagName === "BUTTON") {
    const inputValue = e.target.parentElement.childNodes[0].nodeValue.trim();
    e.target.parentElement.remove();
    inputBox.value = inputValue;
    const addButton = document.getElementById("addButton");
    addButton.innerHTML = "Edit";
  }
});

// Save tasks to localStorage
const saveData = () => {
  var content = [];

  for (let i = 0; i < listContainer.children.length; i++) {
    content[i] = listContainer.children[i].childNodes[0].textContent;
  }
  // content -> text inside li

  const ul = document.createElement("ul");

  // console.log(completeListElement(content[0]));
  for (let i = 0; i < content.length; i++) {
    ul.appendChild(completeListElement(content[i]));
  }
  localStorage.setItem("data", ul.innerHTML);
};

// Load saved tasks from localStorage
const showData = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

showData(); // Show tasks on page load
