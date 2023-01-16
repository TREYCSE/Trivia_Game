//reference several pieces of the HTML elements using id's
//to get a reference to the choice-texts/the answer choice - can give each an ID but there is a better way to do it,
//so i will query on the class choice-text, that will give a list of choices, and will update from that point
//also adding data-number to create a custom data attribute
const question = document.getElementById("question");
//creating an arrray from the HTML Collection list so that I can use array functions and manage the data - note that HTML needs to load before js or it won't have access to the data I am reference=ing
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

let currentQuestion = [];
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
/*check to see if it is correct by comparing the answer number */
let availableQuestions = [];

let questions = [
    {
        question: "OH DOM-MY! What is the significance of where you place the <script> MOM-my? ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because pages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "If you want to join Software junction, tell me difference between using a standard and an arrow function...",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because pages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "Reference and calling may be similar in syntax but have a different use...tell me how that is before you overestimate yourself and lose!",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because pages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "A great engineer you are? Alas alas, not if you can't spot the difference between an object and a class!",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "Sometimes the console says undefined...when there's data there tell me before you lose your mind!",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "DOMMY DOMMY! What is the significance of whhere you place the <script> mommy? ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "The page won't load...it crashes each time.. what could be wrong?? Is there a bug you can find!??! ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paaes load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "Don't get too cocky and forget all the basics..what's wrong when you see 404 errors on your pages? ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "You're on a tight deadline but you need your code to last. So you need to ___________. [fill in the blank]",
        choice1: "Make it work, make it good, make it fast!",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 1,
    },
    {
        question: "DOMMY DOMMY! What is the significance of whhere you place the <script> mommy? ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "DOMMY DOMMY! What is the significance of whhere you place the <script> mommy? ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "DOMMY DOMMY! What is the significance of whhere you place the <script> mommy? ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "DOMMY DOMMY! What is the significance of whhere you place the <script> mommy? ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "DOMMY DOMMY! What is the significance of whhere you place the <script> mommy? ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "DOMMY DOMMY! What is the significance of whhere you place the <script> mommy? ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "DOMMY DOMMY! What is the significance of whhere you place the <script> mommy? ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "DOMMY DOMMY! What is the significance of whhere you place the <script> mommy? ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "DOMMY DOMMY! What is the significance of whhere you place the <script> mommy? ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "DOMMY DOMMY! What is the significance of whhere you place the <script> mommy? ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "DOMMY DOMMY! What is the significance of whhere you place the <script> mommy? ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "DOMMY DOMMY! What is the significance of whhere you place the <script> mommy? ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "DOMMY DOMMY! What is the significance of whhere you place the <script> mommy? ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "DOMMY DOMMY! What is the significance of whhere you place the <script> mommy? ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "DOMMY DOMMY! What is the significance of whhere you place the <script> mommy? ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "DOMMY DOMMY! What is the significance of whhere you place the <script> mommy? ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {

/*make this greater than or EQUAL to */
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        return window.location.assign("end.html");
    }

    questionCounter ++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {         
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    })
    /*so the computer doesn't choose from questions already given */
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

/*strict comparison compares the data type as well */
/*common technique to give it a default value  CLASSTOAPPLY??*/
        console.log(selectedAnswer == currentQuestion.answer);
        getNewQuestion();
});
});

startGame();

/* use Math.floor to return a random number for the random question - a random nunmber between 0-3. Math.random alone returns a  decimal between 0-1 */

/*change color to red and green and do a pause - check to see if selected answer is the same as the correct answer if so display green if not display red */