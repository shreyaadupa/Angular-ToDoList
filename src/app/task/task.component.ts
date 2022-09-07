import { Component, OnInit } from '@angular/core';
 
@Component({
 selector: 'app-task',
 templateUrl: './task.component.html',
 styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
 
 constructor() { }
 
 ngOnInit() {
 }
 
 public doneTasks = [];
 public tasks = [];
 public newTask;
 public Priority;
 public Status;
 public index;
 
  addTask() //will not be needed soon
  {
     if(this.newTask != '')
     {
       this.tasks.push(this.newTask);
       this.newTask = '';
     }
   }
 
   addHighTask()//insert at top of list
   {
     if(this.Priority === 'High')
     {
       this.tasks.unshift(this.newTask);
       this.newTask = '';
       this.Priority = '';
     }
   }
 
   addMediumTask() //insert after the last high task OR at top if no high task
   {
 
   }
 
   addLowTask()//insert at bottom of list
   {
     if(this.Priority === 'Low')
     {
       this.tasks.push(this.newTask);
       this.newTask = '';
       this.Priority = '';
     }
   }
 
   addCompletedTask(index) //make sure to strike through the task as well in html
   {
     if(this.newTask != '')
     {
       this.tasks.push(this.newTask);
       this.newTask = '';
       this.Priority = '';
     }
   }
 
   doneTask(index)//if task marked as done add to done table below
   {
     this.doneTasks.push(this.newTask);
     this.tasks.splice(index, 1);
   }
 
    deleteTask(index: number) //delete one specific task
    {
       this.tasks.splice(index, 1);
    }
 
 
   clearTasks() //clear all tasks from table
   {
     this.doneTasks.length = 0;
   }
 
}
