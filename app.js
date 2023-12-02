document.addEventListener('DOMContentLoaded', function() {

    loadTasks();

    function newTask() {
        var taskValue = document.getElementById('newtask').value;

        if (taskValue === '') {
            alert("Task cannot be empty");
            return;
        }
        // Create a new list item for each task
        var listItem = document.createElement('li');
        // Text node to store Task Name
        var taskTextSpan = document.createElement('span'); // Changed to span
        taskTextSpan.textContent = taskValue; // Changed to textContent
        // Create Checkbox to 'complete' each task
        var checkButton = document.createElement('input');
        checkButton.type = 'checkbox';
        // Create Delete button to delete unwanted tasks
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        // Append Task, Checkbox, and Delete button to listItem
        listItem.appendChild(checkButton);
        listItem.appendChild(taskTextSpan); // Changed to taskTextSpan
        listItem.appendChild(deleteButton);

        document.getElementById('taskList').appendChild(listItem);

        // Checkbox toggle to set 'completed' class to listItems
        checkButton.addEventListener('click', function() {
            listItem.classList.toggle('completed');
            saveTasks();
        });

        // Delete button functionality
        deleteButton.addEventListener('click', function() {
            listItem.remove();
            saveTasks();
        });

        // Make sure input field is not empty
        document.getElementById('newtask').value = '';
        saveTasks();
    }

    // Save Tasks function to save in Local Storage
    function saveTasks() {
        var tasks = [];
        document.querySelectorAll('#taskList li').forEach(function(taskListItem) {
            var taskText = taskListItem.querySelector('span').textContent; // Only save text in span
            tasks.push({
                text: taskText,
                completed: taskListItem.classList.contains('completed')
            });
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Load Tasks function to load previously saved Tasks and their state
    function loadTasks() {
        var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(function(task) {
            var listItem = document.createElement('li');
            var taskTextSpan = document.createElement('span'); // Changed to span
            taskTextSpan.textContent = task.text; // Changed to textContent
            var checkButton = document.createElement('input');
            checkButton.type = 'checkbox';

            checkButton.addEventListener('click', function() {
                listItem.classList.toggle('completed');
                saveTasks();
            });

            if (task.completed) {
                listItem.classList.add('completed');
                checkButton.checked = true;
            }

            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';

            deleteButton.addEventListener('click', function() {
                listItem.remove();
                saveTasks();
            });

            listItem.appendChild(checkButton);
            listItem.appendChild(taskTextSpan); // Changed to taskTextSpan
            listItem.appendChild(deleteButton);
            document.getElementById('taskList').appendChild(listItem);
        });
    }

    document.getElementById('newtask').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            newTask();
        }
    });

    document.getElementById('addTaskButton').addEventListener('click', newTask);
});
