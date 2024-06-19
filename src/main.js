import './style.css';
import { topBarDOM, sideBarDOM, } from './DOMContent.js';

const hero = document.querySelector('.hero')
topBarDOM(hero)
sideBarDOM(hero)

import { createPopUpTodo } from "./DOMContent.js";
import { Todo } from "./classes.js";

// Create workspace

// Add todos
const toDoContainer = document.createElement('div')
toDoContainer.className = 'toDoContainer'
hero.appendChild(toDoContainer)

const addTodo = document.querySelector('.sideBarAddWork')
addTodo.addEventListener('click', () => {
    createPopUpTodo(hero, (formProps) => {
        const newTodo = new Todo(formProps)
        newTodo.appendToProject(toDoContainer)
    })
})