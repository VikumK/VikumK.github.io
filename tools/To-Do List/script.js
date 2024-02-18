document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.querySelector(".form-control");
  const taskList = document.getElementById("task-list");

  document.querySelector("button").addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });

  function addTask(taskText) {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
      <button type="button" class="btn-outline-danger"></button>
    `;
    taskList.appendChild(taskItem);

    const deleteButton = taskItem.querySelector("button");
    deleteButton.addEventListener("click", function () {
      taskItem.remove();
    });
  }
});
