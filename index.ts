#! /usr/bin/env node

import inquirer from "inquirer"

const counter: {
    Sentence: string
} = await inquirer.prompt([

    {
        name: "Sentence",
        message: "Enter your sentence to count words:",
        type: "input",
    }
])

const wordCount = counter.Sentence.trim().split(" ");

console.log(wordCount);

console.log(`Your word count for the sentence is: ${wordCount.length}`);
