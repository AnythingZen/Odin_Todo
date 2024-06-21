import './style.css';
import { topBarDOM, sideBarDOM, createWorkspaceDOM, } from './DOMContent.js';
import { createPopUpTodo } from "./DOMContent.js";
import { Manager, Todo, Workspace } from "./classes.js";

// global variables
const hero = document.querySelector('.hero')
topBarDOM(hero)
sideBarDOM(hero)
const toDoContainer = document.createElement('div')
toDoContainer.className = 'toDoContainer'
hero.appendChild(toDoContainer)

const workspaceWrapper = document.createElement('div')
workspaceWrapper.className = 'workspaceWrapper'
document.querySelector('.sideBar').appendChild(workspaceWrapper)

let selectedWorkspace = getWorkspace()

function clearToDoContainer () {
    toDoContainer.innerHTML = ""
}

function getWorkspace() {
    let name = prompt('Name of workspace: ');
    while (!name) name = prompt('NAME WORKSPACE PLEASE!')
    const workspace = new Workspace(name);
    Manager.appendToStorage(workspace);
    const workspaceElement = createWorkspaceDOM(name, workspaceWrapper);
    workspaceElement.dataset.id = workspace.id; 
    
    // object of Workspace
    return workspace;
}

const addTodo = document.querySelector('.sideBarAddWork')
const addWorkspace = document.querySelector('.sideBarAddProj')

// adding new workspace when Create workspace is pressed
addWorkspace.addEventListener('click', () => {
    clearToDoContainer()
    selectedWorkspace = getWorkspace()
})
// adding todo to that specfic workspace
addTodo.addEventListener('click', () => {
    createPopUpTodo(hero, (formProps) => {
        const newTodo = new Todo(formProps)
        const todoCard = newTodo.appendToProject(toDoContainer) 
        selectedWorkspace ? selectedWorkspace.appendToWorkspace(todoCard)
        : alert('Select a workspace to add Todo!') 
    })
})
// retrieving cards when workspace is pressed
workspaceWrapper.addEventListener('click', (event) => {
    clearToDoContainer()
    const workID = event.target.dataset.id
    selectedWorkspace = Manager.getWorkspaceById(workID)
    
    // displaying cards in that workspace
    if (selectedWorkspace) {
        selectedWorkspace.cardsStorage.forEach(card => {
            toDoContainer.appendChild(card)
        })
    }
})
