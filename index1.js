import inquirer from "inquirer";
import chalk from "chalk";
import abc, { q, w, h,u } from "./app.js";
let { fatherName, fatherName1 } = abc;
async function main() {
    let answers = await inquirer.prompt([
        {
            type: "input",
            message: "Enter your name",
            name: "user_name",
        },
    ]);
    console.log(chalk.red("answers.user_name =", answers.user_name));
    console.log(chalk.green("fatherName =", fatherName));
    console.log(chalk.bgCyan("fatherName1 =", fatherName1));
    console.log(chalk.blue("q =", q));
    console.log(chalk.yellow("w =", w));
    console.log(chalk.magenta("h =",u));
}
main();
