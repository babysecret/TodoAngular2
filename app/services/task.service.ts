/**
 * Created by simon on 31.03.16.
 */
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";

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
        this.fakeTasks();
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
        console.log("Service", task)
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
        this.fetch();
    }

    doneTask(task: ITask) {
        console.log("Service doneTask", task);
        this._tasks.forEach((obj: ITask, i) => {
            if(task == obj) {
                this._tasks[i].done = !obj.done;
            }
        });
        this.fetch();
    }
    
    unDoneTask(task: ITask) {
        this.doneTask(task);

    }

    delTask(task: ITask) {
        console.log("Service delTask", task);
        this._tasks = this._tasks.filter((obj:ITask) => {
            return (task != obj)
        });
        this.fetch();
    }

    fetch(){
        this.sort();
        this._tasksObserver.next(this._tasks);
    }

    sort(){
        this._tasks = this._tasks.sort((n1:Task, n2:Task) =>
            (n1.done == n2.done)
                ? (n1.title.toUpperCase() > n2.title.toUpperCase())
                : n1.done
        );
    }

    /*
    Additional methods
     */

    private fakeTasks() {
        this._tasks = [
            {
                id:"adasdasd",
                title:"Name1",
                desc:"Desk3",
                done:true
            },
            {
                id:"ada123sdasd",
                title:"Name2",
                desc:"Desk7",
                done:false
            },
            {
                id:"adasdaqwsd",
                title:"Name3",
                desc:"Desk2",
                done:true
            }
        ];
    }

    generateUUID() {
        var d = new Date().getTime();

        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    }
}