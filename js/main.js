var userScoreValID = document.getElementById('userScoreVal');
var compScoreValID = document.getElementById('compScoreVal');
var resultUserStatmentID = document.getElementById('result-user-stat');
var resultCompStatmentID = document.getElementById('result-comp-stat');
var resultFinalStatmentID = document.getElementById('result-final-stat');
var rockChoiceID = document.getElementById('r');
var paperChoiceID = document.getElementById('p');
var scissorChoiceID = document.getElementById('s');
let userScore = 0;
let compScore = 0;


function getCompChoice() {
    const compChoices = ['r', 'p', 's'];
    const RandomCompChoice = Math.floor(Math.random()*3);
    return compChoices[RandomCompChoice];
}


function rspUser(user_choice, comp_choice) {
    if (user_choice === "r") {
        return "Rock";
    } else if (user_choice === "p") {
        return "Paper";
    } else if (user_choice === "s") {
        return "Scissors";
    }
}


function rspComp(comp_choice) {
    if (comp_choice === "r") {
        return "Rock";
    } else if (comp_choice === "p") {
        return "Paper";
    } else if (comp_choice === "s") {
        return "Scissors";
    }
}





function win(user_Choice, comp_Choice) {
    // console.log("WIN");
    userScore++;
    userScoreValID.innerHTML = userScore;
    resultUserStatmentID.innerHTML = "User: " + rspUser(user_Choice);
    resultCompStatmentID.innerHTML = "Computer: " + rspComp(comp_Choice);
    resultFinalStatmentID.innerHTML = "Winner: USER";
}
function lose(user_Choice, comp_Choice) {
    // console.log("LOSE");
    compScore++;
    compScoreValID.innerHTML = compScore;
    resultUserStatmentID.innerHTML = "User: " + rspUser(user_Choice);
    resultCompStatmentID.innerHTML = "Computer: " + rspComp(comp_Choice);
    resultFinalStatmentID.innerHTML = "Winner: COMPUTER";
}
function draw(user_Choice, comp_Choice) {
    // console.log("DRAW");
    resultUserStatmentID.innerHTML = "User: " + rspUser(user_Choice);
    resultCompStatmentID.innerHTML = "Computer: " + rspComp(comp_Choice);
    resultFinalStatmentID.innerHTML = "Winner: NONE";
}


function game(userChoiceClicked) {
    const compChoiceClicked = getCompChoice();
    switch (userChoiceClicked + compChoiceClicked) {
        case "rs":
        case "pr":
        case "sp":
            // console.log(userChoiceClicked + " + " + compChoiceClicked + "=" + "USER WINS");
            win(userChoiceClicked, compChoiceClicked);
            break;
        case "rp":
        case "ps":
        case "sr":
            // console.log(userChoiceClicked + " + " + compChoiceClicked + "=" + "COMP WINS");
            lose(userChoiceClicked, compChoiceClicked);
            break;
        case "rr":
        case "pp":
        case "ss":
            // console.log(userChoiceClicked + " + " + compChoiceClicked + "=" + "TIE");
            draw(userChoiceClicked, compChoiceClicked);
            break;

    }

}



rockChoiceID.addEventListener('click', function(){
    game("r")
})

paperChoiceID.addEventListener('click', function(){
game('p')})

scissorChoiceID.addEventListener('click', function(){
game('s')})