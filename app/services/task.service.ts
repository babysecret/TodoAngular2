/**
 * Created by simon on 31.03.16.
 */
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TaskService {
    public selectedTask: Observable;
    private _selectedTaskObserver;
    constructor() {
        this.selectedTask = new Observable(
            observer =>
                this._selectedTaskObserver = observer
        );

    }

    selectTask(task) {
        console.log("Service", task)
        this._selectedTaskObserver.next(task);
    }

    addTask(task) {
        console.log("Service addTask", task);
    }

    doneTask(task) {
        console.log("Service doneTask", task);
    }

    delTask(task) {
        console.log("Service delTask", task);
    }

    fakeTasks() {
        return [
            {
                name:"Name1",
                desk:"Desk3"
            },
            {
                name:"Name2",
                desk:"Desk7"
            },
            {
                name:"Name3",
                desk:"Desk2"
            }
        ];
    }
}