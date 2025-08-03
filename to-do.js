const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add a new task
const addTask = () => {
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
  }
});

// Save tasks to localStorage
const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

// Load saved tasks from localStorage
const showData = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

showData(); // Show tasks on page load
