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
 public completed;
 public Priority;
 public Status;
 public index;
 public totalList = [];
 
  addTask() //will not be needed soon
  {
    
     if(this.newTask != '')
     {
      if(this.Priority == 'High')
      {
        
        this.totalList.push(this.newTask);
        this.tasks.unshift(this.newTask);

        this.newTask = '';
        this.Priority = null;

        highVisibility();


      }
      /*
      else if(this.Priority == 'Medium')
      {
        this.totalList.push(this.newTask);
        this.totalList.forEach(el => {
          if (el[this.index] === true) {  // or just if (el[1]) if you are sure it is always a boolean
            el.push(...this.newTask) // or add[0]
          }
        })

        for(let i = 0; i<this.totalList.length; i++)
        {
         // if(this.totalList[i].)
        }
        

      }*/
      else if(this.Priority == 'Low')
      {
        this.totalList.push(this.newTask);
        this.tasks.push(this.newTask);
        this.newTask = '';
        this.Priority = null;
      }
     }
   }

  
    highVisibility()
    {
     document.getElementById("high").style.display = "block";
    }
    medVisibility()
    {
     document.getElementById("med").style.display = "block";
    }
    lowVisibility()
    {
     document.getElementById("low").style.display = "block";
    }
   

  

   /*
   visibility()
   {

      if(this.Priority == 'High')
      {
        let h = document.getElementById("hhh");
        h.style.display = "none";

      }

   }*/
 
 
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
     this.completed = this.tasks[index]; 
     this.doneTasks.push(this.completed);
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

   clearCurrentTasks() //clear all tasks from table
   {
     this.tasks.length = 0;
   }
 
}

function highVisibility() {
throw new Error('Function not implemented.');
}
