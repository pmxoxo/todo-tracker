document.addEventListener('DOMContentLoaded', function() {
    function newTask() {
        var taskValue = document.getElementById('newtask').value;

        // Checks to see if input field is empty
        if (taskValue === '') {
            alert("Task cannot be empty");
            return;
        }

        // Create a new list item for each task
        var listItem = document.createElement('li');

        // Text Node to store the input of the task name
        var taskText = document.createTextNode(taskValue);

        // Checkbox to mark completed tasks
        var checkButton = document.createElement('input');
        checkButton.type = 'checkbox';

        // Delete button to remove unwanted tasks
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete'; // Set text content for delete button

        // Append elements to the new list item
        listItem.appendChild(taskText);
        listItem.appendChild(checkButton);
        listItem.appendChild(deleteButton);

        // Append the new list item to the task list
        document.getElementById('taskList').appendChild(listItem);



        // Event Listeners for Checkbox & Delete Buttons
        checkButton.addEventListener('click', function() {
            listItem.classList.toggle('completed');
        });


        deleteButton.addEventListener('click', function() {
            listItem.remove();
        });

        // Clear input field after adding a new task 
        document.getElementById('newtask').value = '';
    }

    document.getElementById('addTaskButton').addEventListener('click', newTask);
});
