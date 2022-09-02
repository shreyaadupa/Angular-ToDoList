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

  public tasks = [];
  public newTask;

   addTask() {

      if(this.newTask != '')
      {
        this.tasks.push(this.newTask);
        this.newTask = '';
      }
    }
  

     deleteTask(index) {
        this.tasks.splice(index, 1);
    }
}

