/*
const createTaskHtml = (id,name, description, assignedTo, dueDate, status) => {
    const html = `<li class="list-group-item">
                        <div class="card" id="${id}">
                            <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                                <li class="list-group-item">${description}</li>
                                <li class="list-group-item">${assignedTo}</li>
                                <li class="list-group-item">${dueDate}</li>
                <li class="list-group-item">${status}</li>
                <input type="button" id="markDoneBtn" class="done-button" value="Mark Done">                
                            </div>
                        </div>
                    </li>`
    return html;
}
*/

const createTaskHtml = (id,name,desc,assignedTo,dueDate,status) => {
    const html = `
              <li class="list-group-item">  
              <div class="col pl-40">
                        <div class="card border-secondary">
                                <div class="card-body" id="${id}">
                                        <h4 class="card-title">${name}</h4>
                                        <p class="card-text">${desc}</p>
                                        <p class="card-text">${assignedTo}</p>
                                        <p class="card-text">${dueDate}</p>
                                        <p class="card-text">${status}</p>
                        <button type="button" id="markDoneBtn" class="done-button btn btn-success" value="Mark Done">Mark Done</button>
                        <button type="button" id="deleteTaskBtn" class="delete-button btn btn-danger" value="Delete">Delete</button>   
                                </div>
                        </div>      
              </div> 
          </li>`;
    return html;

};



/*
class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    };
    addTask(name, description, assignedTo, dueDate, status = 'TODO') {
        this.currentId++;
        this.tasks.push(this.currentId, name, description, assignedTo, dueDate, status);
    };
};
*/
class TaskManager {
    constructor(){
    this._currentId = 0;
    this._tasks = [];
    }
  get currentId(){
    return this._currentId;
  }
  set currentId(cid){
    this._currentId = cid;
  }
  get tasks(){
    return this._tasks;
  }
  addTask(name,description,assignedTo,dueDate,status){
    const cid = this.currentId;
      // console.log('Id is ' + cid);
      // console.log('name is ' + name);
    let task = {
        id:cid,
      name:name,
      description:description,
      assignedTo:assignedTo,
      dueDate:dueDate,
      status:status //'TODO'
    };
    //let task = [10];
    //console.log('Tasks is ' + this._tasks);
    //console.log('Task is ' + task);
    this._tasks.push(task);
    this.currentId += 1;
    //need to return task for testing
    return task;
  }

  render(){
      let tasksHTMLList = [];
      let taskHTML ;
      if(this._tasks === null) {
          //alert('Empty tasks');
          return;
      }
      this._tasks.forEach(function(task) {
        //date = new Date(task[dueDate]);
        //formattedDate = 
        taskHTML = createTaskHtml(task.id,task.name,task.description,task.assignedTo,task.dueDate,task.status);
        //alert(taskHTML);
        tasksHTMLList.push(taskHTML);
      });

      let taskHtmlStr = tasksHTMLList.join('\n');

      let taskListGroupElem = document.getElementById('taskListGroupId');
      taskListGroupElem.innerHTML = taskHtmlStr;
  }

  getTaskById(taskId){
      let foundTask ;
      //alert('In class ' + taskId);
      this._tasks.forEach(function(task) {
              //alert('Task Id ' + task.id);
          if(task.id == taskId){
                      //alert('Matched');
              foundTask = task;
                      //alert('Found task' + foundTask.id);
              //break;
          }
      });
      return foundTask;
  }

  save(){
      const tasksJSON = JSON.stringify(this._tasks);
      localStorage.setItem("tasks",tasksJSON);

      const currentId = JSON.stringify(this._currentId);
      localStorage.setItem("currentId",currentId);
  }

  load(){
      let tasksJson = localStorage.getItem("tasks");
      
      if(tasksJson != null){
          //alert('Storage Tasks JSON is ' + tasksJson);
          this._tasks = JSON.parse(tasksJson);
      }

      let currentId = localStorage.getItem("currentId");
      if(currentId != null){
          //alert('Storage Current Id is ' + currentId);
          this._currentId = Number(currentId);
      }
  }

  deleteTask(taskId) {
      const newTasks = [];
      this._tasks.forEach(function(task) {
          if(task.id != taskId){
              newTasks.push(task);
          }
      });

      this._tasks = newTasks;

  }


} //end class TaskManager
//need to comment that line out when u not running test
//export {TaskManager};