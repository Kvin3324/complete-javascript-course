/***************************
CODING CHALLENGE 7
*/

/********************
-- Let's build build a fun quiz game in the console.

1. Build a function constructor called Question to describe a question. A question should include:
  a) question itself
  b) the answers from which the player can choose the correct one (choose an adequate data structure here,
  array, object, etc.)
  c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers
(each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number
 of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot nor
(Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code.
So make sure that all your code is private and doesn't interfere with the other programmers code
(Hint: we learned a special technique to do exactly that).
*/

/**********************
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
*/

(function() {
  /**
  * Variables
  */
  const tab = [];
  let isOk = true;

  /**
  * Déclaration
  */
  function pushInTab(object) {
    tab.push(object);
  }
  const Question = function(question, answer, correct) { //TODO: Create new class.
    this.question = question;
    this.answer = answer;
    this.correct = correct;
    pushInTab(this);
  }

  const Player = function(nickName, score) {
    this.nickName = nickName;
    this.score = score;
  }

  const checkObject = function (question, answer, correct) {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
}

function loopInTab(array) {
    for (let i = 0; i < array.length; i++) {
        if (i === number) {
            console.log(array[i].question);
            for (const y of array[i].answer) {
                console.log(y);
            }
            return new checkObject(array[i].question, array[i].answer, array[i].correct);
        }
    }
}

function correctAnswer(userAnswer, correct) {
  if (parseInt(userAnswer) === correct) {
    console.log(`You are so clever ${player1.nickName}: Right answer !`);
    number = Math.round(Math.random() * tab.length);
    player1.score ++;
    console.log(`The score of ${player1.nickName} is: ${player1.score}`);
    console.log('/*****************************/');
  } else {
    alert(`Too bad: WRONG ! Your are a big shit ${player1.nickName}`);
  }
}
  /**
  * Exécution prog
  */
  const userName = prompt("Enter your nickname: ");
  const player1 = new Player(userName, 0);
  const question1 = new Question("Is 2 greater than 1 ?", ['Yes', 'No'], 0);
  const question2 = new Question("Is Paris is the capitale of france ?", ['Yes', 'No'], 0);
  const question3 = new Question("What is the coolest language ?", ['Js', 'PHP', 'Ruby'], 0);
  const question4 = new Question("What's your name ?", ['John', 'Jonas', player1.nickName], 1);
  let number = Math.round(Math.random() * tab.length);


  while(isOk) {
    let objectCheck = loopInTab(tab);
    let result = prompt("Enter your reponse");
    if (result != "exit") {
      correctAnswer(result, objectCheck.correct);
    } else {
      isOk = false;
      break;
    }
  }
})();

