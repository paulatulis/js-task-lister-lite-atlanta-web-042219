document.addEventListener("DOMContentLoaded", function(){
  document.querySelector('#create-task-form').addEventListener('submit', handleCreateToDo)
  document.querySelector('')

  addToDo()
});

function handleCreateToDo(e){
  e.preventDefault()
  console.log(e.target)
  let todo = document.getElementById("new-task-description").value
  addNewToDo(todo)
  e.target.reset()
}


function addToDo(){
  todo.forEach(todo =>{
    console.log(todo)
    addNewToDo(todo)
  })
}

function addNewToDo(todo){
  console.log(todo)
  const todo_list = document.querySelector('#tasks')
  console.log(todo_list)
  const li = document.createElement('li')

  li.innerText = todo

  // const desc = document.createElement('desc')
  // desc.textContent = todo.newtaskdescription

  // li.appendChild(desc)
  todo_list.appendChild(li)

}
