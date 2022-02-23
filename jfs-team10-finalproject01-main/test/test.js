import {assert} from 'chai';
//const mocha = require('mocha');
//var taskManager = require('../Prod/js/taskManager');
import {TaskManager} from "../Prod/js/TaskManager.js";

let tm = new TaskManager();
let name = 'Final Project';
let desc = 'Create A Task Manager';
let assignedTo = 'Team chris,madhu,azmuddin';
let dueDate = '2020-10-10';
let status = 'Todo';
let idval ;
describe('TaskManager', function() {
  describe('Add Task Validation', function() {
    it('All the new task features validation', function() {      
      let task = tm.addTask(name,desc,assignedTo,dueDate,status);
      idval = task.id;
      //console.log(idval);
      //assert.equal([1, 2, 3].indexOf(3), 2);
      //console.log(task);
      assert.equal(task.name,name);
      assert.equal(task.description,desc);
      assert.equal(task.assignedTo,assignedTo);
      assert.equal(task.dueDate,dueDate);
      assert.equal(task.status,status);
    });
    it('Array length validation', function() {      
      let len = tm.tasks.length;
      assert.equal(len,1);
    });
  });

  describe('Get Task By Id Validation', function() {
    it('Retrieve the newly created task validation', function() {      
      let task = tm.getTaskById(0);
      //idval = task.id;
      //console.log(idval);
      //assert.equal([1, 2, 3].indexOf(3), 2);
      //console.log(task);
      assert.equal(task.name,name);
      assert.equal(task.description,desc);
      assert.equal(task.assignedTo,assignedTo);
      assert.equal(task.dueDate,dueDate);
      assert.equal(task.status,status);
    });
    it('Array length validation', function() {      
      let len = tm.tasks.length;
      assert.equal(len,1);
    });
  });

  describe('Delete Task Validation', function() {
    it('Array length validation', function() {      
      tm.deleteTask(0);
      let len = tm.tasks.length;
      assert.equal(len,0);
    });
  });

});


