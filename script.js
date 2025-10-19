let inputField = document.getElementById('todo-input');
let addButton = document.getElementById('add-button');
let todoList = document.getElementById('todo-list');

const addTask = () => {
    const taskText = inputField.value.trim();

    if (taskText === "") {
        alert("You can not keep an empty task!");
        return;
    }

    let li = document.createElement('li');

    li.innerHTML = `
        <span>${taskText}</span> 
        <button class="delete-btn">X</button>
    `;

    todoList.appendChild(li);

    inputField.value = "";
    inputField.focus();
};

addButton.addEventListener('click', addTask);

inputField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const listItem = event.target.parentElement;

        if (confirm(`Are you sure you want to delete ? You can not undo this."${listItem.querySelector('span').textContent}"?`)) {
            listItem.remove();
        }
    }
});