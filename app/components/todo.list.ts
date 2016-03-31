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
          <a href="#" class="list-group-item active">First item</a>
          <a href="#" class="list-group-item">Second item</a>
          <a href="#" class="list-group-item">Third item</a>
          <a href="#" class="list-group-item" *ngFor="#task of list" (click)="select(task)">
            <i *ngIf="task.done" class="fa fa-check"></i>
            {{task.name}}
          </a>
        </div>
    `
})

export class TodoList {
    private list;
    constructor(@Inject(TaskService) private TaskService){
        this.list = [
            {
                name:"Name1",
                desc:"Desk3",
                done:true
            },
            {
                name:"Name1",
                desc:"Desk7",
                done:false
            },
            {
                name:"Name1",
                desc:"Desk2",
                done:true
            }
        ];
    }

    select(task) {
        console.log("TodoList", task);
        this.TaskService.selectTask(task);
    }
}
