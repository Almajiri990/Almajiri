"use strict";
let todoForm = document.getElementById("todo-form");
let userInput = document.getElementById("input");
let submitBtn = document.getElementById("btn");
let display = document.getElementById("display-task");
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newTask = userInput.value;
    if (newTask === "") {
        alert("Task cannot be empty");
        return;
    }
    createTask(newTask);
    newTask = "";
});
const createTask = (task) => {
    let taskList = document.createElement("li");
    let checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    taskList.appendChild(checkBox);
    taskList.innerText = task;
    let editBtn = document.createElement("button");
    editBtn.innerText = "edit";
    taskList.appendChild(editBtn);
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "delete";
    taskList.appendChild(deleteBtn);
    display.appendChild(taskList);
    if (checkBox.checked) {
        taskList.style.textDecoration = "line-through";
    }
    else {
        taskList.style.textDecoration = "none";
    }
};
