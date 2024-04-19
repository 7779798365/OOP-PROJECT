import { Person } from "./Person.js";

export class Student extends Person {
    private Name:string;
    constructor(name:string){
        super(name);
        this.Name = name 
    }

    get Names(){
        return this.Name;
    }

    set Names(name:string){
        this.Name = name;
    }
}