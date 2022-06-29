document.querySelector(".press").onclick = function () {
  //if the task is empty
  if (document.querySelector(".newTask input").value.length == 0) {
    alert("Please enter a task first!");
  }
  //to add a new task
  else {
    document.querySelector(".tasks").innerHTML += `
    <div class="task">
    <span class="taskname">
      ${document.querySelector(".newTask input").value}
    </span>
    <button class="delete">
    🗑️
    </button>
    </div>
    `;

    //deleting a task

    var current = document.querySelectorAll(".delete");
    for (let i = 0; i < current.length; i++) {
      current[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    //crossing off the tasks:
    var tasks = document.querySelectorAll(".taskname");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }
    //clearing the input field after each entry:
    document.querySelector(".newTask input").value = "";
  }
};
