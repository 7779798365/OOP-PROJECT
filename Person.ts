export class Person{
    private Personality:string;
    constructor(personality:string){
        this.Personality = personality;
    }
    AskQuestions(Questions:number){
        if(Questions === 1){
            this.Personality = "Extrovert";
        }
        else if(Questions === 2) {
            this.Personality = "Introvert";
        }
        else {
            this.Personality = "Mystery";
        }
    }
    GetPersonality(){
        return this.Personality;
    }
}