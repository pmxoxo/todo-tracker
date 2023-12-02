
document.addEventListener('DOMContentLoaded', function() {
    function newTask() {
        var taskValue = document.getElementById('newtask').value;

        if (taskValue === '') {
            alert("Task cannot be empty")
            return;
        }
        
        console.log("Hello " + taskValue);  
        
        document.getElementById('newtask').value = '';
    }
    document.getElementById('addTaskButton').addEventListener('click', newTask);
});

