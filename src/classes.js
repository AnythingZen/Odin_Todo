// workspace stores project, project stores todo
// workspace to make : toDoContainer.className = 'toDoContainer'
// class storage, (workspace)
// class manager (all the todo cards)

import { createCardDOM } from "./DOMContent.js";

export class Todo {
  constructor(formProps) {
    this.title = formProps.popUpTitle;
    this.description = formProps.popUpDesc;
    this.date = formProps.popUpCalender || "No date specified"; // Optional date
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
    cardElement.querySelector('.toDoCountdown').innerText = this.date;
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
}

