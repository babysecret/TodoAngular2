/**
 * Created by simon on 30.03.16.
 */

import {Component, Inject} from "angular2/core";
import {TaskService, ITask} from "../services/task.service";

@Component({
    selector:"new-task",
    template: `
        <h2>new task add</h2>
        <form class="form-horizontal" role="form">
          <div class="form-group">
              <input type="email" class="form-control" id="title" placeholder="Title">
          </div>
          <div class="form-group">
              <textarea class="form-control" id="desc" placeholder="Description" rows="3"></textarea>
          </div>
          <div class="form-group"> 
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-default" (click)="add()">Add task</button>
            </div>
          </div>
        </form>
    `
})

export class NewTask {

    constructor(@Inject(TaskService) private TaskService){
        
    }

    add(){
        console.log("NewTask addClick!");
        task: ITask;

        this.TaskService.addTask(null);
    }
}