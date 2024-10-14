document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task-btn');
    const tasksList = document.getElementById('tasks-list');
  
    addTaskBtn.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = ''; // Clear input after adding
      }
    });
  
    function addTask(taskText) {
      const taskItem = document.createElement('li');
      taskItem.innerText = taskText;
  
      // Add buttons to mark task as completed and delete task
      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete';
      taskItem.appendChild(deleteBtn);
  
      tasksList.appendChild(taskItem);
  
      // Add event listeners to buttons
      taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
      });
  
      deleteBtn.addEventListener('click', function() {
        tasksList.removeChild(taskItem);
      });
    }
  });
  