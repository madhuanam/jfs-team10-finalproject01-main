
let initializePage = true ;
const tm = new TaskManager();
console.log(tm.tasks);
console.log(tm.currentId);
//tm.addTask('Take out the Trash','Take out the trash in front of the house','Nick','2020-01-12');
//tm.addTask('Cook Dinner','Prepare a healthy serving of pancakes for the family tonight','Nick','2020-09-20');

//Alerts - For error messages
let taskNameAlert = document.getElementById('taskNameAlert');
let taskDescAlert = document.getElementById('taskDescAlert');
let assignedToAlert = document.getElementById('assignedToAlert');
let dueDateAlert = document.getElementById('dueDateAlert');
let statusAlert = document.getElementById('statusAlert');

//Input fields for Tasks
let taskNameInput = document.getElementById('taskName');
let taskDescInput = document.getElementById('taskDesc');
let assignedToInput = document.getElementById('assignedTo');
let dueDateInput = document.getElementById('dueDate');
let statusInput = document.getElementById('status');


let taskNameVal;
let taskDescVal;
let assignedToVal;
let dueDateVal;
let statusVal;

function validFormFieldInput(){
    let allDataValid = true;
    //alert('validFormFieldInput');
    taskNameVal = taskNameInput.value;
    //alert('Value of taskNameVal is ' + taskNameVal);
    if(taskNameVal === ''){
        //alert('Task name is null');
        taskNameAlert.style.display = 'block';
        allDataValid = false;
    }
    else{
        taskNameAlert.style.display = 'none';
    }
    taskDescVal = taskDescInput.value;
    if(taskDescVal === ''){
        //alert('Task Desc is null');
        taskDescAlert.style.display = 'block';
        allDataValid = false;
    }
    else{
        taskDescAlert.style.display = 'none';
    }
    assignedToVal = assignedToInput.value;
    if(assignedToVal === ''){
        //alert('Assigned To is null');
        assignedToAlert.style.display = 'block';
        allDataValid = false;
    }
    else{
        assignedToAlert.style.display = 'none';
    }
    dueDateVal = dueDateInput.value;
    if(dueDateVal === ''){
        //alert('Due Date is null');
        dueDateAlert.style.display = 'block';
        allDataValid = false;
    }
    else{
        dueDateAlert.style.display = 'none';
    }
    statusVal = statusInput.value;
    if(statusVal === ''){
        //alert('Due Date is null');
        statusAlert.style.display = 'block';
        allDataValid = false;
    }
    else{
        statusAlert.style.display = 'none';
    }
    return allDataValid;
};

function clearFields() {
    taskNameInput.value='';
    taskDescInput.value='';
    assignedToInput.value='';
    dueDateInput.value='';
    statusInput.value='';
}
function addTaskInformation() {
    /*
        const newTaskNameInput = document.querySelector('#taskName');
        const name = newTaskNameInput.value;
    console.log("name : " + name);
    */

        allDataValid = validFormFieldInput();
    //alert(allDataValid);
    if(allDataValid){
        //Clear the field values
        clearFields();
        //Add the field values to task
        console.log(tm.tasks);
        tm.addTask(taskNameVal,taskDescVal,assignedToVal,dueDateVal,statusVal);
        console.log(tm.tasks);
        console.log(tm.currentId);

        //Rerender the page
        tm.render();
        //Update Local storage
        tm.save();
    }
}

function hideAlert(){
    //alert('in hideAlert');
    taskNameAlert.style.display = 'none';
    taskDescAlert.style.display = 'none';
    assignedToAlert.style.display = 'none';
    dueDateAlert.style.display = 'none';
    statusAlert.style.display = 'none';
}

function initialize(){
    if(initializePage){
        //Hide the alerts
        hideAlert();
        //Load the stored tasks into objects
        tm.load();
        //Render the tasks
        tm.render();
        initializePage = false;
    }
}

//addTaskBtn.onclick = addTaskInformation;
addTaskBtn.addEventListener('click',addTaskInformation);


//code to initialize the page
initialize();

//taskHtml = createTaskHtml('TaskTest','Descr','Nick1','10/20/2020','TODO');
//console.log(taskHtml);
//HANDLE ACTIONS IN TASK LIST
let taskListGroupElem = document.getElementById('taskListGroupId');
taskListGroupElem.addEventListener('click',(event)=> {
//HANDLE MARK AS DONE
    if(event.target.id === "markDoneBtn"){
        //alert(event.target.id);
        //alert(event.target.parentElement.id);
        let foundTask = tm.getTaskById(event.target.parentElement.id);
        //alert(foundTask);
        //Update the status to DONE
                foundTask.status = 'Done';

        //Rerender the page
        tm.render();
        //Update Local storage
        tm.save();
    }   

//HANDLE DELETE TASK
    if(event.target.id === "deleteTaskBtn"){
        //alert(event.target.id);
        //alert(event.target.parentElement.id);
        tm.deleteTask(event.target.parentElement.id);

        //Rerender the page
        tm.render();
        //Update Local storage
        tm.save();
    }
});
