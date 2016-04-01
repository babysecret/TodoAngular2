/**
 * Created by simon on 31.03.16.
 */
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {Task} from "../models/Task";

@Injectable()
export class TaskService {

    public   tasks:         Observable<Task>;
    private _tasksObserver: any;
    private _tasks:         Task[];
    public getTasks = () => this._tasks;

    public   selectedTask:  Observable<Task>;
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

    selectTask(task: Task) {
        console.log("Service", task);
        this._selectedTaskObserver.next(task);
    }

    addTask(title: string, desc: string = "") {
        console.log("Service addTask", title, desc);
        this._tasks.push(new Task(title, desc));
        this.update();
    }

    doneTask(task: Task) {
        console.log("Service doneTask", task);
        this._tasks.forEach((obj: Task, i) => {
            if(task == obj) {
                this._tasks[i].done = !obj.done;
            }
        });
        this.update();
    }

    unDoneTask(task: Task) {
        this.doneTask(task);

    }

    delTask(task: Task) {
        console.log("Service delTask", task);
        this._tasks = this._tasks.filter((obj:Task) => {
            return (task != obj)
        });
        this.update();
    }

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