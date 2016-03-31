/**
 * Created by simon on 31.03.16.
 */
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {Task} from "../models/Task";

@Injectable()

export interface ITask {
    id:     string;
    title:  string;
    desc?:  string;
    done:   boolean;
}

export class TaskService {

    public   tasks:         Observable<ITask>;
    private _tasksObserver: any;
    private _tasks:         ITask[];

    public   selectedTask:  Observable;
    private _selectedTaskObserver;

    constructor() {

        this.loadTasks();

        this.selectedTask = new Observable(
            observer =>
                this._selectedTaskObserver = observer
        );

        this.tasks = new Observable(
            observer =>
                this._tasksObserver = observer
        );
    }

    selectTask(task: ITask) {
        console.log("Service", task);
        this._selectedTaskObserver.next(task);
    }

    addTask(title: string, desc: string = "") {
        console.log("Service addTask", title, desc);
        this._tasks.push({
            id: this.generateUUID(),
            title: title,
            desc: desc,
            done: false
        });
        this.update();
    }

    doneTask(task: ITask) {
        console.log("Service doneTask", task);
        this._tasks.forEach((obj: ITask, i) => {
            if(task == obj) {
                this._tasks[i].done = !obj.done;
            }
        });
        this.update();
    }

    unDoneTask(task: ITask) {
        this.doneTask(task);

    }

    delTask(task: ITask) {
        console.log("Service delTask", task);
        this._tasks = this._tasks.filter((obj:ITask) => {
            return (task != obj)
        });
        this.update();
    }
    /*
     *
     */
    update(){
        this.sort();
        this.updateStore();
        this._tasksObserver.next(this._tasks);
    }

    private sort() {
        this._tasks = this._tasks.sort((n1:Task, n2:Task) =>
            (n1.done == n2.done)
                ? (n1.title.toUpperCase() > n2.title.toUpperCase())
                : n1.done
        );
    }

    /*
     * Storage methods
     */

    private loadTasks() {
        let persistedTodos = JSON.parse(localStorage.getItem('tasks')) || this.fakeTasks();
        this._tasks = persistedTodos;
    }

    private updateStore() {
        localStorage.setItem('tasks', JSON.stringify(this._tasks));
    }

    /*
     * Utilites
     */

    generateUUID() {
        var d = new Date().getTime();

        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    }

    /*
     * Dev methods
     */

    private fakeTasks() {
        return [
            {
                id:     "LsdjLjdlskflsdf",
                title:  "title1",
                desc:   "desc1",
                done:   true
            },
            {
                id:     "LsdjLjdlskflsdf",
                title:  "title1",
                desc:   "desc1",
                done:   true
            },
            {
                id:     "LsdjLjdlskflsdf",
                title:  "title1",
                desc:   "desc1",
                done:   true
            },
            {
                id:     "LsdjLjdlskflsdf",
                title:  "title1",
                desc:   "desc1",
                done:   true
            }
        ]
    }

}