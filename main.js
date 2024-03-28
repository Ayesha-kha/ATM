#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000; //Dollars
let myPin = 82003;
let entPin = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "Please enter your pin",
});
if (entPin.pin === myPin) {
    console.log("correct pin code!");
    let perform = await inquirer.prompt([
        {
            name: "operation",
            message: "please select options",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    // WITHDRAWN
    if (perform.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is:" + myBalance);
        if (amountAns.amount >= myBalance) {
            console.log("insufficient balance");
        }
        ;
        // CHECK BALANCE
    }
    else if (perform.operation === "check balance") {
        console.log(`Your balance is: ${myBalance}`);
    }
    else if (perform.operation === "fast cash") {
        let opt = await inquirer.prompt([{
                name: "fast_options",
                type: "list",
                message: "How much money you want to withdraw?",
                choices: ["1000", "5000", "10000", "20000"],
            }]);
        console.log("congratulations you have successfully withdrawn");
        if (opt.fast_options === "1000") {
            myBalance -= opt.fast_options;
            console.log(`your remaining balance is ${myBalance}`);
        }
        if (opt.fast_options === "5000") {
            myBalance -= opt.fast_options;
            console.log(`your remaining balance is ${myBalance}`);
        }
        if (opt.fast_options === "10000") {
            myBalance -= opt.fast_options;
            console.log(`your remaining balance is ${myBalance}`);
        }
        if (opt.fast_options === "20000") {
            myBalance -= opt.fast_options;
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
}
else {
    console.log("Invalid pin ");
}
