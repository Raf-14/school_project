


let tasks = [];

const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();
    if (text) {
        tasks.push({ text: text, completed: false});
        displayTasks();
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
        taskList.append(taskElement);
    });
}

//Function to delete task

const onDelete = (index) => {
    tasks.splice(index, 1);
    displayTasks();
}

//Function to edit task

const onEdite = (index) => {

}
//Event And Button
document.getElementById('newTask').addEventListener('click', function(e){
    e.preventDefault();
    addTask();
})