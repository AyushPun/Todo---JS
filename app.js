let tasks = [];
let command = "";
while(command != "quit") {
    let command = prompt("ENTER THE COMMAND");
    if(command === "quit") {
        alert("Thank you! Quitting...");
        break;
    }
    else if(command === "new") {
        let insert = prompt("ENTER TASK TO BE INSERTED");
        tasks.push(insert);
        alert(`${insert} INSERTED`);
    }
    else if(command === "list") {
        let string = "";
        console.log("DISPLAYING LIST");
        for(task of tasks){
           let index = tasks.indexOf(task) + 1;
           string = string + index + ". " + task + "\n";
         }
         alert(string);
    }
    else if(command === "delete") {
        alert("DELETING VALUE BE CAREFULL");
        let del = prompt("ENTER TASK TO BE DELETED");
        let index = tasks.indexOf(del);
        if(index == -1) {
            alert(`${del} NOT FOUND!`);
        }
        else {
            alert(`${del} DELETED...`);
            tasks.splice(index, 1);
        }
    }
    
    else {
            alert(`ENTER VALID REQUEST "${command}" not recognized`);
        }
}
