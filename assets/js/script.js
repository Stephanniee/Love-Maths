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
    // If the enter key is pressed it calls the check answer funtion 
    document.getElementById("answer-box").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })

    runGame("addition")
});


function runGame(gameType) {
    // empties the anwser box and adds cursor

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    // creating to random number between 1 and 25 (floor rounds down)
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "division"){
        displayDivisionQuestion(num1, num2);
    }else {
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
        incrementScore();
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
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
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "/") {
        return [operand1 / operand2, "division"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

/**
 * Gets the correct score from Dom and increase it by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText)
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * Gets the incorrect score from Dom and increase it by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText)
    document.getElementById("incorrect").innerText = ++oldScore;
}


function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}


function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand1 : operand1;
    document.getElementById('operator').textContent = "-";
}


function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}


function displayDivisionQuestion(operand1, operand2) {
    // By multiplying the op1 and op2 allows the op1 to be a higher number than op2 so it will returen whole numbers.
    document.getElementById('operand1').textContent = operand1 * operand2;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";
 }