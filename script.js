let userScore = 0;
let aiScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const aiScorepara = document.querySelector("#ai-score");

const genaiChoice = () =>{
    const option = ["paper","rock","sessior"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};

const drawGame = () =>{
    
    msg.innerText = "Game was Draw. play again"
    msg.style.backgroundColor = "cadetblue";
};
const showWiner = (userWin , userChoice , aiChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `you win! your ${userChoice} beats ${aiChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        aiScore++;
        aiScorepara.innerText = aiScore;
        msg.innerText = `you lost. ${aiChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
 console.log("user choice =", userChoice); 
 const aiChoice = genaiChoice();
 console.log("ai choice =", aiChoice); 

 if(userChoice === aiChoice ){
    //draw game
    drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
        //scissor,paper
        userWin = aiChoice === "paper" ? false : true;
    }else if(userChoice ==="paper") {
        //rock , scissor
        userWin = aiChoice === "sessior" ? false : true;
    }else{
        //rock , paper
        userWin = aiChoice === "rock" ? false : true;
    }
    showWiner(userWin , userChoice , aiChoice);
}
};

choices.forEach((choice) => {
choice.addEventListener("click",() =>{
const userChoice = choice.getAttribute("id");
playGame(userChoice);
});
});
