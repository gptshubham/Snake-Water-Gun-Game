// usersChoice function
const usersChoice = ()=>{
    let choice = prompt("Enter Your Choice s, w or g : ");
    choice = choice.toLocaleLowerCase();
    console.log(choice);
    return choice;
}
// computersChoice function
const computersChoice = ()=>{
    // gameOptions Array
    const Options = ["s","w","g"];
    // index value
    let indexValue = Math.floor(Math.random() * Options.length);
    console.log(indexValue);
    // computers choice
    let selection = Options[indexValue];
    console.log(selection);
    return selection;
}
// resultOf function
const resultOf = (user,computer)=>{
    // case 1 : tie
    if(user == computer) {
        alert(`It's a Tie !\nYou : ${user}\nComputer : ${computer}`);
    }
    // case 2 : user wins
    else if(
        (user == "s" && computer == "w") || 
        (user == "g" && computer == "s") || 
        (user == "w" && computer == "g")
    ) {
        alert(`You Won!\nYou : ${user}\nComputer : ${computer}`);
    }
    // case 3 : user looses
    else {
        alert(`You Lost!\nYou : ${user}\nComputer : ${computer}`);
    }
}

let playAgain = true;
while(playAgain){
    // taking input from user
    let user = usersChoice();
    // computer's choice
    let computer = computersChoice();
    resultOf(user,computer);
    playAgain = confirm("Play Again ?");
}
