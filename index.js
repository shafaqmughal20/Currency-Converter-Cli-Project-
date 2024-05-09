#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.magenta.bold.italic("\n \t Welcome To Currency Converter\n"));
// list of currencies with their exchange rates
let exchange_rate = {
    "KWD": 0.31,
    "SAR": 3.75,
    "USD": 1,
    "EUR": 0.9,
    "QAR": 3.64,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280,
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert",
        choices: ["KWD", "SAR", "USD", "EUR", "QAR", "CAD", "AUD", "PKR",]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["KWD", "SAR", "USD", "EUR", "QAR", "CAD", "AUD", "PKR",]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
//currency converter by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//Display the converted amount
console.log(`converted Amount= ${chalk.green(converted_amount.toFixed(2))} `);
