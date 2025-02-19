


let tasks = [];

const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();
    if (text) {
        tasks.push({ text: text, completed: false});
        displayTasks();
        // updateTaskStatus();
    }
    taskInput.value = '';
    
    console.log("task added =================>",tasks);
}

//function to display task element in an array

const displayTasks = () => {
    const taskList = document.getElementById('tasks-list');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = `
           <div class="taskItem">
               <div class="task ${task.completed ? "completed" : ''}">
                   <input class="checked" type="checkbox" id="task${index}" ${task.completed? 'checked' : ''}>
                   <p>${task.text}</p>
               </div>
               <div class="icons">
                    <img src="./images/modify.jpg" alt="edit icon" onClick="onEdite(${index})"/>
                    <img src="./images/delete.jpg" alt="trash icon" onClick="onDelete(${index})"/>
               </div>
           </div>
        `;
        taskElement.addEventListener('change', () => toggleTask(index))
        taskList.append(taskElement);
    });
}

//Function to delete task

const onDelete = (index) => {
    tasks.splice(index, 1);
    displayTasks();
    updateTaskStatus();
}

//Function to edit task

const onEdite = (index) => {
   const taskInput = document.getElementById('taskInput');
   taskInput.value = tasks[index].text;
   tasks.splice(index, 1);
   displayTasks();
   updateTaskStatus();
}

//Function to toogle a task
const toggleTask = (index) => {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
    updateTaskStatus();
    // location.reload();
}

// Task status
const updateTaskStatus = () => {
    const completedTask = tasks.filter((task) => task.completed).length;
    const totalTask = tasks.length;
    // console.log(totalTask, completedTask)

    const progress = (completedTask / totalTask) * 100

    const progressBar = document.getElementById('progress');

    progressBar.style.width = `${progress}%`;

    document.getElementById('numbers').innerHTML = `${completedTask}/${totalTask}`;

    if (completedTask && tasks.length === totalTask) {
        animationSuccess()
    }
}

//animation
const animationSuccess = () => {
    const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}
//Event And Button
document.getElementById('newTask').addEventListener('click', function(e){
    e.preventDefault();
    addTask();
})