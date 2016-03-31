import {bootstrap}    from 'angular2/platform/browser';
import {TodoAppComponent} from './app.component';
import {TaskService} from "./services/task.service";

bootstrap(TodoAppComponent, [TaskService]);
