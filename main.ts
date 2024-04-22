
import inquirer from "inquirer";

let mybalance = 10000; //dollers
let mypin = 1234;
let pinanswer = await inquirer.prompt([
  { name: "pin", message: "enter your pin", type: "number" },
]);

if (pinanswer.pin === mypin) {
  console.log("correct pin code!!!");
  let operationanswer = await inquirer.prompt([
    {
      name: "operation",
      message: "please select operations",
      type: "list",
      choices:["withdraw amount", "check balance"]
    },
  ]);
  if (operationanswer.operation === "withdraw amount"){
    let amountanswer = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount to withdraw",
        type: "number",
      },
    ]);
    if (mybalance >= amountanswer.amount) {
      mybalance -= amountanswer.amount;
      console.log(`${amountanswer.amount} withdraw successfully`);
      console.log(`your remaining balance is: ${mybalance}`);
    } else {
      console.log(`insufficient balance`);
    }
  }
  else if (operationanswer.operation === "check balance") {
    console.log(`your current balance is:${mybalance}`);
  }
}
  else
  {console.log("your pin is incorrect, please try again");
}
