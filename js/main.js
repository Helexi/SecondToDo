// основные константы, взяты из html

const field = document.querySelector('.field');
const button = document.querySelector('.add');
const list = document.querySelector('.list');
let total_value = document.querySelector('.total_value');
const deleteAll = document.querySelector('.deleteAll');

// массив для подсчёта общего количество дел

let totalArrey = [];

// функция для того, чтобы по энтеру можно было нажимать на кнопку

function clickPress(event) {
    if (event.keyCode == 13) {
        addTask();
    }
}

// функция создаёт новый блок в котором введённые 
// дела пользователя + кнопки и чекбокс

function createTask(value) {

    // создал константы (в дальнейшем они поввляюстся на странице)

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

    // добавляем в массив каждое из дел

    totalArrey.push(value);
    total_value.innerHTML = totalArrey.length;

    // клик на чекбокс

    check.addEventListener('click', completeTask);

    // клик на удаление конкретного дела

    deleteTask.addEventListener('click', () => {
        list.removeChild(task)
        totalArrey.pop(task);
        total_value.innerHTML = totalArrey.length;
    });

// localStorage.setItem('todo', JSON.stringify(totalArrey))
// console.log(localStorage.getItem('todo', JSON.stringify(totalArrey)));

if ()

    return task;
}


// проверяет если есть значение в инпуте, 
// то добавляет в функцию createTask значение

function addTask() {
    if (field.value) {
        const newTask = createTask(field.value);
        list.appendChild(newTask);
        field.value = "";
    }
}

// реакция на чекбокс, если нажат - то добавить стиль, если нет - удалить

function completeTask(event) {
    const target = event.target;
    if (target.checked) {
        target.parentElement.classList.add('success');
    } else {
        target.parentElement.classList.remove('success');
    }
}

// удалить всё задания

function deleteAlltask() {
    list.innerHTML = "";
    totalArrey.length = 0;
    total_value.innerHTML = totalArrey.length;
}

// событие клил на кнопку "+" и на кнопку "delete all"

button.addEventListener('click', addTask);
deleteAll.addEventListener('click', deleteAlltask);