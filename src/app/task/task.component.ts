import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public doneTasks = [];
  public tasks = [];
  public newTask;
  public completed;
  public index;
  public message: string;

  addTask() {
    if (this.newTask == '') {
      this.message = 'Error: Input Task Name!';
    } else {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  addCompletedTask(
    index //make sure to strike through the task as well in html
  ) {
    if (this.newTask != '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  doneTask(
    index //if task marked as done add to done table below
  ) {
    this.completed = this.tasks[index];
    this.doneTasks.push(this.completed);
    this.tasks.splice(index, 1);
  }

  deleteTask(
    index: number //delete one specific task
  ) {
    this.tasks.splice(index, 1);
  }

  clearTasks() {
    //clear all tasks from table
    this.doneTasks.length = 0;
  }

  clearCurrentTasks() {
    //clear all tasks from table
    this.tasks.length = 0;
    this.message = '';
  }
}
