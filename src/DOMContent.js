import Magnify from './assets/magnify.svg'
import AddLogo from './assets/add.svg'

// Helper function for svgs
const createSideDiv = (logosrc, text, width) => {
    const div = document.createElement('div')
    const logo = new Image()

    logo.src = logosrc
    logo.style.width = width
    div.innerHTML = text
    div.appendChild(logo)

    return div
}

// Seperate into top bar
// Features: to sort by date/priority
export function topBarDOM (parentContainer) {
    const rowContainer = document.createElement('div')
    const leftSide = document.createElement('div')
    const rightSide = document.createElement('div')

    const searchLogo = createSideDiv(Magnify, null, '25px')
    const searchBar = document.createElement('input')
    searchBar.placeholder = 'Try searching title of your task!'

    rowContainer.className = 'topRow'
    leftSide.className = 'topRowLeft'
    rightSide.className = 'topRowRight'
    searchLogo.className = 'searchLogo'
    searchBar.className = 'searchBar'

    parentContainer.appendChild(rowContainer)

    rowContainer.appendChild(leftSide)
    rowContainer.appendChild(rightSide)

    leftSide.appendChild(searchLogo)
    leftSide.appendChild(searchBar)

    const dropdownHTML = `
    <label for="sortBy">Sort By</label>
    <select name="sortBy" id="sortBy">
        <option value="byPriority">Priority</option>
        <option value="byDate">Date</option>
    </select>`

    rightSide.innerHTML = dropdownHTML
}
// Side bar
// Features: to create workspaces and nav diff workspace 
export function sideBarDOM (parentContainer) {
    const sideBar = document.createElement('div')
    const textWrapper = document.createElement('div')

    const todoName = document.createElement('div')
    todoName.innerHTML = 'BackLogs'
    todoName.style.fontSize = '48px'
    todoName.style.fontWeight = 'bold'
    todoName.style.color = 'var(--font-color-title)'

    const addWork = createSideDiv(AddLogo, '<p>Add ToDo</p>', '30px')
    const addProject = createSideDiv(AddLogo, '<p>Create Workspace</p>', '30px')

    sideBar.className = 'sideBar'
    textWrapper.className = 'sideTextWrapper'
    addWork.className = 'sideBarAddWork'
    addProject.className = 'sideBarAddProj'

    parentContainer.appendChild(sideBar)
    sideBar.appendChild(textWrapper)
    textWrapper.appendChild(todoName)
    textWrapper.appendChild(addWork)
    textWrapper.appendChild(addProject)
}
// Centre todo lists
// Features: to make todo lists
export function createCardDOM () {
    const toDoCards = document.createElement('div')
    const toDoTexts = document.createElement('div')
    const toDoCountdown = document.createElement('p')
    
    const toDoTitle = document.createElement('p')
    const toDoDesc = document.createElement('p')

    toDoCards.className = 'toDoCards'

    toDoTitle.style.fontSize = '26px'
    toDoTitle.style.fontWeight = 'bold'
    toDoTitle.style.color = 'var(--font-color-title)'

    toDoDesc.style.fontSize = '18px'
    toDoDesc.style.color = 'var(--font-color-general)'

    toDoCards.appendChild(toDoTexts)

    toDoTexts.appendChild(toDoTitle)
    toDoTexts.appendChild(toDoDesc)
    toDoTexts.appendChild(toDoCountdown)
}

function getDate () {
    const currentDate = new Date()
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1
    const year = currentDate.getFullYear()

    return `${year}-${month}-${day}`
}

function createInputBar (className, labelText, inputType, value = null) {
    const label = document.createElement('label')
    const labelInputBox = document.createElement('input')

    label.for = className
    label.innerHTML = labelText
    label.style.fontSize = '25px'
    label.style.fontWeight = 'bold'

    if (inputType === 'date') labelInputBox.value = value

    labelInputBox.name = className
    labelInputBox.type = inputType
    labelInputBox.className = className
    labelInputBox.style.fontSize = '25px'

    return label.after(labelInputBox)
}

// Pop up DOM for making ToDo cards
// To be appended to .hero
export function createPopUpTodo (parentContainer) {
    const popUpTodo = document.createElement('div')
    const popUpWrapper = document.createElement('div')
    const popUpSubmit = document.createElement('button')
    popUpSubmit.type = 'button'
    popUpSubmit.innerHTML = 'Add To Do!' 

    const popUpTitle = createInputBar('popUpTitle', 'Task', 'text')
    const popUpDesc = createInputBar('popUpDesc', 'Description', 'text')
    const popUpCalender = createInputBar('popUpCalender', 'Task Ends', 'date', getDate())

    const popUpPriorityWrapper = createElement('div')
    const popUpNormal = createInputBar('popUpPriorityNormal', 'Normal', 'radio', 'normal')
    const popUpMedium = createInputBar('popUpPriorityMedium', 'Medium', 'radio', 'medium')
    const popUpHigh = createInputBar('popUpPriorityHigh', 'High', 'radio', 'high')
    
    popUpTodo.className = 'popUpTodo'
    popUpWrapper.className = 'popUpWrapper'
    popUpSubmit.className = 'popUpSubmit'
    popUpPriorityWrapper.className = 'popUpPriorityWrapper'

    popUpTodo.appendChild(popUpWrapper)
    popUpWrapper.appendChild(popUpTitle)
    popUpWrapper.appendChild(popUpDesc)
    popUpWrapper.appendChild(popUpPriorityWrapper)
    popUpWrapper.appendChild(popUpSubmit)

    popUpPriorityWrapper.appendChild(popUpNormal)
    popUpPriorityWrapper.appendChild(popUpMedium)
    popUpPriorityWrapper.appendChild(popUpHigh)
    

    popUpTodo.style.display = 'none'
}

// Subsequent import : import { fn name } from 'file_path'