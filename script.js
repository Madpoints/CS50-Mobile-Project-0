const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  let todo = document.createElement('LI')
  todo.setAttribute('class', classNames.TODO_ITEM)
  todo.textContent = 'This is a new todo.'
  todo.appendChild(addCheckbox())
  todo.appendChild(addDeleteButton())
  list.appendChild(todo)
  updateItemCount(list.childElementCount)
  updateUncheckedCount()
}

function addCheckbox() {
  let checkbox = document.createElement('INPUT');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('class', classNames.TODO_CHECKBOX)
  checkbox.setAttribute('onchange', 'updateUncheckedCount(this.checked)')

  return checkbox
}

function addDeleteButton() {
  let deleteButton = document.createElement('BUTTON')
  deleteButton.setAttribute('class', classNames.TODO_DELETE)
  deleteButton.setAttribute('onClick', 'deleteTodo(this.parentNode)')
  deleteButton.textContent = 'Delete'

  return deleteButton
}

function deleteTodo(todo) {
  let isChecked = todo.getElementsByClassName(classNames.TODO_CHECKBOX)[0].checked
  if (!isChecked) {
    updateUncheckedCount(!isChecked)
  }
  list.removeChild(todo)
  updateItemCount(list.childElementCount)
}

function updateItemCount(adjustment) {
  itemCountSpan.textContent = adjustment
}

function updateUncheckedCount(isChecked) {
  let uncheckedCount = uncheckedCountSpan.innerText
  if (isChecked) {
    uncheckedCount--
  } else {
    uncheckedCount++
  }
  uncheckedCountSpan.textContent = uncheckedCount
}
