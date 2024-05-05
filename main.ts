#! /usr/bin/env node
import { log } from "console";
import { validateHeaderName } from "http";
import inquirer from "inquirer";

let todos : string[] = ["AHSAN" , "SHERAZ"];

 async function createTodo(todos:string[]){
    do{
        let ans = await inquirer.prompt({
            type: "list",
            message:"select an operation",
            name:"select",
            choices:["Add", "update", "view" , "delete"],
        })
    if(ans.select == "Add"){
        let addTodo = await inquirer.prompt({
            type:"input",
            message:"add items in tha list",
            name:"todo",
        })
    todos.push(addTodo.todo);
    todos.forEach( todo => console.log(todo));
    //console.log(todos)
    }
    if(ans.select == "update"){
        let updateTodo =await inquirer.prompt({
            type:"list",
            message:"update items in the list",
            name:"todo",
            choices: todos.map(item => item)
        });
        let addTodo = await inquirer.prompt({
            type:"input",
            message:"add items in tha list",
            name:"todo",
        });
        let newTodo = todos.filter(val => val !== updateTodo.todo);
        todos =[...newTodo,addTodo.todo];
        todos.forEach( todo => console.log(todo));
        console.log(todos);
    }
    if(ans.select == "view"){
        console.log("*** TO DO LIST ***");
        todos.forEach( todo => console.log(todo));
        console.log(todos);
        console.log("******************");
    }
    
    if(ans.select == "delete"){
        let deleteTodo =await inquirer.prompt({
            type:"list",
            message:"update items in the list",
            name:"todo",
            choices: todos.map(item => item)
        });
        let newTodo = todos.filter(val => val !== deleteTodo.todo);
        todos =[...newTodo];
        todos.forEach( todo => console.log(todo));
        console.log(todos);
    }

    } while(true)

}
createTodo(todos)