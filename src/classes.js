import { createCardDOM } from "./DOMContent.js";

export class Todo {
  constructor(formProps) {
    this.title = formProps.popUpTitle;
    this.description = formProps.popUpDesc;
    this.date = formProps.popUpCalender || '0'; // Optional date
    this.priority = formProps.popUpPriority || 'normal'; // Default priority
  }

  appendToProject(toDoContainer) {
    // parent container to be updated with workspace container instead
    const todoCard = createCardDOM(toDoContainer);
    this.populateCard(todoCard);
    return todoCard;
  }

  populateCard(cardElement) {
    cardElement.querySelector('.toDoTitle').innerText = this.title;
    cardElement.querySelector('.toDoDesc').innerText = this.description;
    cardElement.querySelector('.toDoCountdown').innerText = `
        You have *${this.date.split('-').pop() - this.todayDate()}* days left!`;
    this.setPriorityColor(cardElement);
  }

  setPriorityColor(cardElement) {

        switch(this.priority) {

            case 'high':
                cardElement.style.setProperty('--color', 'var(--priority-color-high)')
                break
            case 'medium':
                cardElement.style.setProperty('--color', 'var(--priority-color-mid)')
                break
            case 'normal':
                cardElement.style.setProperty('--color', 'var(--priority-color-normal)')
                break
        }
  }

  todayDate () {
    const currentDate = new Date()
    return currentDate.getDate()
  }
}

// handles all todo cards
export class Workspace {
  constructor(name) {
    this.name = name
    this.id = Math.random().toString(36).substring(2, 15); // Generate unique ID
    this.cardsStorage = []
  }

  appendToWorkspace (todo) {
    this.cardsStorage.push(todo)
  }

  // function to handle sorting by dates/priority
}

// handles all projects
export class Manager {
  static storage = []

  static appendToStorage (workspace) {
    Manager.storage.push(workspace)
  }

  static getWorkspaceById(workspaceId) {
    return Manager.storage.find(ws => ws.id === workspaceId);
  }
}
