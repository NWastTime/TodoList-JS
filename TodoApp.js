//Selector
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const todoFilter = document.querySelector('.todo-filter')


//Events Listener
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheckChange)
todoFilter.addEventListener('click', filterTodo)

//Functions
function addTodo(event) {
    //непозволяет странице обновлятся
    event.preventDefault()

    //todo div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    //create li
    const newTodoValue = document.createElement('li')
    newTodoValue.innerText = todoInput.value
    newTodoValue.classList.add('todo-item')
    todoDiv.appendChild(newTodoValue)

    //check mark button
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)

    //check trush button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    //append to list
    todoList.appendChild(todoDiv)
    
    //clear todoInput
    todoInput.value = ''
}

function deleteCheckChange(event) {
    const item = event.target
    //delete todo
    //если он по 0 мндексу его клас == клас trash-btn то удалить
    if (item.classList[0] === 'trash-btn'){
        const todoItem = item.parentElement

        //animation to remove
        todoItem.classList.add('fall')
        todoItem.addEventListener('transitionend', () => todoItem.remove())
    }

    //check mark
    if (item.classList[0] === 'complete-btn'){
        const todoItem = item.parentElement
        todoItem.classList.toggle('completed')
    } 

} 


function filterTodo(event){
    const todos = todoList.childNodes
    
    todos.forEach((todo) => {
        switch(event.target.value){
            case 'all':
                todo.style.display = 'flex'
                break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex'
                }else{
                    todo.style.display = 'none'
                }
                break
            case 'uncompleted':
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex'
                }else{
                    todo.style.display = 'none'
                }
                break
        }
    })

}