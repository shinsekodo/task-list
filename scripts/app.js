//Define the variables in UI
const task = document.querySelector('#task'); //input field
const addBtn = document.querySelector('.btn-primary');//Add task button
const clearBtn = document.querySelector('.btn-danger'); //Clear button
const list = document.querySelector('.list-group'); //UL 

//Function to add task to list
function addTask(e) {
  if(task.value == '') {
    alert("Please add a task.");
  }
  else {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    //assign li element class names and append input value
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.appendChild(document.createTextNode(task.value));
    
    link.innerHTML = '<i class="fas fa-minus text-danger"></i>';
    listItem.appendChild(link); 
    list.appendChild(listItem);
  }

  task.value = '' //clears input field
  e.preventDefault(); //prevents default action of loading page
}

//Function to remove a selected task from list
function removeTask(e) {
  if (e.target.parentElement.parentElement.classList.contains('list-group-item')) {
    e.target.parentElement.parentElement.remove();
  }
}

//Function to clear all tasks
function clearTasks(e) {
  while(list.firstChild) {
    list.removeChild(list.firstChild);
  } //faster than list.innerHTML = '';
}

//Call addTask function when button is clicked
addBtn.addEventListener('click',addTask);
//Delete a selected item
document.body.addEventListener('click',removeTask);
//Clear the enter list 
clearBtn.addEventListener('click',clearTasks);


