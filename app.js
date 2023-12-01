document.addEventListener('DOMContentLoaded', function() {
    function newTask() {
        var taskValue = document.getElementById('newtask').value;
        console.log("Hello " + taskValue);
    }
    document.getElementById('addTaskButton').addEventListener('click', newTask);
});