// console.log("hello Badar Ahmed Sheikh")
// import inquirer from "inquirer"
// import a from "./app.js"
// import chalk from "chalk"  
// let fatherName=a.fatherName
// let answers = await inquirer.prompt([{type:"unknown",
//     message:"Enter your name",name:"user_name"}])
// console.log("answers.usre_name=",answers.user_name)
// console.log("import fatherName from ./app.js=",fatherName)
// import inquirer from "inquirer";
// import chalk from "chalk";
// import a from "./app.js";
// let fatherName = a.fatherName;
// let obj=a
// async function main() {
//   let answers = await inquirer.prompt([
//     {
//       type: "input",
//       message: "Enter your name",
//       name: "user_name",
//     },
//   ]);
//   console.log("answers.user_name =", answers.user_name);
//   console.log("import fatherName from ./app.js =", fatherName,a);
// }
// main();
import inquirer from "inquirer";
import chalk from "chalk";
import abc, { fatherName22 } from "./app.js";
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
    console.log(chalk.blue("fatherName22 =", fatherName22));
}
main();
