const list_container = document.getElementById("list_container");
const list_items_display = document.getElementsByClassName("list_items");
const taskInput = document.getElementById("todo");

// Dark Mode Toggle
document.getElementById("toggle").onclick = function () {
  const element = document.body;
  element.classList.toggle("light-mode");
  //const content = document.getElementsByClassName("box1 box2");
  const img = document.getElementById("toggle-img");
  if (img.src.match("./images/icon-sun.svg")) {
    img.src = "./images/icon-moon.svg";
  } else {
    img.src = "./images/icon-sun.svg";
  }
};


const listItems = [
  { task: "Jog around the park 3x", isDone: false, id: 0 },
  { task: "Complete online javasscript course", isDone: true, id: 1 },
]

// Display list items function
const populateListContainer = () => {
  let list = ""

  const descendingOrder = listItems.slice().sort((a, b) => b.id - a.id);
  console.log(descendingOrder);

  descendingOrder.forEach((item) => {
    list += `
  <div class="list_items"> 
    <input type="checkbox" onclick="checkTask(${item.id})" class="checkbox-round" ${item.isDone ? "checked" : ""} id=check-${item.id} />
    <p class="${item.isDone ? 'completed' : 'active'}" id="item-${item.id}">
      ${item.task}
    </p>
   </div> 
   <hr />
   `
  })

  list_container.innerHTML = list;
}

taskInput.addEventListener("keydown", addTask)

function addTask(e) {
  if (e.key === "Enter" & taskInput.value.trim() !== "") {
    e.preventDefault()

    listItems.unshift({ task: taskInput.value, isDone: false, id: listItems.length })
    taskInput.value = "";
    populateListContainer()
  }
}


// This function get task using `id` and marks it as completed if active, or active if it is completed 
function checkTask(id) {
  const selectedTask = document.getElementById(`item-${id}`);

  if (listItems[id].isDone) {
    listItems[id].isDone = false;
    selectedTask.classList.remove("completed")
    selectedTask.classList.add("active")
  } else if (listItems[id].isDone === false){
    listItems[id].isDone = true;
    selectedTask.classList.remove("active")
    selectedTask.classList.add("completed")
  }

  console.log(selectedTask);
}

/*
TODO: FEATURES TO IMPLEMENT
- CHECKED: Completted tasks
- DELETE BUTTON: Delete tasks
- Clear Completed tasks 
- FILTER TASKS
  - All
  - Active
  - Completed
*/
populateListContainer()

















// {task: "10 minutes meditation", isDone: false},
// {task: "Read for 1 hour", isDone: false},
// {task: "Pick up groceries", isDone: false},
// {task: "Complete Todo App on Frontend Mentor", isDone: false},
// {task: "Complete Todo App on Frontend Mentor", isDone: false},
// {task: "Complete Todo App on Frontend Mentor", isDone: false},
// {task: "Complete Todo App on Frontend Mentor", isDone: false},
// {task: "Complete Todo App on Frontend Mentor", isDone: false},