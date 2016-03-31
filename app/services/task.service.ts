/**
 * Created by simon on 31.03.16.
 */
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";

@Injectable()

export interface ITask {
    id:     string;
    title:  string;
    desc:   string;
    done:   boolean;
}
export class TaskService {

    public tasks: Observable<ITask>;
    private _tasksObserver: any;
    private _tasks: ITask[];

    public selectedTask: Observable;
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

    addTask(task: ITask) {
        console.log("Service addTask", task);
        this.tasks
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
        this._tasksObserver.next(this._tasks);
    }

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
}