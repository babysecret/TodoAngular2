import {it, describe, expect, beforeEach, inject} from 'angular2/testing';

import {TodoAppComponent} from "../app/app.component";
import {Task} from "../app/models/Task";
import {TaskService} from "../app/services/task.service";
import {TaskViewComponent} from "../app/components/task-view.component";
import {NewTask} from "../app/components/new-task.component";
import {TodoListComponent} from "../app/components/todo-list.component";

describe('Todo App Component', () => {
    var app: TodoAppComponent = null;
    beforeEach(() => {
        app = new TodoAppComponent();
    });

    it('should have an items property', () => {
        expect(app.items).toBeDefined();
    });
});

describe('Task Servises', () => {
    var service: TaskService = null;
    beforeEach(() => {
        service = new TaskService();
    });

    it("load tasks", () => {
        expect(service.tasks.length).not.toEqual("undefined", 0, null);
    });

    it('should have props', () => {
        expect(service.tasks).toBeDefined();
        expect(service.selectedTask).toBeDefined();
    });
});

describe('App Logic', () => {

    var service: TaskService = null;
    var list: TodoListComponent = null;
    var view: TaskViewComponent = null;
    var add: NewTask = null;

    beforeEach(() => {
        service = new TaskService();
        view = new TaskViewComponent(service);
        list = new TodoListComponent(service);
        add = new NewTask(service);
    });

    it('added task should be appear', () => {
        var count = list.getList().length;
        service.addTask("title", "desc");
        expect(list.getList().length).toEqual(count+1);
    });

    it('deleted task should be disappear', () => {
        var count = list.getList().length;
        service.delTask(list.getList()[0]);
        expect(list.getList().length).toEqual(count-1);
    });
    
    it('select task', () => {

    });

    it('done task', () => {

    });

    it('sort tasks', () => {

    });
});

describe('TaskViewComponent', () => {
    var view: TaskViewComponent = null;
    beforeEach(() => {
        view = new TaskViewComponent(null);
    });
});

describe('Task:', () => {
    let t = {
        id:"asdasdasdasd",
        title:"Title",
        desc:"desc",
        done:true
    }

    it('Has id', () => {
        let task = new Task(t.title, t.desc, t.done);
        expect(task.id).not.toEqual(null);
    });

    it('Trim desc and title', () => {
        ["   123   ", "    123", "123    "].forEach((text) => {
            let task = new Task(text, text);
            expect(task.title).toEqual("123");
            expect(task.desc).toEqual("123");
        });

    });
});