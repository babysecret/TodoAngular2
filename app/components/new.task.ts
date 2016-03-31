/**
 * Created by simon on 30.03.16.
 */

import {Component, Inject} from "angular2/core";
import {TaskService} from "../services/task.service";
import {Task} from "../models/Task";

@Component({
    selector:"new-task",
    template: `
        <h2>new task add</h2>
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <input type="title" 
                   class="form-control" 
                   id="title" 
                   placeholder="Title"
                   [(ngModel)]="task.title"
                   required>
          </div>
          <div class="form-group">
            <textarea class="form-control" 
                      id="desc" 
                      placeholder="Description" 
                      rows="3"
                      [(ngModel)]="task.desc"></textarea>
          </div>
          <div class="form-group"> 
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" 
                      class="btn btn-default" 
                      (click)="add()">
                      Add task</button>
            </div>
          </div>
        </form>
    `
})

export class NewTask {

    public task = new Task();

    constructor(@Inject(TaskService) private TaskService){}

    add(){
        console.log("NewTask addClick!");
        this.TaskService.addTask(this.task.title, this.task.desc);
        this.task = new Task();
    }
}