#! /usr/bin/env node
import inquirer from "inquirer";
import { createSpinner } from "nanospinner";
import { Student } from "./Student.js";
import chalk from "chalk";
import figlet from "figlet";
import Animation from "chalk-animation";
const spinner = async () => {
    const spinner = createSpinner();
    spinner.start();
    await new Promise(Animation => setTimeout(Animation, 2000));
    spinner.stop();
    console.clear();
};
let Animation0 = () => {
    return new Promise((Animation1) => {
        setTimeout(Animation1, 5000);
    });
};
let Animationtitle1 = Animation.rainbow("Welcome To Object Oriented Programming:");
await Animation0();
Animationtitle1.stop();
let Text2 = figlet.textSync("OOP!", {
    font: "Big",
});
console.log(chalk.bold(chalk.hex('#9e1b32')(Text2)));
let Animation1 = () => {
    return new Promise((Animation1) => {
        setTimeout(Animation1, 5000);
    });
};
let Animationtitle2 = Animation.rainbow("Start Your OOP:");
await Animation1();
Animationtitle2.stop();
async function opp() {
    const color1 = chalk.bold.redBright;
    const color2 = chalk.bold.green;
    const color3 = chalk.bold.magentaBright;
    const color4 = chalk.bold.greenBright;
    const color5 = chalk.bold.whiteBright;
    let repetationprompt = false;
    while (!repetationprompt) {
        const { LikeToTalk } = await inquirer.prompt([
            {
                message: color2("Type 1 If you want to  talk to others and 2 If you would rather keep it to yourself:"),
                name: "LikeToTalk",
                type: "number",
                validate(answer) {
                    if (isNaN(Number(answer))) {
                        console.log(color1("\nPlease Enter a Valid Number"));
                        return false;
                    }
                    repetationprompt = true;
                    return true;
                }
            }
        ]);
        const Mystudent = new Student("Mystery");
        Mystudent.AskQuestions(LikeToTalk);
        console.log(color3(`You are: ${Mystudent.GetPersonality()}`));
        const { Name } = await inquirer.prompt([
            {
                message: color4("Enter Your Name: "),
                name: "Name",
            }
        ]);
        Mystudent.Names = Name;
        await spinner();
        console.log(color4(`Your Name is: ${color5(Mystudent.Names)} \nYour Personality is: ${color3(Mystudent.GetPersonality())} `));
    }
    await Restart();
}
;
const Restart = async () => {
    const color1 = chalk.bold.magenta;
    const color2 = chalk.bold.red;
    const color3 = chalk.bold.greenBright;
    let flag = true;
    while (flag) {
        const { Restart } = await inquirer.prompt([
            {
                message: color1("Do You Want To Restart Your oop ?"),
                name: "Restart",
                type: "list",
                choices: [
                    { name: color3("Yes"), value: "Yes" },
                    { name: color2("No"), value: "No" },
                ]
            }
        ]);
        if (Restart === "Yes") {
            flag = false;
            opp();
        }
        else {
            flag = false;
        }
    }
};
opp();
