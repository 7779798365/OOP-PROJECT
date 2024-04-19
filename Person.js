export class Person {
    Personality;
    constructor(personality) {
        this.Personality = personality;
    }
    AskQuestions(Questions) {
        if (Questions === 1) {
            this.Personality = "Extrovert";
        }
        else if (Questions === 2) {
            this.Personality = "Introvert";
        }
        else {
            this.Personality = "Mystery";
        }
    }
    GetPersonality() {
        return this.Personality;
    }
}
