#! /usr/bin/env node

import inquirer from "inquirer";

let todo_list:string[]=[];

let while_condition: boolean = true;

while(while_condition === true){
    
    //------------------------------options-----------------------------------------------
    let option = await inquirer.prompt([{
        type:"list",
        name:"user_option",
        message:"Select an option:",
        choices:["Add","Remove"]
    }])

    //-------------------------------Add-------------------------------------------------
    if(option.user_option === "Add"){
        let answer = await inquirer.prompt([{
            type:"input",
            name:"User_ans",
            message:"Write something to add in the task list."
        }])

        if (answer.User_ans !== ''){
            todo_list.push(answer.User_ans)
            console.log(todo_list);
            
        }else{
            console.log("Please write something to add in the todo list");
        }

    }

    //------------------------------Remove------------------------------------------------
    else if (option.user_option === "Remove"){
        let remove_choice = await inquirer.prompt([{
            type:"list",
            name:"remove_item",
            message:"Select item to remove",
            choices: todo_list
        }]);

        let index_to_remove = todo_list.indexOf(remove_choice.remove_item);

        if (index_to_remove >= 0){
            todo_list.splice(index_to_remove, 1);

            console.log("You removed:", remove_choice.remove_item);
            console.log(todo_list);
            }
    }

    //--------------------------------------Confirmation----------------------------------------------
    let User_ans = await inquirer.prompt([{
        type:"confirm",
        name:"selection",
        message:"\nDo you want to continue?",
        default: true
    }])

    if (User_ans.selection === false){
        while_condition = false;
    }
}

console.log(`Thank you for using TODO List`);
