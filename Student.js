import { Person } from "./Person.js";
export class Student extends Person {
    Name;
    constructor(name) {
        super(name);
        this.Name = name;
    }
    get Names() {
        return this.Name;
    }
    set Names(name) {
        this.Name = name;
    }
}
