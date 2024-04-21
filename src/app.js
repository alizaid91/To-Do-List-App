let createTaskBox = document.querySelector(".task-details-input")
let taskName = document.querySelector("#task-name")
let taskList = document.querySelector(".tasks-list")
let taskDate = document.querySelector("#task-date")
let taskContainerMain = document.querySelector(".tasks-list")
let wrapper = document.querySelector(".wrapper")
let addTasksMsg = document.querySelector(".add-tasks-msg")
let footer = document.querySelector(".fa-circle-plus")
let task = document.getElementsByTagName("li")


function createTask(){
    createTaskBox.style.display = "block"
    wrapper.style.display = "block"
    // footer.style.display = "none"
}

function addTask(){
    if(taskName.value === ''){
        alert("Enter Task Name!")
    }

    else{
        if(taskDate.value != ''){
            let li = document.createElement("li");
            var taskContainer = document.createElement("div")
            let taskNameText = document.createElement("p")
            let taskDateText = document.createElement("p")
            let delTask = document.createElement("i")
            delTask.className = "class = fa-solid fa-trash-can"

            taskNameText.innerHTML = taskName.value;
            taskDateText.innerHTML = taskDate.value;

            taskContainer.appendChild(taskNameText)
            taskContainer.appendChild(taskDateText)
            taskContainer.appendChild(delTask)
            li.appendChild(taskContainer)
            taskList.appendChild(li)
            createTaskBox.style.display = "none"
            wrapper.style.display = "none"
            // footer.style.display = "block"
            saveData()
        }
        else{
            let li = document.createElement("li");
            var taskContainer = document.createElement("div")
            let taskNameText = document.createElement("p")
            let delTask = document.createElement("i")
            delTask.className = "class = fa-solid fa-trash-can"

            taskNameText.innerHTML = taskName.value;

            
            taskContainer.appendChild(taskNameText)
            taskContainer.appendChild(delTask)
            li.appendChild(taskContainer)
            taskList.appendChild(li)
            createTaskBox.style.display = "none"
        wrapper.style.display = "none"
        // footer.style.display = "block"
        saveData()
        }

        taskName.value = "";
        taskDate.value = "";
    }
}

taskContainerMain.addEventListener("click" , function(e){
    if(e.target.tagName === "DIV"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "I"){
        e.target.parentElement.remove()
        saveData()
    }
},false)

function Close(){
    createTaskBox.style.display = "none"
    wrapper.style.display = "none"
    // footer.style.display = "block"
}

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
showTask()