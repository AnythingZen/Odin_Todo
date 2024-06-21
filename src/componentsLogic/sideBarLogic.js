import { createPopUpTodo } from "../DOMContent";
import { Todo } from "../classes";

// Create workspace

// Add todos
const toDoContainer = document.createElement('div')
toDoContainer.className = 'toDoContainer'
toDoContainer.appendChild(document.querySelector('.hero'))

const addTodo = document.querySelector('.sideBarAddWork')
addTodo.addEventListeners('click', () => {
    createPopUpTodo(document.querySelector('.hero'), (formProps) => {
        const newTodo = new Todo(formProps)
        newTodo.appendToProject(toDoContainer)
    })
})