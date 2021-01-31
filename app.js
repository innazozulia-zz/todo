//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.todo-filter');

// Event Listener
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions
function addToDo(event){
    // prevent form from submitting
    event.preventDefault();
    //ToDo div
    const toDoDiv = document.createElement('div');
   toDoDiv.classList.add('todo');
   //create li 
   const newToDo = document.createElement('li');
   newToDo.innerText = 'What are you planning?';
   newToDo.innerText = todoInput.value;
   newToDo.classList.add('todo-item');
   toDoDiv.appendChild(newToDo);
   //check mark button
   const complecetedButton = document.createElement('button');
   complecetedButton.innerHTML = '<i class="fas fa-check"></i>';
   complecetedButton.classList.add('compleceted-btn');
   toDoDiv.appendChild(complecetedButton);
   //check trash button
   const trashButton = document.createElement('button');
   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
   trashButton.classList.add('trash-btn');
   toDoDiv.appendChild(trashButton);
    //  append to list
    todoList.appendChild(toDoDiv);
    //clear todo input
    todoInput.value = '';
    //add todo to local Storage
    saveLocalTodos(todoInput.value);
}

function deleteCheck(e){
const item = e.target;
//delete todo
if(item.classList[0] === 'trash-btn'){
    const todo = item.parentElement;
    //animation in trash
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function(){
    todo.remove();
    });
    }
    //check mark
    if(item.classList[0] === 'compleceted-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}


function filterTodo(e){
   const todos = todoList.childNodes;  
    console.log(todos);  
    todos.forEach(function(todo){
    switch(e.target.value){
        case "all":
            todo.style.display = "flex";
            break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else{
                    todo.style.display = "none";
                }
                case "uncompleted":
                    if(!todo.classList.contains('uncompleted')){
                        todo.style.display = 'flex';
                    } else{
                        todo.style.display = "none";
                    }
    }
 });

}


function saveLocalTodos(todo) {
    // check 
let todos;
if(localStorage.getItem('todos') === null){
    todos = [];
} else {
    todos = JSON.parse(localStorage.getItem('todos'));
}

todos.push(todo);
localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
    let todos;
    if(localStorage.get("todos") === null){
        todos = [];
    } else {
        todos - JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){
        const toDoDiv = document.createElement('div');
        toDoDiv.classList.add('todo');
        //create li 
        const newToDo = document.createElement('li');
     //    newToDo.innerText = 'What are you planning?';
        newToDo.innerText = todoInput.value;
        newToDo.classList.add('todo-item');
        toDoDiv.appendChild(newToDo);
        //check mark button
        const complecetedButton = document.createElement('button');
        complecetedButton.innerHTML = '<i class="fas fa-check"></i>';
        complecetedButton.classList.add('compleceted-btn');
        toDoDiv.appendChild(complecetedButton);
        //check trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        toDoDiv.appendChild(trashButton);
         //  append to list
         todoList.appendChild(toDoDiv);
    });
}