/**
 * Created by simon on 30.03.16.
 */

import {Component, Inject} from "angular2/core";
import {TaskService} from "../services/task.service";

@Component({
    selector:"task-view",
    template: `
        <div *ngIf="task">
            <h2>todo view</h2>
            <h3>{{task.name}}</h3>
            <p>{{task.desc}}</p>
            <button *ngIf="task.done" class="btn btn-success" (click)="unDone()">UnDone</button>
            <button *ngIf="!task.done" class="btn btn-success" (click)="done()">Done</button>
            <button class="btn btn-danger" (click)="del()">Delete</button>
        </div>
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

    unDone(){
        console.log("TaskView", " UnDone");

    }
}