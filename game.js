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
        question: "Uncaught TypeError: Cannot read , is scary to see...syntax is perfect what could it be?",
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
        question: "Uncaught TypeError: Variable undefined , but it is so share what's wrong do you mind?",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "Your background not doing what you tell it...are you adjusting the border or the border's text be specfic! ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "CSS is hard but the computer is literal...what's a big problem that might first seem miniscule? ",
        choice1: "Syntax: make sure there is a period after everything",
        choice2: "CSS: Cascading Style Sheets - make sure there are no properties being overruled by another style father down in the sheet",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the Javascript first because functions take longer to load so it keeps your page fast",
        answer: 2,
    },
    {
        question: "HTML is simple, but don't sleep on details...what happened if the html loads but the styling fails? ",
        choice1: "Check the link to the CSS style sheet!",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "Spacing seems simple but slow down it's not a race...things keep moving what is there to keep it in place? ",
        choice1: "C and D",
        choice2: "Webpages are automatically responsive",
        choice3: "CSS grid!",
        choice4: "CSS flexbox!",
        answer: 1,
    },
    {
        question: "An id and a class both give elements style...but what makes them different be quick don't take a while!! ",
        choice1: "it doesn't matter, because it is in the HTML",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "id is individual but class can group styles of elements together",
        answer: 3,
    },
    {
        question: "Your code might run this time declaring not being sure....but to pass here dinstiguish a gloabal variable...",
        choice1: "const",
        choice2: "let",
        choice3: "this is not a declaration word but if it has already been declared in the DOM",
        choice4: "var",
        answer: 3,
    },
    {
        question: "Your code can work but it's messy and coworkers are mad at it..... ",
        choice1: "because my code works this time, but just this once cause it's static",
        choice2: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 3,
    },
    {
        question: "This is computer science but let's do some math...if you use == and not === what difference would that have?",
        choice1: " === is strict equality and means the datatype is being compared between variables as well",
        choice2: "it doesn't matter, because it is in the HTML",
        choice3: "it doesn't matter, because the js is linked to the HTML and CSS",
        choice4: "Neither of them work",
        answer: 1,
    },
    {
        question: "Center your content... 3 ways to try....do all three or just say which one is right.. ",
        choice1: "Align Items",
        choice2: "Justify Content",
        choice3: "Text-align",
        choice4: "ANY - depending on what trying to center and what html element/tag vs class adding the style to",
        answer: 3,
    },
    {
        question: "I can change the size of the text of this element but not this one, tell me why this is so we can continue the fun! ",
        choice1: "Tag elements like <h5> have set sizes but  <p> can be given a size",
        choice2: "Doesn't matter b/c of REM",
        choice3: "it does matter, because paages load in order and the HTML has to be loaded before the js can add functionality",
        choice4: "it does matter, because the pages need to load the js first because functions take longer to load so it keeps your page fast",
        answer: 1,
    },
    {
        question: "You're a great engineer but can you land a job, depends on if you can do this thing or not... ",
        choice1: "creative problem solve",
        choice2: "debug",
        choice3: "improve code written by others and yourself",
        choice4: "ALL THIS AND MORE!",
        answer: 3,
    },
    {
        question: "Which is a backend skill?",
        choice1: "HTML",
        choice2: "Javascript",
        choice3: "Python, Node.js, and Ruby",
        choice4: "CSS",
        answer: 3,
    },
    {
        question: "Which is a full-stack skill?",
        choice1: "HTML and CSS",
        choice2: "Javascript",
        choice3: "Python, Node.js, and Ruby",
        choice4: "All of the above",
        answer: 4,
    },
    {
        question: "What is the primary difference between frontend and backend development?",
        choice1: "front end is more user seen while backend is more data and storage",
        choice2: "They are the same thing",
        choice3: "Frontend is HTML and CSS",
        choice4: "Backend is only Javscript",
        answer: 1,
    },
    {
        question: "What should you do if you want to break into TECH as a new developer?!",
        choice1: "look for REALISTIC roles based on your experience and level of expertise",
        choice2: "network",
        choice3: "be consistent, persistent, and constantly practice and improve what you can present to employers!",
        choice4: "ALL OF THE ABOVE - CLICK THIS ONE - THIS IS THE ANSWER - oops who wrote that there",
        answer: 3,
    },
    {
        question: "Which of these are skills a Full-Stack developer should have? ",
        choice1: "databases and storage",
        choice2: "Git/Github",
        choice3: "HTTP, REST",
        choice4: "All of the Above",
        answer: 4,
    },
];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 25;

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

/*strict comparison compares the data type as welloes not */
/*common technique to give it a default value  CLASSTOAPPLY??*/

        let classApply = "incorrect";
        if (selectedAnswer == currentQuestion.answer) {
            classApply = "correct";
        }
        getNewQuestion();
        console.log(classApply);
        /*ERROR Uncaught TypeError: Cannot read properties of undefined (reading 'classlist') at HTMLParagraphElement.<anonymous> (game.js:269:38) */
        selectedChoice.parentElement.classlist.add(classApply); /*- LOOK INTO WHAT THIS CLASS LIST IS SUPPOSED TO BE DOING AND THE SYNTAX TO FIND MY BUG */
});
});

startGame();

/* use Math.floor to return a random number for the random question - a random nunmber between 0-3. Math.random alone returns a  decimal between 0-1 */

/*change color to red and green and do a pause - check to see if selected answer is the same as the correct answer if so display green if not display red */