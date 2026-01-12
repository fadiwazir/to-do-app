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
fillTask();
let index = 0;
submitBtn.addEventListener("click", () => {
  let taskObj = {
    title: input.value,
  };
  arrayTasks.push(taskObj);
  fillTask();
});

function delTask(index) {
  let tasks = arrayTasks[index]
  let x = confirm(`You want delete the: ${tasks.title} !`);
  if (x == true) {
    arrayTasks.splice(index, 1);
    fillTask();
  }
}

function editTask(index){
  let tasks = arrayTasks[index]
  let newName = prompt(`${tasks.title}`)
  tasks.title = newName;
  fillTask();
}