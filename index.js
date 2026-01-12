let input = document.getElementById("input");
let submitBtn = document.getElementById("sub");
let tasksDiv = document.getElementById("tasks");

let arrayTasks = [];

function fillTask() {
  tasksDiv.innerHTML = "";
  let index = 0;
  for (task of arrayTasks) {
    let content = `    
    <div class="task">
      <h2 id="name-task">${task.title}</h2>
      <div class="btn">
        <button onclick="editTask(${index})">edit</button>
        <button onclick="delTask(${index})">delete</button>
      </div>
    </div>
  `;
    tasksDiv.innerHTML += content;
    index++;
  }
  input.value = "";
}
// get item from local storage
arrayTasks = JSON.parse(localStorage.getItem("task"));
// end
fillTask();
let index = 0;
submitBtn.addEventListener("click", () => {
  if (input.value !== "") {
    let taskObj = {
      title: input.value,
    };
    arrayTasks.push(taskObj);

    // local storage 
    storeTask()

    fillTask();
  }
});

function delTask(index) {
  let tasks = arrayTasks[index];
  let x = confirm(`You want delete the: ${tasks.title} !`);
  if (x == true) {
    arrayTasks.splice(index, 1);
    storeTask()
    fillTask();
  }
}

function editTask(index) {
  let tasks = arrayTasks[index];
  let newName = prompt(`${tasks.title}`);
  if (newName !== "") {
    tasks.title = newName;
    storeTask()
    fillTask();
  }
}

// storage function
function storeTask() {
  let tasktoString = JSON.stringify(arrayTasks);
  localStorage.setItem("task", tasktoString);
}
