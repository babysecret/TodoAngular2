/**
 * Created by simon on 31.03.16.
 */

export class Task {
    public id: string;
    constructor(
        public title: string = "",
        public desc: string = "",
        public done?: boolean = false
    ) {
        this.title = this.title.trim();
        this.desc = this.desc.trim();
        this.id = this.generateUUID();
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