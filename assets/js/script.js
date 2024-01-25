 //Adding two event listeners.

 //1.code will be done when the page has finised loading.
document.addEventListener("DOMContentLoaded", function (){
 //Returns all elements found as an array. 
let buttons = document.getElementsByTagName("button");
 //Iterate through that array using for loop.
for (let button of buttons){
    button.addEventListener("click", function() {
         // this refers to the button that has been just clicked 
        if (this.getAttribute("data-type") === "submit") {
            alert("You clicked Submit!");
        } else {
         // if the submit button is not clicked it will dispaly the other game types (+,-,/)
            let gameType = this.getAttribute("data-type");
            alert(`You clicked ${gameType}`);
        }
    });
}
});

function runGame(){}


function checkAnswer(){}


function calculatCorrectAnswer(){}


function incrementScore(){}


function incrementWrongAnswer(){}


function displayAdditionQuestion(){}


function displaySubtractQuestion(){}


function displayMultiplyQuestion(){}


function displayDivisionQuestion(){}