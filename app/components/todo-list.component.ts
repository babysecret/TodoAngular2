/**
 * Created by simon on 30.03.16.
 */

import {Component, Inject} from "angular2/core";
import {TaskService} from "../services/task.service";

@Component({
    selector:"todo-list",
    template: `
        <h2>todo list</h2>    
        <div class="list-group">
          <a href="#" class="list-group-item" 
                      *ngFor="#task of list" 
                      (click)="select(task)">
            <i *ngIf="task.done" class="fa fa-check"></i>
            {{task.title}}
          </a>
        </div>
    `
})

export class TodoListComponent {
    private list = [];
    constructor(@Inject(TaskService) private TaskService){
        TaskService.tasks.subscribe(newList => this.list = newList);
        TaskService.update();
    }

    select(task) {
        console.log("TodoListComponent", task);
        this.TaskService.selectTask(task);
    }
}
