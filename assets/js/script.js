//Adding two event listeners.

//1.code will be done when the page has finised loading.
document.addEventListener("DOMContentLoaded", function () {
    //Returns all elements found as an array. 
    let buttons = document.getElementsByTagName("button");
    //Iterate through that array using for loop.
    for (let button of buttons) {
        button.addEventListener("click", function () {
            // this refers to the button that has been just clicked 
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                // if the submit button is not clicked it will dispaly the other game types (+,-,/)
                let gameType = this.getAttribute("data-type");
                runGame(gameType);

            }
        });
    }

    runGame("addition")
});

// creating to random number between 1 and 25 (floor rounds down)
function runGame(gameType) {
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`unknown game type: ${gameType}`);
        throw `unknown game type: ${gameType}. Aborting!`;
    }

}

/**
 * Checks the answer against the first elemnt on the retured calculate
 * correctanswer array.
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D");
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    }

    runGame(calculatedAnswer[1]);

}

/**
 * Gets the operands and the operator
 * directly from the dom and returens the correct ansewer.
 */

function calculateCorrectAnswer() {
    //parseInt is used to keep the number as in intiger as by default javascripts returns it as a string.
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}


function incrementScore() { }


function incrementWrongAnswer() { }


function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}


function displaySubtractQuestion() { }


function displayMultiplyQuestion() { }


function displayDivisionQuestion() { }