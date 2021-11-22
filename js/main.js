const field = document.querySelector('.field');
const button = document.querySelector('.add');
const list = document.querySelector('.list');
let total_value = document.querySelector('.total_value');
const deleteAll = document.querySelector('.deleteAll');

let totalArrey = [];

function clickPress(event) {
    if (event.keyCode == 13) {
        addTask();
    }
}

function createTask(value) {
    const task = document.createElement('div');
    const check = document.createElement('input');
    const deleteTask = document.createElement('button');
    task.textContent = value;
    task.classList.add('wraperTask');
    check.type = 'checkbox';
    check.classList.add('status');
    task.appendChild(check);
    deleteTask.type = 'button';
    deleteTask.textContent = 'delete';
    task.appendChild(deleteTask);
    deleteTask.classList.add('delete_some_task')
    totalArrey.push(task);
    total_value.innerHTML = totalArrey.length;
    check.addEventListener('click', completeTask);
    deleteTask.addEventListener('click', () => {
        list.removeChild(task)
        totalArrey.pop(task);
        total_value.innerHTML = totalArrey.length;
    });
    return task;
}

function addTask() {
    if (field.value) {
        const newTask = createTask(field.value);
        list.appendChild(newTask);
        field.value = "";
    }
}

function completeTask(event) {
    const target = event.target;
    if (target.checked) {
        target.parentElement.classList.add('success');
    } else {
        target.parentElement.classList.remove('success');
    }
}

function deleteAlltask() {
    list.innerHTML = "";
    totalArrey.length = 0;
    total_value.innerHTML = totalArrey.length;
}


button.addEventListener('click', addTask);
deleteAll.addEventListener('click', deleteAlltask);