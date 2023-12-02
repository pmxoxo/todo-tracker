
document.addEventListener('DOMContentLoaded', function() {
    function newTask() {
        var taskValue = document.getElementById('newtask').value;

        // Checks to see if input field is empty
        if (taskValue === '') {
            alert("Task cannot be empty")
            return;
        }
        
        // Creating a new list item 
        var listItem = document.createElement('li');
        listItem.textContent = taskValue;
        
        document.getElementById('taskList').appendChild(listItem);

        // Clear input field after adding new task 
        document.getElementById('newtask').value = '';
    }
    document.getElementById('addTaskButton').addEventListener('click', newTask);
});

