//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//event listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
//functions

function addTodo(event) {
    //to prevent from submitting
    event.preventDefault();
    //create TODO div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //createLI
    const newTodo = document.createElement('li');
    if (todoInput.value !== "") {
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        //chechk mark button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"> </i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        //delete button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);


        //Append to list  
        todoList.append(todoDiv);

        //clear todo input bar
        todoInput.value = "";
    }



}

function deleteCheck(event) {
    const item = event.target;
    //Delete
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}