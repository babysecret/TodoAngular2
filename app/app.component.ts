/**
 * Created by simon on 30.03.16.
 */

import {Component} from 'angular2/core';
import {TaskView} from "./components/task.view";
import {TodoList} from "./components/todo.list";
import {NewTask} from "./components/new.task";

@Component({
    selector: 'todo-app',
    directives: [TaskView, TodoList, NewTask],
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
