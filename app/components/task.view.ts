/**
 * Created by simon on 30.03.16.
 */

import {Component, Inject} from "angular2/core";
import {TaskService} from "../services/task.service";

@Component({
    selector:"task-view",
    template: `
        <h2 *ngIf="task">todo view</h2>
        <h3 *ngIf="task">{{task.name}}</h3>
        <p *ngIf="task">{{task.desc}}</p>
        <button class="btn btn-success" (click)="done()">Done</button>
        <button class="btn btn-danger" (click)="del()">Delete</button>
    `
})

export class TaskView {
    private task: any;
    constructor(@Inject(TaskService) private TaskService){
        TaskService.selectedTask.subscribe(newTask => this.task = newTask);
        // this.task = {
        //     name:"Name",
        //     desc:"Desk"
        // }
    }

    done(){
        console.log("TaskView", " Done");
        this.TaskService.doneTask(this.task);
    }

    del(){
        console.log("TaskView", " Delete");
        this.TaskService.delTask(this.task);
    }
}