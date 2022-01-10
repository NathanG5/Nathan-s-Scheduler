$( document ).ready(function(){

let d = new Date()

let year = d.getFullYear()
let month = d.getMonth()+1;
let day = d.getDate()

let totalDays = new Date(year , month, 0).getDate()

let output =
(month<10 ? '0' : '') + month + '/' +
(day<10 ? '0' : '') + day + '/' + year
})

var taskInfoE1 = document.createElement("div");
taskInfoE1.className = "task-info";
taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskDataObj,name +"</h3><span class ='task-type'>" + taskDataObj.type + "</span>";
listItemE1.appendChild(taskInfoE1);
