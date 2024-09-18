let userScore = 0;
let compScore = 0;
const choice1 = document.getElementById("Paper");
choice1.addEventListener("click", ()=> {
    console.log("paper");
    const choice =  compChoice();
    console.log(choice);
    const myChoice = "paper"
    if (myChoice === choice ){
        console.log("Game was drawn");
        msg.innerText = "Game was Draw. Play again.";
        msg.style.backgroundColor = "#081b31";
    } else if (myChoice === "paper" && choice === "rock") {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win! Your paper beats rock";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lose. scissor beats your paper";
        msg.style.backgroundColor = "red";
    };
 });
const choice2 = document.getElementById("Rock");
choice2.addEventListener("click", ()=> {
     console.log("Rock");
     const choice =  compChoice();
     console.log(choice);
     const myChoice2 = "rock"
     if (myChoice2 === choice ){
        console.log("Game was drawn");
        msg.innerText = "Game was Draw. Play again.";
        msg.style.backgroundColor = "#081b31";
    } else if (myChoice2 === "rock" && choice === "paper") {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lose. paper beats your rock";
        msg.style.backgroundColor = "red";
    } else {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win! Your rock beats scissors";
        msg.style.backgroundColor = "green";
    };
  });
  const choice3 = document.getElementById("Scissor");
choice3.addEventListener("click", ()=> {
     console.log("Scissor");
      const choice =  compChoice();
    console.log(choice);
    const myChoice3 = "Scissor"
    if (myChoice3 === choice ){
        console.log("Game was drawn");
        msg.innerText = "Game was Draw. Play again.";
        msg.style.backgroundColor = "#081b31";
    } else if (myChoice3 === "Scissor" && choice === "paper") {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win! Your scissor beats paper";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lose. rock beats your scissors";
        msg.style.backgroundColor = "red";
    };
  });
  const msg = document.querySelector("#msg");
  const userScorePara = document.querySelector("#user-score");
  const compScorePara = document.querySelector("#comp-score");

const compChoice = () => {
    const options = ["rock","paper","Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

