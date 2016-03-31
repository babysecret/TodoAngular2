/**
 * Created by simon on 30.03.16.
 */

import {Component} from 'angular2/core';
import {TaskViewComponent} from "./components/task-view.component";
import {TodoListComponent} from "./components/todo-list.component";
import {NewTask} from "./components/new-task.component";

@Component({
    selector: 'todo-app',
    directives: [TaskViewComponent, TodoListComponent, NewTask],
    template: `
        <h1>Todo application</h1>
        <div class="row">
            <div class="col-md-6 col-sm-6">
                <todo-list>list-loading</todo-list>
                <new-task>new task</new-task>
            </div>
            <div class="col-md-6 col-sm-6">
                <task-view>todo view loading</task-view>    
            </div>
        </div>
    `
})

export class TodoAppComponent {
    constructor() {

    }
}
