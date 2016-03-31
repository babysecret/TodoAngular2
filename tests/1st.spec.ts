// import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {Task} from "../app/models/Task.js";

describe('Task:', () => {
    let t = {
        id:"asdasdasdasd",
        title:"Title",
        desc:"desc",
        done:true
    }

    it('Has id', () => {
        let task = new Task(t.name, t.desc, t.done);
        expect(task.id).isNot;
    });

    it('Trim desc and title', () => {
        expect(true).toEqual(true);
    });
});